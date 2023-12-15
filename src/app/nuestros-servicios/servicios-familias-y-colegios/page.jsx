'use client'
import React from "react";
import styles from '../nuestros-servicios.module.css';
import Carta from "./carta";
import Form from "@/components/Form";

export default function Familias() {

    const serviciosData = [
        {
            title: 'Bloquear sitios web no recomendables',
            description: 'Te apoyamos con la implementación de un control parental para el bloqueo de sitios web no aconsejables para los menores de tu hogar.',
            image: 'icon1.svg',
            backgroundImage: 'CardFamily3.jpg'
        },
        {
            title: 'Utilizar aplicaciones móviles de control parental',
            description: 'Supervisa la actividad online y establece reglas básicas como horas de conexión y tiempos de utilización de los dispositivos. Controla el tiempo de acceso a los diferentes dispositivos, con cuentas que puedes monitorear.',
            image: 'icon2.svg'
        },
        {
            title: 'Reconocer contactos o correos electrónicos maliciosos',
            description: 'Existen técnicas en internet como el phishing los cuales consisten en enviar correos masivos, que buscan recolectar información personal, engañando y suplantando sitios y comunicaciones confiables. En Resistance te enseñamos cómo detectar este tipo de amenazas y protegerte.',
            image: 'icon3.svg'
        },
        {
            title: 'Controlar las apps que los niños descargan o usan internet',
            description: 'Algunas de las apps y juegos que nuestros niños puedan descargar, solicitan permisos mucho más allá del alcance necesario para operar. Es importante conocer a quien le estamos entregando nuestra información.',
            image: 'icon4.svg'
        },
        {
            title: 'Proteger las contraseñas y revisar el nivel de seguridad de su computadora',
            description: 'as aplicaciones, sitios web, o herramientas que usamos cotidianamente exigen el uso de contraseñas. En Resistance te enseñamos cómo proteger tus credenciales y a conocer el riesgo que te puede ocasionar malas prácticas en el uso de tus contraseñas.',
            image: 'icon5.svg'
        },
        {
            title: 'Detectar perfiles falsos o ingeniería social',
            description: 'Debemos identificar si existen personas intentando hacernos daño o a nuestra familia, y seres queridos. Comúnmente publicamos en redes sociales información de nuestros hábitos, lugares que frecuentamos, vacaciones, deportes y actividades rutinarias. Muchas personas pueden sacar provecho de nuestra información personal o incluso utilizarla en nuestra contra.',
            image: 'icon6.svg'
        },
    ];

    return (
        <div>
            <div className={styles.contHero}>
                <h1>SERVICIOS PARA FAMILIAS Y COLEGIOS</h1>
            </div>
            <div className={styles.contVideo}>
                <iframe
                    className={styles.video}
                    src="https://www.youtube.com/embed/u1jXEdwIAh0"
                    title="Resistance Tips"
                    allowFullScreen
                ></iframe>
                <div className={styles.contFamilia}>
                    <h3 className={styles.titleFamilia}>Familias</h3>
                    <p>En Resistance, sencillamente queremos hacer tu vida digital más segura y te acompañamos para que tú y tu familia logren los mayores beneficios de los avances tecnológicos del internet y las aplicaciones, de una manera en la que viajes por un camino seguro.</p>
                </div>
            </div>
            <div className={styles.contCard}>
                {serviciosData.map((servicio, index) => (
                    <Carta
                        key={index}
                        title={servicio.title}
                        description={servicio.description}
                        image={servicio.image}
                        backgroundImage={servicio.backgroundImage}
                    />
                ))}
            </div>
            <div className={styles.cont}>
                <h2 className={styles.titleFam}>Nuestro Canal de Youtube</h2>
            </div>
            <div className={styles.cont1}>
                <h3 className={styles.titleFamily}>Servicios Para Colegios</h3>
                <p>En RESISTANCE SAS nos preocupamos por fortalecer las competencias y habilidades del ser humano de la mano de las tecnologías para prepararse a afrontar los riesgos de ciber seguridad, Es por eso que nuestra meta es educar tanto a padres de familia y colegios como ciudadanos del ciberespacio concientizando de los riesgos que conlleva el internet y todas las nuevas tecnologías de esta era digital.</p>
            </div>
            <div className={styles.cont}>
                <h2 className={styles.titleFamily}>Programas de Formación</h2>
                <p>Creemos firmemente en que las instituciones educativas con pandemia o no deberán fortalecer sus capacidades en formar a sus estudiantes en entornos cada vez más apoyados en el uso de tecnologías y por lo tanto, hoy la seguridad cibernética es un factor diferencial en como se aborda la educación ya que, las familias manifiestan una gran preocupación en como proteger a sus hijos en los distintos usos que le dan al internet, las aplicaciones y redes sociales para estar prevenidos ante amenazas como el ciber acoso, grooming, phishing ransomware, spoofing o sencillamente en el robo de información que se divulga por no aplicar las medidas de seguridad adecuadas.</p>
                <div className={styles.contContenido}>
                    <div>
                        <h3 className={styles.sub}>Control Parental</h3>
                        <p>Así como en el mundo real estamos pendientes si nuestros hijos hablan con un desconocido en un parque, si están viendo una película de contenido inapropiado o si reciben cosas de extraños, debemos estar atentos a este tipo de situaciones que suceden con más frecuencia en el ciber espacio.</p>
                        <p>Aprenderás a:</p>
                        <ul>
                            <li>Configuración desde grupo de familiar Microsoft: manejando el tiempo de uso, restricciones de navegación (bloqueo de contenido inapropiado), pagos e instalación de aplicaciones</li>
                            <li>Configuración de cuentas de Google</li>
                            <li>Android celular: Manejo de tiempo de uso, restricciones de navegación e instalación de aplicaciones</li>
                        </ul>
                    </div>
                    <img
                        src="/images/parental.jpg"
                        alt="Control Parental"
                        className={styles.contImg}
                    />
                </div>

                <div className={styles.contContenido}>
                <img
                        src="/images/antivirus.png"
                        alt="Antivirus"
                        className={styles.contImg}
                    />
                    <div>
                        <h3 className={styles.sub}>Antivirus y Firewall de sistema operativo</h3>
                        <p>Estarás más tranquilo en la navegación en internet ya que en la red abundan sitios maliciosos que instalan programas en tu dispositivo para robar información o incluso utilizar tu equipo sin tu autorización</p>
                        <p>Aprenderás a:</p>
                        <p>Al realizar una configuración adecuada de tu programa antivirus podrás actualizar y tener la protección contra nuevos virus, analizar tu equipo periódicamente en busca de malware, restringir búsquedas en internet, controlar la instalación, uso de ciertos programas y restringir acceso a ciertas páginas de internet.</p>
                    </div>
                </div>

                <div className={styles.contContenido}>
                    <div>
                        <h3 className={styles.sub}>Acceso a la red wifi y uso de VPN (virtual private network)</h3>
                        <p>Sabes que tu vecino puede estar usando tu red sin que ni siquiera lo sepas o incluso tener personas conectadas a la misma red que usas robando la información que mágicamente pasa por el aire</p>
                        <p>Aprenderás a:</p>
                        <p>Configurar tu red wifi para evitr conexiones de extraños y saber siempre quien se encuentra conectado y si fue autorizado por ti. Adicionalmente podrás aprender a implementar controles de navegación a través del router de tu hogar y transmitir tus datos de forma segura incluso si estás utilizando una red pública.</p>
                    </div>
                    <img
                        src="/images/wifi.jpg"
                        alt="Wifi"
                        className={styles.contImg}
                    />
                </div>

                <div className={styles.contContenido}>
                <img
                        src="/images/contraseñas.png"
                        alt="Contraseñas"
                        className={styles.contImg}
                    />

                    <div>
                        <h3 className={styles.sub}>Gestores de contraseñas, cifrado de archivos/discos y cifrado de correo electrónicol</h3>
                        <p>Imagina que tienes un llave multiusos…</p>
                        <p>¿Qué tan segura desearíamos que fuera esa llave?</p>
                        <p>En el mundo digital sucede lo mismo, no es bueno tener una llave para todo. Además, todas nuestras llaves debemos protegerlas bien. ¿Te parece importante una caja fuerte, donde puedas guardar cosas importante ara ti? digitalmente son carpetas ocultas y cifradas para cuidar esa información que no queremos que caiga en manos de todos.</p>
                        <p>Aprenderás a:</p>
                        <p>Generar contraseñas seguras, gestores de contraseñas, herramientas para cifrar archivos, generar archivos ocultos y configuración de cifrado de correo electrónico.</p>
                    </div>
                </div>

                <div className={styles.contContenido}>
                    <div>
                        <h3 className={styles.sub}>Gestión de seguridad y privacidad en exploradores, cuentas de Google, Microsoft y redes sociales</h3>
                        <p>Así como las grandes corporaciones obtiene mucho dinero por el uso de nuestros datos cuando navegamos o utilizamos sus aplicaciones, también invierten gran cantidad de dinero para que tengas opciones para proteger tu privacidad cuando utilizas tu explorador web, el correo electrónico, utilizas redes sociales, realizas compras y muchas actividades más, sin embargo gran parte de los ciudadanos del ciber espacio no tenemos idea como proteger nuestra privacidad en internet y es por eso que los delincuentes cibernéticos cada vez sacan más lucro por robar información de personas incautas en la red.</p>
                    </div>
                    <img
                        src="/images/google.jpg"
                        alt="Google"
                        className={styles.contImg}
                    />
                </div>

                <div className={styles.contContenido}>
                <img
                        src="/images/backup.jpg"
                        alt="backup"
                        className={styles.contImg}
                    />
                    <div>
                        <h3 className={styles.sub}>Backup y seguridad de archivos de la nube</h3>
                        <p>¿Qué pasaría si cae un rayo levanta los tacos y quema todos los dispositivos de la casa? acaso no te importaría la información que se pueda perder en el computador celular y demás?. Es importante tener copias de respaldo de nuestra información más importante, existen distintos caminos para realizar esto, pero la nube, es una muy buena opción y práctica recomendable para guardar todo eso que nos importa.</p>
                        <p>Aprenderás a:</p>
                        <p>Servicios nube para almacenar información, compartir respaldar y asegurar.</p>
                    </div>
                </div>

                <div className={styles.contContenido}>
                    <div>
                        <h3 className={styles.sub}>Phishing</h3>
                        <p>Es la técnica usada actualmente por ciber delincuentes para aprovecharse mediante técnicas de ingeniería social y obtener información importante o incluso el control de nuestros equipos y así ganar dinero mediante extorsiones o robos a tarjetas de crédito.</p>
                        <p>Aprenderás a:</p>
                        <p>Reconocer las estrategias usadas para ganar la confianza de las victimas, ejemplos y realización de correos falsos.</p>
                    </div>
                    <img
                        src="/images/phishing.jpg"
                        alt="phishing"
                        className={styles.contImg}
                    />
                </div>
            </div>
            <Form />
        </div>
    )
}