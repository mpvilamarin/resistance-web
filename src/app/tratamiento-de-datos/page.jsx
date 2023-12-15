import React from "react";
import styles from "./tratamiento.module.css";
import Link from "next/link";

export default function Datos() {

    return (
        <div>
            <div className={styles.contHero}>
                <h1 className={styles.contH1}>Tratamiento de datos</h1>
            </div>
            <div className={styles.contPrincipal}>
                <p className={styles.contText1}>
                    Te damos la bienvenida a{' '}
                    <a href="https://www.resistance.com.co/" className={styles.enlace}>
                        RESISTANCE
                    </a>
                    , El acceso a esta página web y sus subdominios, uso de servicios, implica necesariamente el sometimiento y aceptación de las políticas de términos de uso del servicio, propiedad intelectual, autorización y consentimiento para el uso de datos personales por lo tanto recomendamos dar una minuciosa y completa lectura.
                </p>
                <h3 className={styles.contH3}>Datos de la empresa</h3>
                <p>RESISTANCE SAS</p>
                <p>NIT 901.260.515-4</p>

                <h3 className={styles.contH3}>Términos de uso de los servicios</h3>
                <p>Los términos y condiciones generales que a continuación se establecen para los usuarios, regulan el uso de las plataformas y recursos brindados por RESISTANCE SAS</p>
                <p>La información que registra es verídica, real y corresponde a sus datos personales.</p>
                <p>El usuario y contraseña son de carácter personal e intransferibles.</p>
                <ul className={styles.list}>
                    <li>La suplantación o ingreso de información falsa constituye fraude que implican sanciones.</li>
                    <li>Es responsabilidad del usuario mantener la información actualizada.</li>
                    <li>Es una acción irregular registrarse varias veces con datos inconsistentes vencidos o irreales.</li>
                    <li>Como usuario hará buen uso de la información a la cual tenga acceso.</li>
                </ul>

                <h3 className={styles.contH3}>Propiedad intelectual</h3>
                <p>Todo el contenido que se muestra en el sitio web; código fuente, diseños, textos, gráficos, logos, iconos, botones, dibujos, animaciones, o cualquier otro susceptible a reutilización comercial, están sujetos a derechos de propiedad intelectual e industrial de RESISTANCE SAS, o de terceros titulares de estos que se encuentren debidamente autorizados.</p>
                <p>En ningún caso se entenderá que se concede licencia de uso, ni renuncia, ni cesión parcial o total de dichos derechos, para explotación, alteración, reproducción parcial o completa, distribución o comercialización, sobre dicho contenido sin la previa autorización de RESISTANCE SAS</p>
                <p>Los usuarios finales, única y exclusivamente podrán utilizar el material de RESISTANCE SAS para uso propio.</p>

                <h3 className={styles.contH3}>Autorización y consentimiento para el uso de datos personales protección de datos</h3>
                <p>RESISTANCE SAS, con domicilio principal en  la ciudad de Bogotá, se permite informar que en cumplimiento de la Ley Estatutaria 1581 del 2012, por la cual se estable el ‘Régimen General de Protección de Datos’ y el Decreto Reglamentario 1377 del 2013”, demanda respetuosamente su autorización para que de manera libre, previa, clara, expresa, voluntaria y debidamente informada permita a la Entidad recolectar, recaudar, almacenar, usar, procesar, compilar, intercambiar, dar tratamiento, actualizar y disponer de los datos que serán suministrados y que se incorporen en nuestras bases de datos. Esta información es y será utilizada en el desarrollo de las funciones propias de la Entidad como emisiones de certificados, registros de capacitaciones, y listados de estudiantes y capacitadores inscritos.</p>
                <p>Por favor recuerde que usted, como titular de datos personales, tiene derecho a:</p>
                <ul className={styles.list}>
                    <li>Solicitar prueba de su autorización.</li>
                    <li>Ser informado sobre el uso que se le está dando a sus datos personales</li>
                    <li>Presentar reclamaciones ante cualquier autoridad competente, en especial ante la Superintendencia de Industria y Comercio, por la violación de las leyes y regulaciones de protección de datos personales</li>
                    <li>Revocar su autorización al procesamiento de datos personales, o a solicitar la eliminación de sus datos personales, cuandoquiera que la autoridad competente haya determinado que las partes autorizadas al procesamiento han violado las normas relevantes.</li>
                    <li>Acceder, sin ningún costo, a sus datos personales que ha sido procesados.</li>
                </ul>
                <p>Todos sus datos están almacenados en la nube servidor de GODADDY custodiados con avanzados mecanismos de seguridad informática con el objetivo de evitar el uso indebido y el acceso no autorizado de terceros.</p>
                <p>En el proceso de registro usted aceptó los términos de uso del servicio y las condiciones del manejo de la información y el uso de esta, tenga en cuenta que ud puede desaprobar el uso de su información con terceros, notificando “No autorizo el uso de mis datos personales con terceros”, De no hacer eso se entenderá que está de acuerdo.</p>
                <h3 className={styles.contH3}>Actualización de políticas</h3>
                <p>Esta política de confidencialidad ha sido establecida con fecha 02 junio de 2020. RESISTANCE SAS se reserva el derecho en el futuro de modificar su política de protección de datos de acuerdo con la normatividad interna de la entidad dando cumplimiento a las actualizaciones de carácter legislativo, jurisprudencial o en la práctica empresarial requerida. La modificación o la actualización de la Política de confidencialidad, será informada a los usuarios.</p>
            </div>
        </div>
    )
}