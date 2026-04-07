const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://velvence.com"

const openingHoursSpecification = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "19:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Saturday",
    opens: "10:00",
    closes: "14:00",
  },
]

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${baseUrl}/#organization`,
  name: "Velvence®",
  legalName: "Velvence",
  url: baseUrl,
  logo: `${baseUrl}/velvence-icon.png`,
  image: `${baseUrl}/og-image.png`,
  description:
    "Clínica líder en blanqueamiento y aclaramiento dental en México. Limpieza dental profesional con tecnología avanzada.",
  foundingDate: "2023",
  founder: {
    "@type": "Person",
    name: "Ofelia Aguirre",
  },
  email: "contacto@velvence.com",
  telephone: "+5215521819153",
  sameAs: [
    "https://www.instagram.com/velvence.mx",
    "https://www.facebook.com/velvence",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+5215521819153",
    contactType: "customer service",
    availableLanguage: "Spanish",
  },
}

export const localBusinessMarques = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": `${baseUrl}/#sucursal-marques`,
  name: "Velvence® — Sucursal Marqués",
  url: baseUrl,
  image: `${baseUrl}/og-image.png`,
  telephone: "+5215521819153",
  email: "contacto@velvence.com",
  priceRange: "$$",
  paymentAccepted:
    "Efectivo, Tarjeta de crédito, Tarjeta de débito, Transferencia bancaria",
  currenciesAccepted: "MXN",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Prol. Constituyentes Ote.",
    addressLocality: "Santiago de Querétaro",
    addressRegion: "Querétaro",
    postalCode: "76720",
    addressCountry: "MX",
  },
  openingHoursSpecification,
  parentOrganization: {
    "@id": `${baseUrl}/#organization`,
  },
}

export const localBusinessAifa = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": `${baseUrl}/#sucursal-aifa`,
  name: "Velvence® — Sucursal AIFA",
  url: baseUrl,
  image: `${baseUrl}/og-image.png`,
  telephone: "+5215521819153",
  email: "contacto@velvence.com",
  priceRange: "$$",
  paymentAccepted:
    "Efectivo, Tarjeta de crédito, Tarjeta de débito, Transferencia bancaria",
  currenciesAccepted: "MXN",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calzada de la Hda. S/N",
    addressLocality: "Tecámac",
    addressRegion: "Estado de México",
    postalCode: "55770",
    addressCountry: "MX",
  },
  openingHoursSpecification,
  parentOrganization: {
    "@id": `${baseUrl}/#organization`,
  },
}

export const localBusinessSchema = [localBusinessMarques, localBusinessAifa]
