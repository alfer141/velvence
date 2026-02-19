import { createPageMetadata } from "@/lib/metadata"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export const metadata = createPageMetadata({
  path: "/terminos-y-condiciones",
  title: "Velvence® | Términos y Condiciones",
  description:
    "Consulta los términos y condiciones de uso de los servicios de Velvence, clínica de blanqueamiento dental en Querétaro.",
  
  openGraph: {
    title: "Velvence® | Términos y Condiciones",
    description:
      "Términos y condiciones de uso de los servicios de Velvence, clínica de blanqueamiento dental en Querétaro.",
  },
})

export default function TerminosYCondicionesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header variant="static" />

      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-light text-primary-dark mb-12 text-balance">
            Términos y Condiciones
          </h1>

          <div className="space-y-12 text-primary-dark/80 leading-relaxed">
            {/* Uso y aplicación */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-light text-primary-dark">
                Uso y aplicación
              </h2>
              <p>
                Los presentes términos y condiciones aplican tanto para la página
                principal de ofeliaexperience.com como para aquellas otras que
                hayan sido creadas por Velvence e indiquen de manera expresa e
                inequívoca que forman parte integrante de este sitio web.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg md:text-xl font-medium text-primary-dark">
                  Usuarios
                </h3>
                <p>
                  Se entenderá por usuario a toda aquella persona que navegue por
                  el sitio web, accediendo a cualquiera de sus páginas o
                  secciones, bastando con el simple acceso y/o uso de este sitio
                  web, aceptando desde dicho acceso y/o uso, los términos y
                  condiciones aquí reflejados.
                </p>
                <p>
                  En caso de que el usuario desee contratar alguno de los
                  servicios ofrecidos en el sitio web, se aplicarán también las
                  políticas de contratación, las cuales serán de obligatorio
                  cumplimiento.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg md:text-xl font-medium text-primary-dark">
                  Formas de contacto
                </h3>
                <p>
                  Si un usuario deseara contactar a Velvence podrá enviar un
                  correo electrónico a la dirección{" "}
                  <a
                    href="mailto:contacto@velvence.mx"
                    className="text-primary-dark underline underline-offset-4 hover:text-primary-dark/70 transition-colors"
                  >
                    contacto@velvence.mx
                  </a>
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg md:text-xl font-medium text-primary-dark">
                  Uso del sitio web
                </h3>
                <p>
                  Toda la información gráfica, textual, de multimedia,
                  fotografías, imágenes, videos, o cualquier otro formato de
                  archivo digital que se encuentran en el sitio web, entendidos
                  de aquí en adelante como &quot;los contenidos&quot;, le pertenecen a
                  Velvence y está protegido por las leyes de derecho de autor a
                  nivel nacional e internacional.
                </p>
                <p>
                  El usuario asume la responsabilidad del uso del sitio web, no
                  pudiendo emplearlos para:
                </p>
                <ol className="list-decimal list-outside ml-6 space-y-2">
                  <li>
                    Realizar actividades ilícitas, ilegales o contrarias a la
                    moral, buenas costumbres, buena fe y al orden público;
                  </li>
                  <li>
                    Realizar comentarios o difundir contenidos o propaganda de
                    carácter racista, xenófobo, pornográfico, de apología del
                    terrorismo, que atente contra los derechos humanos o civiles
                    en general;
                  </li>
                  <li>
                    Provocar daños en la persona física, intelectual o moral de
                    Velvence, de sus proveedores o de terceras personas;
                  </li>
                  <li>
                    Introducir o difundir en la red virus informáticos o
                    cualesquiera otros sistemas físicos o lógicos que sean
                    susceptibles de provocar los daños anteriormente mencionados;
                  </li>
                  <li>
                    Intentar acceder y/o utilizar las cuentas de correo
                    electrónico de otros usuarios y modificarlos o manipular sus
                    mensajes.
                  </li>
                </ol>
                <p>
                  Velvence se reserva el derecho de retirar todos aquellos
                  comentarios que vulneren el respeto a la dignidad de la
                  persona, que sean discriminatorios, xenófobos, racistas,
                  pornográficos, que atenten contra la juventud o la infancia, el
                  orden o la seguridad pública o que, a su juicio, no resultaran
                  adecuados para su publicación. En cualquier caso, Velvence no
                  será responsable de las opiniones dadas por los usuarios en
                  cualquier herramienta de opinión que contenga el sitio web.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg md:text-xl font-medium text-primary-dark">
                  Propiedad Intelectual
                </h3>
                <p>
                  Velvence es el titular de todos los derechos de propiedad
                  intelectual e industrial del sitio web, así como de los
                  elementos contenidos en la misma, los cuales, a título
                  enunciativo, pero no limitativo, son: imágenes, sonido,
                  fotografías, audio, vídeo, software, textos, marcas,
                  logotipos, combinaciones de colores, estructura, diseño,
                  selección de materiales usados, programas necesarios para su
                  funcionamiento, acceso y uso, quedando expresamente prohibida
                  la reproducción, distribución y comunicación pública, incluida
                  su modalidad de puesta a disposición, de la totalidad o parte
                  de los contenidos del sitio web, en cualquier soporte y por
                  cualquier medio técnico, con o sin fines comerciales sin la
                  autorización de Velvence.
                </p>
                <p>
                  El usuario se compromete a respetar los derechos de autor
                  titularidad de Velvence, podrá en consecuencia visualizar,
                  imprimir, almacenar en un dispositivo electrónico o virtual,
                  pero única y exclusivamente para su uso personal y privado, no
                  pudiendo en ningún momento distribuirlos, reproducirlos,
                  onerosa o gratuitamente, a terceros ni realizar transformación
                  alguna de los mismos. En todo caso, deberá siempre hacer
                  mención a la autoría de Velvence y al sitio web cuando decida
                  compartir en cualquier red social alguno de los contenidos, no
                  pudiendo en ningún momento modificar, total o parcialmente,
                  cualquiera de los contenidos.
                </p>
                <p>
                  No se podrá compartir ningún extracto de un curso, libro,
                  entrada del blog o de cualquier parte del sitio web, ya sea
                  incluso una mención a terceros.
                </p>
              </div>
            </div>

            {/* Separador visual */}
            <hr className="border-sand" />

            {/* Exclusión de garantías */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-light text-primary-dark">
                Exclusión de garantías y responsabilidad
              </h2>
              <p>
                Velvence ha adoptado todas las medidas tecnológicas, necesarias
                en el sitio web, para evitar daños y perjuicios de cualquier
                naturaleza que pudieran ocasionar, a título enunciativo: errores
                u omisiones en los contenidos, falta de disponibilidad del sitio
                web o la transmisión de virus o programas maliciosos o lesivos en
                los contenidos o en los datos de los usuarios, y no se hace
                responsable si en algún momento una de estas medidas falla como
                consecuencia de un uso indebido y/o abusivo por parte de un
                tercero.
              </p>
              <p>
                El usuario deberá en todo momento abstenerse de suprimir,
                alterar, eludir o manipular cualquier dispositivo de protección o
                sistema de seguridad que estuviera instalado en el sitio web.
              </p>
              <p>
                Velvence se reserva el derecho de efectuar, sin previo aviso, las
                modificaciones que considere oportunas en el sitio web, pudiendo
                cambiar, suprimir o añadir tanto los contenidos y servicios que
                se presten a través de la misma, como la forma en la que éstos
                aparezcan presentados o localizados, así como el diseño y
                estructura del mismo.
              </p>
            </div>

            <hr className="border-sand" />

            {/* Enlaces */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-light text-primary-dark">
                Enlaces
              </h2>
              <p>
                Velvence no tiene control alguno sobre los enlaces y/o contenidos
                externos que puedan existir en el sitio web, por lo que no se
                hace responsable por los mismos, fiabilidad, exactitud,
                amplitud, veracidad o validez de cualquier material o información
                allí contenida, y no serán entendidos estos enlaces externos como
                una posible asociación, fusión, colaboración o participación con
                el titular y/o responsable del dominio web al cual estén
                asociados.
              </p>
            </div>

            <hr className="border-sand" />

            {/* Enlaces de afiliados */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-light text-primary-dark">
                Enlaces de afiliados
              </h2>
              <p>
                Este sitio web posee enlaces de afiliación hacia Amazon y Mercado
                Libre. Al momento de hacer clic en ellos se dirigirá a su
                plataforma y de realizar alguna compra, será Amazon o Mercado
                Libre la encargada de procesar la compra, y Velvence en su
                calidad de afiliado, obtendrá ingresos por las compras que sean
                derivadas por el uso de los enlaces que cumplan con los
                requisitos aplicables.
              </p>
            </div>

            <hr className="border-sand" />

            {/* Derecho de exclusión */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-light text-primary-dark">
                Derecho de exclusión
              </h2>
              <p>
                Velvence se reserva el derecho a denegar o retirar el acceso al
                sitio web y/o los servicios ofrecidos sin necesidad de previo
                aviso, a instancia propia o de un tercero, a aquellos usuarios
                que incumplan los presentes términos y condiciones.
              </p>
            </div>

            <hr className="border-sand" />

            {/* Resultados esperados */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-light text-primary-dark">
                Resultados esperados y limitación de garantía
              </h2>
              <p>
                En Velvence buscamos ofrecer resultados predecibles, seguros y
                estéticos, siempre basados en una valoración clínica individual.
                Aun así, es importante considerar que los resultados pueden
                variar de persona a persona por factores biológicos, hábitos,
                condición previa del esmalte/dentina y seguimiento de
                indicaciones.
              </p>
              <p>
                Los contenidos que se suministran, se imparten de manera
                informativa, no queriendo en ningún momento Velvence sustituir
                alguna asesoría profesional personalizada que el usuario, cliente
                o participante requiera en un tema determinado, y no se hará
                responsable por los problemas que pueda tener éste por un uso,
                correcto o no, de la información suministrada o por no tomar en
                cuenta problemas de salud, ideológicos, económicos o de cualquier
                otra índole que pudieran ser afectados por el contenido que se
                encuentre de forma gratuita o no expuesto dentro del sitio web.
              </p>

              {/* Blanqueamiento dental */}
              <div className="space-y-4 pl-4 border-l-2 border-sand">
                <h3 className="text-lg md:text-xl font-medium text-primary-dark">
                  Blanqueamiento dental profesional
                </h3>
                <p>
                  El blanqueamiento dental tiene como objetivo aclarar el color
                  de los dientes y mejorar su luminosidad, sin modificar la
                  anatomía dental.
                </p>
                <p className="font-medium text-primary-dark">
                  Resultados esperados:
                </p>
                <ul className="list-disc list-outside ml-6 space-y-2">
                  <li>
                    Aclarado visible del tono dental, con una mejora estética
                    progresiva que depende del punto de partida y del tipo de
                    pigmentación.
                  </li>
                  <li>
                    En muchos casos se logra una mejora notable en la percepción
                    de &quot;sonrisa más blanca&quot;, especialmente cuando existe
                    pigmentación por alimentos, bebidas o tabaco.
                  </li>
                  <li>
                    El resultado final se determina por variables individuales
                    como: color base del diente, espesor del esmalte, presencia
                    de manchas internas (intrínsecas), restauraciones,
                    sensibilidad dental y hábitos.
                  </li>
                </ul>
                <p className="font-medium text-primary-dark">
                  Consideraciones importantes:
                </p>
                <ul className="list-disc list-outside ml-6 space-y-2">
                  <li>
                    Los dientes no se blanquean de forma idéntica en todos los
                    pacientes; por ello, Velvence proporciona un pronóstico tras
                    la valoración, no una promesa de tono exacto.
                  </li>
                  <li>
                    Restauraciones (resinas, carillas, coronas) no cambian de
                    color con el blanqueamiento y pueden requerir ajuste estético
                    posterior si el paciente busca uniformidad.
                  </li>
                </ul>
              </div>

              {/* Limpieza dental */}
              <div className="space-y-4 pl-4 border-l-2 border-sand">
                <h3 className="text-lg md:text-xl font-medium text-primary-dark">
                  Limpieza dental profesional (profilaxis / higiene avanzada)
                </h3>
                <p>
                  La limpieza dental profesional tiene como finalidad remover
                  placa bacteriana, pigmentos superficiales y depósitos que no se
                  eliminan con el cepillado habitual, contribuyendo a la salud de
                  encías y al aspecto de los dientes.
                </p>
                <p className="font-medium text-primary-dark">
                  Resultados esperados:
                </p>
                <ul className="list-disc list-outside ml-6 space-y-2">
                  <li>
                    Sensación inmediata de dientes más limpios y lisos.
                  </li>
                  <li>
                    Reducción de pigmentos superficiales (manchas externas) y
                    mejora en el aspecto general de la sonrisa.
                  </li>
                  <li>
                    Mejoría del aliento y apoyo preventivo para mantener encías
                    saludables, según condición previa del paciente.
                  </li>
                </ul>
                <p className="font-medium text-primary-dark">
                  Consideraciones importantes:
                </p>
                <ul className="list-disc list-outside ml-6 space-y-2">
                  <li>
                    La limpieza no cambia el color interno del diente como lo
                    hace un blanqueamiento; su efecto estético se relaciona
                    principalmente con la eliminación de manchas externas y
                    acumulaciones.
                  </li>
                  <li>
                    En casos con inflamación gingival, sangrado o acumulaciones
                    significativas, pueden requerirse sesiones adicionales o un
                    plan periodontal antes de considerar tratamientos estéticos.
                  </li>
                </ul>
              </div>

              {/* Resina infiltrativa ICON */}
              <div className="space-y-4 pl-4 border-l-2 border-sand">
                <h3 className="text-lg md:text-xl font-medium text-primary-dark">
                  Resina infiltrativa ICON (infiltración de lesiones y manchas
                  blancas)
                </h3>
                <p>
                  La resina infiltrativa ICON está orientada a disimular manchas
                  blancas y opacidades superficiales asociadas a
                  desmineralización o alteraciones del esmalte, mejorando la
                  integración visual del diente.
                </p>
                <p className="font-medium text-primary-dark">
                  Resultados esperados:
                </p>
                <ul className="list-disc list-outside ml-6 space-y-2">
                  <li>
                    Disminución visible de la apariencia de manchas blancas,
                    logrando un aspecto más uniforme.
                  </li>
                  <li>
                    Integración estética progresiva que puede variar según el
                    tipo, profundidad y origen de la mancha (por ejemplo:
                    desmineralización, fluorosis, caries incipiente, entre
                    otras).
                  </li>
                </ul>
                <p className="font-medium text-primary-dark">
                  Consideraciones importantes:
                </p>
                <ul className="list-disc list-outside ml-6 space-y-2">
                  <li>
                    ICON no garantiza eliminar al 100% todas las manchas. En
                    algunos casos puede lograrse una mejora muy alta; en otros,
                    el resultado será parcial.
                  </li>
                  <li>
                    La respuesta depende de factores clínicos: profundidad de la
                    lesión, porosidad del esmalte, localización y extensión. Por
                    ello, Velvence realiza una valoración y pronóstico antes de
                    indicar el tratamiento.
                  </li>
                  <li>
                    Puede recomendarse combinar ICON con otros tratamientos (por
                    ejemplo, higiene profesional y/o blanqueamiento en tiempos
                    clínicamente adecuados) para maximizar armonía del color,
                    siempre bajo criterio profesional.
                  </li>
                </ul>
              </div>

              {/* Nota general */}
              <div className="bg-sand/30 rounded-lg p-6 space-y-4">
                <h3 className="text-lg md:text-xl font-medium text-primary-dark">
                  Nota general de Velvence
                </h3>
                <p>
                  Los resultados estéticos y funcionales se optimizan cuando el
                  paciente:
                </p>
                <ul className="list-disc list-outside ml-6 space-y-2">
                  <li>Asiste a una valoración previa,</li>
                  <li>
                    Sigue las indicaciones pre y post tratamiento,
                  </li>
                  <li>Mantiene hábitos de higiene y control periódico.</li>
                </ul>
              </div>
            </div>

            <hr className="border-sand" />

            {/* Modificación del aviso legal */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-light text-primary-dark">
                Modificación del presente aviso legal y duración
              </h2>
              <p>
                Velvence podrá modificar, en cualquier momento, los términos y
                condiciones aquí expuestos, sin previo aviso y estarán vigentes
                mientras se encuentren debidamente publicadas.
              </p>
            </div>

            <hr className="border-sand" />

            {/* Acciones legales */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-light text-primary-dark">
                Acciones legales
              </h2>
              <p>
                Velvence puede, en cualquier momento, ejercer acciones legales de
                carácter civil o penal, contra cualquier persona que realice un
                uso indebido del contenido expuesto en el sitio web, o por
                incumplir con estos términos y condiciones. Se aplicará en todo
                momento la legislación del territorio de México y en caso de
                algún conflicto, las partes se someterán a la jurisdicción de
                Territorio Mexicano.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
