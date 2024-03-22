import Link from "next/link";
import styles from '../styles/Footer.module.css';
import Image from "next/image";

export default function Footer() {
    return (
        <footer>
            <div className={styles.container}>
                <div className={styles.contLeft}>
                    <h2 className={styles.sub}>Resistance SAS</h2>
                    <p className={styles.text}>Conócenos también en:</p>
                    <div className={styles.icons}>
                        <Image src='/icons/iconoBlancoFace.png' width={35} height={35} alt="facebook" className={styles.social} />
                        <Image src='/icons/iconoBlancoTwi.png' width={35} height={35} alt="twitter" className={styles.social} />
                        <Image src='/icons/iconoBlancoWha.png' width={35} height={35} alt="whatsapp" className={styles.social} />
                        <Image src='/icons/iconoBlancoIn.png' width={35} height={35} alt="instagram" className={styles.social} />
                        <Image src='/icons/iconoBlancoSpo.png' width={35} height={35} alt="spotify" className={styles.social} />
                        <Image src='/icons/iconoBlancoYou.png' width={35} height={35} alt="youtube" className={styles.social} />
                        <Image src='/icons/iconoBlancoLin.png' width={35} height={35} alt="linkedin" className={styles.social} />
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