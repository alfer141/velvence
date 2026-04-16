import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          description:
            'Titulo para buscadores (Google). Si se deja vacio, se usara el titulo del post. Maximo recomendado: 60 caracteres.',
          validation: (rule) => rule.max(70).warning('El meta title no debe exceder 70 caracteres.'),
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          description:
            'Descripcion para buscadores (Google). Si se deja vacio, se usara el inicio del contenido. Maximo recomendado: 160 caracteres.',
          validation: (rule) => rule.max(170).warning('La meta description no debe exceder 170 caracteres.'),
        }),
      ],
    }),
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        })
      ]
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
    }),
    defineField({
      name: 'faq',
      title: 'Preguntas Frecuentes (FAQ)',
      type: 'object',
      description:
        'Se renderiza debajo del articulo e inyecta Schema.org FAQPage para SEO.',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        defineField({
          name: 'title',
          title: 'Titulo de la seccion',
          type: 'string',
          description: 'Ej: "Preguntas frecuentes" o un titulo especifico al tema del articulo.',
          initialValue: 'Preguntas frecuentes',
        }),
        defineField({
          name: 'items',
          title: 'Preguntas',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'faqItem',
              title: 'Pregunta',
              fields: [
                defineField({
                  name: 'question',
                  title: 'Pregunta',
                  type: 'string',
                  validation: (rule) => rule.required().min(5).max(300),
                }),
                defineField({
                  name: 'answer',
                  title: 'Respuesta',
                  type: 'array',
                  of: [
                    defineArrayMember({
                      type: 'block',
                      styles: [{title: 'Normal', value: 'normal'}],
                      lists: [{title: 'Bullet', value: 'bullet'}],
                      marks: {
                        decorators: [
                          {title: 'Strong', value: 'strong'},
                          {title: 'Emphasis', value: 'em'},
                        ],
                        annotations: [
                          {
                            title: 'URL',
                            name: 'link',
                            type: 'object',
                            fields: [{title: 'URL', name: 'href', type: 'url'}],
                          },
                        ],
                      },
                    }),
                  ],
                  validation: (rule) => rule.required(),
                }),
              ],
              preview: {
                select: {title: 'question'},
              },
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
