import type { Metadata } from "next";

import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Aviso de Privacidad | Despacho PM",
  description:
    "Aviso de privacidad de Despacho PM (Pedro Miguel Monterrubio Alvarado), en cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).",
};

export default function AvisoDePrivacidad() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-(--spacing-gutter) py-(--spacing-section)">
          <p className="font-heading text-lg italic text-accent-dark">
            Aviso legal
          </p>
          <h1 className="mt-3 font-heading text-4xl text-primary sm:text-5xl">
            Aviso de Privacidad
          </h1>
          <p className="mt-2 text-sm text-muted">
            Última actualización: noviembre de 2025
          </p>

          <div className="mt-10 space-y-10 text-[15px] leading-relaxed text-foreground/80">
            <p>
              En cumplimiento con la Ley Federal de Protección de Datos
              Personales en Posesión de los Particulares (LFPDPPP), Pedro
              Miguel Monterrubio Alvarado, con cédula de agente de seguros
              M370232, con domicilio en C.P. 57460 en Estado de México y con
              medios de contacto señalados en este documento, es responsable
              del tratamiento de los datos personales que usted nos
              proporcione.
            </p>

            <div>
              <h2 className="font-heading text-2xl text-primary">
                Finalidades del tratamiento de sus datos personales
              </h2>
              <p className="mt-4">
                Los datos personales que recabamos serán utilizados para las
                siguientes finalidades:
              </p>

              <h3 className="mt-6 font-heading text-lg text-primary">
                Finalidades primarias
              </h3>
              <p className="mt-1 text-sm text-muted">
                Necesarias para la relación jurídica o precontractual.
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5">
                <li>
                  Elaborar cotizaciones, propuestas y contratos relacionados
                  con seguros y planes financieros.
                </li>
                <li>
                  Brindar asesoría personalizada en materia de protección,
                  ahorro y previsión.
                </li>
                <li>
                  Mantener comunicación para seguimiento de servicios
                  contratados o de interés.
                </li>
                <li>
                  Cumplir con obligaciones derivadas de la relación
                  contractual o legal, incluyendo la prevención de lavado de
                  dinero, fraudes y actividades ilícitas.
                </li>
                <li>
                  Verificar identidad, validar información y evaluar riesgos
                  para la emisión de pólizas o recomendaciones de seguros.
                </li>
                <li>
                  Realizar trámites correspondientes para la contratación o
                  intervención de seguros, como el pago de comisiones o la
                  gestión de siniestros.
                </li>
              </ol>

              <h3 className="mt-6 font-heading text-lg text-primary">
                Finalidades secundarias
              </h3>
              <p className="mt-1 text-sm text-muted">
                No necesarias para la relación jurídica, como mercadotecnia o
                prospección comercial.
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5">
                <li>
                  Enviar información sobre promociones, nuevos productos de
                  seguros, ofertas especiales o eventos relacionados.
                </li>
                <li>
                  Realizar estudios de mercado o encuestas para mejorar los
                  servicios.
                </li>
                <li>
                  Contactar para ofrecer productos financieros o de seguros
                  adicionales de afiliados o socios comerciales.
                </li>
              </ol>
              <p className="mt-4">
                En caso de que no desee que sus datos personales sean
                tratados para estas finalidades secundarias, desde este
                momento puede manifestar su negativa enviando un correo
                electrónico a{" "}
                <a
                  href="mailto:monterrubio_si@outlook.com"
                  className="text-primary underline underline-offset-2 hover:text-accent-dark"
                >
                  monterrubio_si@outlook.com
                </a>
                . Si no manifiesta su negativa en un plazo de 5 días hábiles a
                partir de la entrega de este aviso, se entenderá que ha
                otorgado su consentimiento. La negativa para el uso de sus
                datos personales para finalidades secundarias no será motivo
                para negar los servicios solicitados.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-primary">
                Datos personales que recabamos
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>
                  Datos de identificación: nombre completo, edad, estado
                  civil, RFC, CURP, domicilio, teléfono, correo electrónico,
                  ocupación.
                </li>
                <li>Datos laborales: profesión, lugar de trabajo.</li>
                <li>
                  Datos patrimoniales y financieros: ingresos, bienes,
                  historial crediticio (si aplica para evaluación de
                  riesgos).
                </li>
                <li>
                  Otros datos estrictamente necesarios para la prestación de
                  servicios de asesoría en seguros.
                </li>
              </ul>
              <p className="mt-4">
                Además, para ciertas cotizaciones o contratos de seguros
                (como vida, salud o gastos médicos), recabamos datos
                personales sensibles, tales como:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  Datos de salud: estado de salud actual o pasado, historial
                  médico, hábitos de vida, antecedentes heredofamiliares.
                </li>
                <li>
                  Datos biométricos: si aplican para verificación de
                  identidad en procesos de seguros.
                </li>
              </ul>
              <p className="mt-4">
                El tratamiento de datos sensibles requiere su consentimiento
                expreso y por escrito, el cual se obtiene de manera separada
                mediante los formularios o contratos correspondientes al
                momento de proporcionar dicha información.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-primary">
                Medidas de seguridad
              </h2>
              <p className="mt-4">
                Sus datos personales se resguardan bajo estrictas medidas de
                confidencialidad, seguridad física y electrónica, evitando su
                acceso, uso o divulgación no autorizada. Implementamos
                protocolos para prevenir fraudes y cumplir con regulaciones
                del sector asegurador.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-primary">
                Transferencia de datos
              </h2>
              <p className="mt-4">
                Sus datos personales podrán ser transferidos sin requerir su
                consentimiento en los casos previstos por el artículo 37 de
                la LFPDPPP, tales como:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  A compañías aseguradoras para la emisión de pólizas,
                  evaluación de riesgos, coaseguro, reaseguro o trámite de
                  siniestros.
                </li>
                <li>
                  A autoridades competentes para cumplimiento de obligaciones
                  legales o regulatorias (por ejemplo, la Comisión Nacional
                  de Seguros y Fianzas o autoridades fiscales).
                </li>
                <li>
                  A entidades afiliadas o socios comerciales para finalidades
                  relacionadas con la relación contractual.
                </li>
              </ul>
              <p className="mt-4">
                Para otras transferencias que requieran consentimiento, se le
                informará previamente y se obtendrá su autorización expresa.
                No se realizarán transferencias a terceros sin su
                consentimiento previo, salvo las necesarias para cumplir
                obligaciones legales o contractuales. Las transferencias
                podrán ser nacionales o internacionales; en este último caso,
                se garantizará un nivel de protección adecuado conforme a la
                LFPDPPP.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-primary">
                Derechos ARCO (Acceso, Rectificación, Cancelación y
                Oposición)
              </h2>
              <p className="mt-4">
                Usted tiene derecho a acceder a sus datos personales que
                poseemos y a los detalles del tratamiento de los mismos;
                rectificarlos si son inexactos o incompletos; cancelarlos
                cuando considere que no se requieren para alguna de las
                finalidades señaladas o estén siendo usados para finalidades
                no consentidas; u oponerse al tratamiento para fines
                específicos.
              </p>
              <p className="mt-4">
                Para ejercer estos derechos, presente una solicitud por
                escrito al correo{" "}
                <a
                  href="mailto:monterrubio_si@outlook.com"
                  className="text-primary underline underline-offset-2 hover:text-accent-dark"
                >
                  monterrubio_si@outlook.com
                </a>
                , incluyendo:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  Nombre y domicilio u otro medio para comunicarle la
                  respuesta.
                </li>
                <li>
                  Documentos que acrediten su identidad (copia de
                  identificación oficial vigente) o, en su caso, la
                  representación legal.
                </li>
                <li>
                  Descripción clara y precisa de los datos personales
                  respecto de los que se busca ejercer el derecho.
                </li>
                <li>
                  Cualquier otro elemento que facilite la localización de los
                  datos.
                </li>
              </ul>
              <p className="mt-4">
                Responderemos a su solicitud en un plazo máximo de 20 días
                hábiles contados desde la fecha de recepción. Si procede, se
                hará efectiva en los 15 días hábiles siguientes. La
                respuesta se enviará al medio indicado en la solicitud. El
                ejercicio de estos derechos es gratuito, salvo costos de
                reproducción o envío si aplica.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-primary">
                Revocación del consentimiento
              </h2>
              <p className="mt-4">
                En cualquier momento, puede revocar el consentimiento
                otorgado para el tratamiento de sus datos personales,
                siempre y cuando no sea necesario para cumplir con
                obligaciones legales o contractuales. Para ello, siga el
                mismo procedimiento descrito para los derechos ARCO,
                enviando una solicitud al correo{" "}
                <a
                  href="mailto:monterrubio_si@outlook.com"
                  className="text-primary underline underline-offset-2 hover:text-accent-dark"
                >
                  monterrubio_si@outlook.com
                </a>
                . La revocación no tendrá efectos retroactivos y
                responderemos en un plazo máximo de 20 días hábiles. Si la
                revocación afecta la prestación de servicios, se le
                informará oportunamente.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-primary">
                Opciones para limitar el uso o divulgación de sus datos
              </h2>
              <p className="mt-4">
                Además de los derechos ARCO y la revocación, puede limitar el
                uso o divulgación de sus datos inscribiéndose en:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  El Registro Público para Evitar Publicidad (REPEP) de la
                  Procuraduría Federal del Consumidor (PROFECO), para evitar
                  publicidad no deseada.
                </li>
                <li>
                  El Registro Público de Usuarios (REUS) de la Comisión
                  Nacional para la Protección y Defensa de los Usuarios de
                  Servicios Financieros (CONDUSEF), aplicable a servicios
                  financieros y de seguros.
                </li>
              </ul>
              <p className="mt-4">
                Adicionalmente, puede solicitar su inscripción en nuestro
                listado interno de exclusión enviando un correo a{" "}
                <a
                  href="mailto:monterrubio_si@outlook.com"
                  className="text-primary underline underline-offset-2 hover:text-accent-dark"
                >
                  monterrubio_si@outlook.com
                </a>{" "}
                con su nombre y los fines que desea excluir.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-primary">
                Cambios al aviso de privacidad
              </h2>
              <p className="mt-4">
                Cualquier modificación al presente aviso será notificada a
                través de medios electrónicos o directamente al correo
                proporcionado por el titular. Las modificaciones se
                publicarán en nuestras redes sociales o se enviarán por
                correo electrónico.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-primary">
                Datos de contacto del responsable
              </h2>
              <ul className="mt-4 space-y-1">
                <li>Pedro Miguel Monterrubio Alvarado</li>
                <li>Tel. / WhatsApp: 56 2127 0724</li>
                <li>
                  Correo:{" "}
                  <a
                    href="mailto:monterrubio_si@outlook.com"
                    className="text-primary underline underline-offset-2 hover:text-accent-dark"
                  >
                    monterrubio_si@outlook.com
                  </a>
                </li>
                <li>Redes sociales: @futurumhodie</li>
              </ul>
              <p className="mt-4">
                Si tiene dudas sobre el tratamiento de sus datos, puede
                contactarnos en los medios indicados. Para cualquier
                inconformidad relacionada con el tratamiento de sus datos,
                puede acudir al Instituto Nacional de Transparencia, Acceso
                a la Información y Protección de Datos Personales (INAI) en{" "}
                <a
                  href="https://www.inai.org.mx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-2 hover:text-accent-dark"
                >
                  www.inai.org.mx
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
