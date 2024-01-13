import styles from '../styles/page.module.css';
import Form from '@/components/Form';
import Carousel from '@/components/Carousel';


export default function Home() {


  return (
      <div>
        <div className={styles.contPrincipal}>
          <div className={styles.contHero}>
            <div className={styles.cont1}>
              <p className={styles.p1}>Resistance SAS</p>
              <h3 className={styles.h31}>"El eslabón más débil de la seguridad es el componente humano"</h3>
              <p className={styles.p2}>Inicia con nosotros y notarás como la estrategia de Resistance para fortalecer las competencias del ser humano y enfrentar los riesgos de ciber seguridad generará ventajas competitivas para tu negocio y te dará tranquilidad acerca del buen uso de las tecnologías en tu familia</p>
            </div>
            <div className={styles.cont2}>
              <img
                src="images/imgHero.jpg"
                alt="Imagen Hero"
                className={styles.image} />
            </div>
          </div>
          <div className={styles.contHero}>
          </div>
          <div>
            <h1 className={styles.title}>Nuestra estrategia</h1>
            <p>Según la interpol, durante la pandemia del Covid 19 los siguientes ataques han aumentado: phishing y correos fraudulentos 59%, malware 36%, dominios falsos 22% y fake news 14%. A lo anterior se suma el hecho que según la ONU, el suicidio es la segunda causa de muerte entre los jóvenes y la depresión aumentó por el aislamiento.</p>
            <p>Dadas estas problemáticas y analizando el contexto mundial en relación a riesgos de seguridad, la estrategia para prevenir los riesgos que promueve Resistance, se basa en capacitar personas desde edad temprana (colegio o universidad), así como implementar herramientas para protegerse de los ciberdelincuentes. Consideramos como aliados de esta estrategia a entidades que promueven el buen uso de las tecnologías y la educación como son Ministerio de Educación Nacional, Mintic, Sena, Unicef, Redpapaz, entre otras.</p>
          </div>
        </div>
        <div className={styles.contServices}>

          <h1 className={styles.title}>Nuestros Servicios</h1>
          <p>Inicia con nosotros y notarás como la estrategia de Resistance para fortalecer las competencias del ser humano y enfrentar los riesgos de ciber seguridad generará ventajas competitivas para tu negocio y te dará tranquilidad acerca del buen uso de las tecnologías en tu familia</p>
          <div className={styles.contServiceE}>
            <img
              src="images/homeEmpresa.jpg"
              alt="Imagen Empresas"
              className={styles.image1}
            />
            <div className={styles.text}>
              <h3>Para Empresas</h3>
              <p>Ofrecemos servicios en consultoría y seguridad de administrativa que  permiten la identificación, análisis, evaluación y tratamiento de riesgos para tu empresa</p>
            </div>
          </div>
          <div className={styles.contServiceF}>
            <div className={styles.text}>
              <h3>Para Familias y Colegios</h3>
              <p>Generamos conciencia en padres de familia e instituciones educativas acerca de los riesgos de internet, aplicaciones, redes sociales, guiando con recomendaciones, aplicaciones móviles o en internet</p>
            </div>
            <img
              src="images/homeFamilia.jpg"
              alt="Imagen Familia"
              className={styles.image2}
            />
          </div>
        </div>
        <div>
          <h1 className={styles.title}>Nuestras Cetificaciones</h1>
          <Carousel />
        </div>
        <Form />
      </div>
  )
}
