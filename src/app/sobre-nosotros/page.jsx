/* use Client */
import React from "react";
import styles from './nosotros.module.css';
import Form from "@/components/Form";
import TableToggle from "@/components/Toggle";

export default function Nosotros() {

    return (
        <div className={styles.container}>
            <div className={styles.contHero}>
                <h1>SOBRE NOSOTROS</h1>
            </div>
            <div className={styles.cont}>
                <h1 className={styles.title}>Resistance</h1>
                <p>¿Has notado cómo el mundo ha cambiado producto de la virtualidad sin que todas las personas, empresas e instituciones educativas estuviesen preparadas para adoptar nuevas tecnologías?. Los delincuentes cibernéticos se reinventaron y aprovecharon la oportunidad, muestra de esto es que solamente en Colombia las cifras de los casos reportados por delitos como suplantación de sitios web, incrementaron en un 377% durante la pandemia en comparación con el año anterior, en páginas como: multas de tránsito, bonos del gobierno, y vacunación. El phishing es el principal esquema de fraude en el mundo; según estudio realizado en 2020 por la empresa TransUnion en 15 países que incluyó Colombia, el 27% de los consumidores afirmaron haber sido estafados con temas relacionados con el covid.</p>
                <p>Si esto sucede actualmente con adultos y personas con madurez mental y conocimientos tecnológicos, piensa un segundo ¿Qué tan probable es que un menor sin preparación en ciberseguridad y con la inocencia que los caracteriza caiga en una de estas tácticas? La primera respuesta que se viene a la cabeza es que probablemente sea muy alta, pero que los ciberdelincuentes no van a estar interesados en robar sus credenciales de redes sociales, videojuegos o clases virtuales, quiero decirte que estos ciberdelincuentes pueden llegar a acceder al PC o red de tu hogar a través del engaño de los menores.</p>
                <p>Este no es el único riesgo en internet para los menores pues también existen depredadores sexuales que realizan prácticas como perfiles falsos, ciberacoso, grooming, lo que representa una amenaza directa a la integridad de nuestros hijos. Tengo una sobrina de 3 años que ya recibe clases virtuales y mi socio tiene un hijo de 11 años que permanece la mayor parte del día conectado a internet para tomar clases virtuales, videojuegos, charlas con amigos, redes sociales, correo electrónico y en la educación formal que reciben nadie los prepara para afrontar las amenazas existentes en internet. La solución a estos problemas se divide en dos partes:</p>
                <p>Educación</p>
                <p>Tecnología</p>
                <p>Las dos deben estar de la mano, en Resistance formamos a personas de todas las edades, prestando especial atención en la población más frágil, los menores de edad atrayendolos con lúdicas y estrategias transgresoras que generan conciencia y abren la puerta a un curso formativo en ciberamenazas y herramientas para protegerse. También es importante recordar que los adultos mayores son población vulnerable, ya que tienen dinero y menos conocimiento de tecnología.</p>
                <p>Somos la primera compañía en Colombia que está cambiando el paradigma en la educación de ciberseguridad, dos expertos en ciberdefensa que entendemos que las amenazas del cibercrimen también aplican para el hogar, y buscamos inversionistas para continuar fortaleciendo nuestra estrategia de marketing y producción de contenido educativo e implementar los cursos accesibles en ciberdefensa y ciberseguridad para el ciudadano.</p>
            </div>

            <div className={styles.contGrid}>
                <div className={styles.contBox}>
                    <h5 className={styles.contNumber}>01</h5>
                    <h5 className={styles.sub}>Defensa De Nuestras Propiedades</h5>
                    <p>Reconocemos lo que es lo más importante para las personas o empresas y prestamos servicios que contribuyen con su protección desde el ámbito de seguridad digital.</p>
                </div>
                <div className={styles.contBox}>
                    <h5 className={styles.contNumber}>02</h5>
                    <h5 className={styles.sub}>Perseverancia</h5>
                    <p>Nos mantenemos con la convicción de que sin importar cuan grandes sean las dificultades que se presenten, seguiremos adelante con nuestra misión.</p>
                </div>
                <div className={styles.contBox}>
                    <h5 className={styles.contNumber}>03</h5>
                    <h5 className={styles.sub}>Firmeza</h5>
                    <p>Conservamos las bases que fijamos como nuestro objeto social.</p>
                </div>
                <div className={styles.contBox}>
                    <h5 className={styles.contNumber}>04</h5>
                    <h5 className={styles.sub}>Disciplina</h5>
                    <p>Obtenemos logros a diario sin detenernos hasta alcanzar nuestras metas.</p>
                </div>
                <div className={styles.contBox}>
                    <h5 className={styles.contNumber}>05</h5>
                    <h5 className={styles.sub}>Inteligencia</h5>
                    <p>Encontramios las mejores soluciones a las distintas situaciones.</p>
                </div>
                <div className={styles.contBox}>
                    <h5 className={styles.contNumber}>06</h5>
                    <h5 className={styles.sub}>Liderazgo</h5>
                    <p>Guíamos y motivamos a nuestro equipo de trabajo para la consecución de un fin común.</p>
                </div>
            </div>

            <div className={styles.contFrase}>
                <h2 className={styles.frase}>"El eslabón más débil de la seguridad es el componente humano</h2>
            </div>

            <h2 className={styles.title}>Nuestra Propuesta de Valor</h2>

            <div className={styles.contColumna}>
                <div className={styles.contImage}>
                    <img
                        src="images/nosotrosColumna.jpg"
                        alt="Imagen Hero"
                        className={styles.image}
                    />
                    <h2>La actual era digital</h2>
                    <p>Según la interpol, durante la pandemia del Covid 19 los siguientes ataques han aumentado: phishing y correos fraudulentos 59%, malware 36%, dominios falsos 22% y fake news 14%.</p>
                    <p>A lo anterior se suma el hecho que según la ONU, el suicidio es la segunda causa de muerte entre los jóvenes y la depresión aumentó por el aislamiento.</p>
                    <p>Dadas estas problemáticas y analizando el contexto mundial en relación a riesgos de seguridad, la estrategia para prevenir los riesgos que promueve Resistance, se basa en capacitar personas desde edad temprana (colegio o universidad), así como implementar herramientas para protegerse de los ciberdelincuentes. Consideramos como aliados de esta estrategia a entidades que promueven el buen uso de las tecnologías y la educación como son Ministerio de Educación Nacional, Mintic, Sena, Unicef, Redpapaz, entre otras.</p>
                    <p>Resistance ayuda a las organizaciones a generar estrategias asertivas para mejorar la cultura de ciberseguridad en los trabajadores, generando una conciencia colectiva, la cual podemos medir cuantitativamente bajo indicadores y mejorar a lo largo del tiempo.</p>
                </div>
                <div className={styles.contTexts}>
                    <div className={styles.contBox}>
                        <h5 className={styles.sub}>Conoce tus riesgos</h5>
                        <p>Fortalecemos las capacidades de las organizaciones para realizar medición de sus riesgos a través de criterios cuantitativos. Identificamos y clasificamos los activos de información, sus contenedores así como las áreas de preocupación y amenazas para calificar riesgos y priorizar planes de tratamiento.</p>
                    </div>
                    <div className={styles.contBox}>
                        <h5 className={styles.sub}>Educa a las personas</h5>
                        <p>Resistance ayuda a las organizaciones a generar estrategias asertivas para mejorar la cultura de ciberseguridad en los trabajadores, generando una conciencia colectiva la cual podemos medir cuantitativamente bajo indicadores y mejorar a lo largo del tiempo</p>
                    </div>
                    <div className={styles.contBox}>
                        <h5 className={styles.sub}>Defiende tus propiedades</h5>
                        <p>Impulsamos a las organizaciones a comprender las prioridades de su negocio basados en los servicios que prestan, los procesos que los soportan y los tipos de activos que contienen dichos procesos. Siguiendo una metodología formal paso a paso lograremos en compañía de los dueños de procesos y servicios de la organización calificar y determinar las prioridades para el negocio y posteriormente definir los planes de acción basados en personas, procesos o tecnología para lograr la resiliencia de la organización.</p>
                    </div>
                </div>
            </div>
            <div className={styles.cont}>
                <h2 className={styles.title}>Nosotros</h2>
                <h3>Principales Servicios</h3>
                <p>Somos una empresa fundada en febrero de 2019 cuya misión es contribuir con el desarrollo socio-económico de personas y empresas hacia un entorno digital seguro a través de la prestación de servicios de consultorías de seguridad en la información en empresas de cualquier sector enfocado en el siguiente portafolio de servicios:</p>
                <ul className={styles.list}>
                    <li>Campañas de formación en seguridad de la información.</li>
                    <li>Gestión de Riesgos.</li>
                    <li>Documentación de procesos misionales y de apoyo.</li>
                    <li>Análisis de brechas sobre normas, y estándares de seguridad.</li>
                    <li>Análisis de vulnerabilidades en la tecnología.</li>
                    <li>Ethical Hacking y Pentesting.</li>
                    <li>Arquitectura empresarial.</li>
                    <li>Definición e implementación de políticas, estándares y procedimientos de seguridad de la información.</li>
                    <li>Seguridad administrada.</li>
                </ul>
                <p>Generamos conciencia en familias e instituciones educativas acerca de los riesgos en internet, a través de los siguientes servicios:</p>
                <ul className={styles.list}>
                    <li>Producción de material audiovisual lúdico y creativo enfocado en seguridad digital.</li>
                    <li>Conferencias para generar conciencia acerca de la importancia de la seguridad digital.</li>
                    <li>Capacitaciones técnicas sobre el uso de herramientas para protegerse de los riesgos en el ciberespacio.</li>
                </ul>
                <div>
                    <h3 className={styles.contMision}>Misión</h3>
                    <p>Contribuir con el desarrollo socio-económico de personas y empresas hacia un entorno digital seguro.</p>
                    <h3 className={styles.contMision}>Visión</h3>
                    <p>Para el año 2022:</p>
                    <p>1. Estar posicionado como una marca que ofrece servicios de seguridad de la información a la medida de pequeñas y grandes empresas.</p>
                    <p>2. Contar con planes de formación presencial y digital dirigidos a empresas y familias para generar conciencia de la importancia de la seguridad de la información.</p>
                    <p>3. Contar con servicios de fácil acceso a la sociedad, manteniéndose a la vanguardia de los avances tecnológicos y amenazas del entorno digital.</p>
                    <p>4. Brindar oportunidades de trabajo a personas de excelentes cualidades humanas y espíritu de servicio.</p>
                    <p>5. Apoyar en el fortalecimiento de las competencias del capital humano.</p>
                </div>
                <div>
                    <h2 className={styles.title}>Nuestras Certificaciones</h2>
                </div>
                <div>
                    <p>Lo que necesita saber</p>
                    <h3 className={styles.title}>Preguntas Frecuentes</h3>
                    <TableToggle />
                </div>
            </div>
            <Form />
        </div>
    )
}