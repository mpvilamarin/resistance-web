import Link from "next/link";
import styles from '../styles/footer.module.css';

export default function Footer() {
    return (
        <footer>
            <div className={styles.container}>
                <div className={styles.contLeft}>
                    <h2 className={styles.sub}>Resistance SAS</h2>
                    <p className={styles.text}>Conócenos también en:</p>
                    <div className={styles.icons}>
                        <img src='/icons/iconoBlancoFace.png' alt="" className={styles.social} />
                        <img src='/icons/iconoBlancoTwi.png' alt="" className={styles.social} />
                        <img src='/icons/iconoBlancoWha.png' alt="" className={styles.social} />
                        <img src='/icons/iconoBlancoIn.png' alt="" className={styles.social} />
                        <img src='/icons/iconoBlancoSpo.png' alt="" className={styles.social} />
                        <img src='/icons/iconoBlancoYou.png' alt="" className={styles.social} />
                        <img src='/icons/iconoBlancoLin.png' alt="" className={styles.social} />
                    </div>
                </div>
                <div className={styles.contRight}>
                    <h4 className={styles.news}>Suscríbete a nuestro Newsletter</h4>
                    <div className={styles.contForm}>
                        <label htmlFor="Email" className={styles.label}></label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            className={styles.input}
                        />
                        <button type="submit" className={styles.button}>Suscribirse</button>
                    </div>
                    <div className={styles.link}>
                        <Link href="/tratamiento-de-datos">Política de tratamiento de datos</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};