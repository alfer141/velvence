import { createPageMetadata } from "@/lib/metadata"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export const metadata = createPageMetadata({
  path: "/aviso-de-privacidad",
  title: "Velvence® | Aviso de Privacidad",
  description:
    "Conoce el aviso de privacidad de Velvence. Información sobre el tratamiento y protección de tus datos personales.",
  robots: "noindex, nofollow",
  openGraph: {
    title: "Velvence® | Aviso de Privacidad",
    description:
      "Aviso de privacidad de Velvence. Información sobre el tratamiento y protección de tus datos personales.",
  },
})

export default function AvisoDePrivacidadPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header variant="static" />

      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-light text-primary-dark mb-12 text-balance">
            Aviso de Privacidad
          </h1>

          <div className="space-y-12 text-primary-dark/80 leading-relaxed">
            {/* Responsable */}
            <div className="space-y-6">
              <p>
                Responsable de los datos personales: Ofelia Aguirre, con
                domicilio en Av. de las Ciencias 2058, 76320 Juriquilla, Qro.,
                México, en lo adelante Velvence® y cuyo correo electrónico de
                contacto es{" "}
                <a
                  href="mailto:contacto@velvence.mx"
                  className="text-primary-dark underline underline-offset-4 hover:text-primary-dark/70 transition-colors"
                >
                  contacto@velvence.mx
                </a>{" "}
                de atención al cliente.
              </p>
            </div>

            <hr className="border-sand" />

            {/* Datos solicitados */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-light text-primary-dark">
                Datos solicitados en el sitio web y finalidad del tratamiento
              </h2>
              <ul className="list-disc list-outside ml-6 space-y-4">
                <li>
                  <span className="font-medium text-primary-dark">
                    Nombre, apellidos y correo electrónico en los formularios de
                    contacto:
                  </span>{" "}
                  para realizar cualquier contacto directo con Velvence®, ya sea
                  para plantear dudas, comentarios, sugerencias, solicitar un
                  servicio o producto, o cualquier otra información. No
                  suministrar los datos personales mínimos necesarios
                  imposibilitará a Velvence® de responder a la petición.
                </li>
                <li>
                  <span className="font-medium text-primary-dark">
                    Nombre y correo electrónico:
                  </span>{" "}
                  para poder realizar comentarios en el blog del sitio web.
                </li>
                <li>
                  <span className="font-medium text-primary-dark">
                    Nombre, apellidos, dirección, teléfono, correo electrónico,
                    número de identificación fiscal:
                  </span>{" "}
                  se solicitará esta información al momento del pago del
                  servicio, ello a los fines de procesar todo lo relacionado con
                  el cliente.
                </li>
                <li>
                  <span className="font-medium text-primary-dark">
                    Nombre, teléfono y correo electrónico para newsletter:
                  </span>{" "}
                  con el debido consentimiento expreso y voluntario del titular
                  de los datos, se solicitará en el sitio web la información
                  mínima necesaria para enviar un boletín comercial
                  automatizado, donde se informará sobre publicidad, promociones
                  y otra información de los servicios y/o productos ofrecidos
                  por Velvence®.
                </li>
                <li>
                  <span className="font-medium text-primary-dark">
                    Correo electrónico:
                  </span>{" "}
                  se solicitará el correo electrónico para poder acceder al área
                  de cliente, de acuerdo a los datos suministrados al momento de
                  crear la cuenta.
                </li>
              </ul>
              <p>
                Si el usuario tiene menos de 16 años, deberá tener la
                autorización de sus padres o tutores legales para entregar sus
                datos personales. Velvence® no tiene manera de comprobar
                efectivamente la edad de los usuarios, por lo que queda eximida
                de cualquier responsabilidad, si el usuario no cumple con lo
                aquí indicado.
              </p>
              <p>
                Velvence® en todo momento velará porque el uso que se le da al
                sitio web, a los contenidos, y al tratamiento de los datos
                personales del usuario, se realicen de la forma más correcta.
                Para ello, el usuario siempre podrá ejercer sus derechos de
                acceso, rectificación, cancelación, portabilidad, olvido u
                oposición, todo ello en fiel cumplimiento de las directrices de
                las leyes que rigen la materia, escribiendo a{" "}
                <a
                  href="mailto:contacto@velvence.mx"
                  className="text-primary-dark underline underline-offset-4 hover:text-primary-dark/70 transition-colors"
                >
                  contacto@velvence.mx
                </a>
              </p>
              <p>
                En ningún momento Velvence® compartirá con terceros los datos
                que posee. En caso de hacerlo para cumplir con los servicios
                contratados por algún participante, enviar la newsletter,
                cumplir con exigencias legales o para la administración del
                sitio web, se proporcionarán los debidos acuerdos de
                confidencialidad entre las partes.
              </p>
              <p>
                Los enlaces a terceros que se puedan encontrar en el sitio web
                poseen políticas de privacidad ajenas a Velvence®. El acceso a
                estos sitios deberá ser responsabilidad del usuario, siendo su
                responsabilidad conocerlas y su decisión aceptarlas o no.
              </p>
            </div>

            <hr className="border-sand" />

            {/* Formularios */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-light text-primary-dark">
                Formularios
              </h2>
              <p>
                El sitio web dispone de 4 tipos de formularios:
              </p>

              <div className="space-y-4 pl-4 border-l-2 border-sand">
                <h3 className="text-lg md:text-xl font-medium text-primary-dark">
                  De contacto
                </h3>
                <p>
                  El usuario, cliente o participante podrá encontrar formularios
                  que facilitarán la comunicación con Velvence®, para plantear
                  dudas, comentarios, solicitar un presupuesto, reservar alguno
                  de los servicios ofrecidos en el sitio web o exigir algún
                  derecho que tenga. No suministrar los datos personales mínimos
                  necesarios imposibilitará a Velvence® responder a la petición.
                  Este tratamiento se considerará legítimo por ser parte de una
                  diligencia pre-contractual. El servidor del sitio web y del
                  correo electrónico de Velvence® serán los encargados del
                  tratamiento.
                </p>
              </div>

              <div className="space-y-4 pl-4 border-l-2 border-sand">
                <h3 className="text-lg md:text-xl font-medium text-primary-dark">
                  De publicidad
                </h3>
                <p>
                  Se solicitará a los usuarios, compradores o participantes su
                  consentimiento expreso y voluntario para entregar a Velvence®,
                  los mínimos datos necesarios para enviar publicidad e
                  información comercial relacionada con los servicios y/o
                  productos ofrecidos por Velvence®, para que se agregue a un
                  fichero automatizado de email marketing gestionado por el
                  encargado del tratamiento que se indica más abajo. El
                  tratamiento de los datos personales que se encuentren en esta
                  sección, se ha hecho con el consentimiento del titular de los
                  datos.
                </p>
                <p>
                  El servidor del sitio web será el encargado del tratamiento y
                  que se realizará con el consentimiento del titular de los
                  datos.
                </p>
              </div>

              <div className="space-y-4 pl-4 border-l-2 border-sand">
                <h3 className="text-lg md:text-xl font-medium text-primary-dark">
                  Para procesar la solicitud del servicio
                </h3>
                <p>
                  Se solicitará a los usuarios, clientes o participantes sus
                  datos para que Velvence® pueda procesar los servicios
                  solicitados por el cliente. Tratamiento legítimo de datos
                  personales por la relación contractual que existe con el
                  cliente o participante. Los datos serán guardados en el
                  servidor del sitio web.
                </p>
              </div>
            </div>

            <hr className="border-sand" />

            {/* Encargados del tratamiento */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-light text-primary-dark">
                Encargados del tratamiento
              </h2>
              <p>
                Velvence® necesita el apoyo de terceros para ofrecer
                adecuadamente sus servicios y productos, con los cuales celebra
                los debidos acuerdos de confidencialidad y verifica el
                cumplimiento de las normativas sobre protección de datos
                personales.
              </p>

              <div className="space-y-4 pl-4 border-l-2 border-sand">
                <h3 className="text-lg md:text-xl font-medium text-primary-dark">
                  Mailchimp
                </h3>
                <p>
                  Utilizada para automatizar los boletines de información
                  comercial y enviar al correo electrónico del titular de los
                  datos, publicidad de los productos y/o servicios ofrecidos en
                  el sitio web. Servicio a cargo de la empresa The Rocket
                  Science Group LLC, ubicada en Estados Unidos de América. Posee
                  un convenio de seguridad denominado Escudo de Privacidad,
                  conforme a las exigencias del Comité Europeo de Protección de
                  Datos.
                </p>
              </div>

              <div className="space-y-4 pl-4 border-l-2 border-sand">
                <h3 className="text-lg md:text-xl font-medium text-primary-dark">
                  Pixel de Facebook
                </h3>
                <p>
                  Herramienta de análisis para publicidad, utilizado para
                  conocer las acciones de los titulares de los datos en este
                  sitio web. Este servicio es proporcionado por Facebook, Inc.,
                  que está ubicada en 1601 Willow Road Menlo Park, CA 94025,
                  Estados Unidos de América. En caso de estar fuera de los
                  Estados Unidos de América o Canadá, la entidad de control de
                  datos responsable de la información es Facebook Ireland Ltd.,
                  que se encuentra ubicada en 4 Grand Canal Square Grand Canal
                  Harbour, Dublín 2, Irlanda.
                </p>
              </div>

              <div className="space-y-4 pl-4 border-l-2 border-sand">
                <h3 className="text-lg md:text-xl font-medium text-primary-dark">
                  Google Analytics
                </h3>
                <p>
                  Servicio de análisis web, para ver las estadísticas del uso
                  del sitio web. Este servicio está a cargo de la empresa Google
                  LLC, ubicada en Mountain View, California, Estados Unidos de
                  América.
                </p>
              </div>

              <p>
                En casos puntuales Velvence® podrá utilizar aplicaciones o
                herramientas que no hayan sido incluidas o nombradas en este
                listado, lo anterior por ser una mejor opción que coadyuve a la
                realización de una determinada tarea; si esto sucediera Velvence®
                notificará de esta situación a sus usuarios, clientes o
                participantes según fuere el caso.
              </p>
            </div>

            <hr className="border-sand" />

            {/* Políticas newsletter */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-light text-primary-dark">
                Políticas relacionadas con la newsletter
              </h2>
              <p>
                Estas políticas se entenderán en todo momento como parte
                complementaria de los términos y condiciones expuestos en el
                sitio web, siendo ambos de igual aplicación al momento de una
                controversia. La política de privacidad y de propiedad
                intelectual aplicada será la misma que se expone en los términos
                y condiciones del sitio web.
              </p>
              <p>
                Se entenderá como &quot;newsletter&quot; al boletín digital que
                Velvence® realiza de forma periódica y que hace llegar a sus
                suscriptores a través de un proveedor de servicios de correo
                electrónico externo, al cual el usuario se ha suscrito de manera
                voluntaria.
              </p>
              <p>
                Velvence® no está en la obligación de enviar en períodos de
                tiempo definidos la newsletter, por lo que es totalmente libre
                de hacerlo cuando lo estime conveniente. El usuario podrá en
                todo momento ejercer sus derechos de acceso, rectificación,
                cancelación u oposición siguiendo las instrucciones que
                encontrará en el pie de página de la newsletter.
              </p>
              <p>
                El usuario no deberá compartir su contenido con terceros, ya que
                esto violaría los derechos de autor de Velvence®. El único canal
                de distribución posible es el administrado y/o autorizado por
                Velvence®.
              </p>
              <p>
                Velvence® no se hará responsable por el contenido de terceros
                expuesto en la newsletter, cualquier controversia que surja
                deberá ser tratada directamente con la persona o empresa de la
                cual se hace mención.
              </p>
              <p>
                Todo el material que se expone en la newsletter está protegido
                por derechos de autor a favor de Velvence®, y en el caso de
                pertenecer a terceros, se entenderá que tiene la debida
                autorización para utilizarlo como se haya convenido con el
                autor.
              </p>
            </div>

            <hr className="border-sand" />

            {/* Duración del tratamiento */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-light text-primary-dark">
                Duración del tratamiento
              </h2>
              <p>
                En el caso de los datos personales suministrados para
                facturación y compra de productos o servicios, serán guardados
                por el tiempo legalmente aplicable por la plataforma que realice
                la facturación.
              </p>
              <p>
                En el caso de los datos personales suministrados para boletines
                comerciales electrónicos y comentarios en el blog, será por el
                tiempo que el titular de los datos desee permanecer en la lista
                de suscripción, por lo que podrá darse de baja en el momento que
                así lo desee, de forma automática como se indica en cada
                boletín, o escribiendo a{" "}
                <a
                  href="mailto:contacto@velvence.mx"
                  className="text-primary-dark underline underline-offset-4 hover:text-primary-dark/70 transition-colors"
                >
                  contacto@velvence.mx
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
