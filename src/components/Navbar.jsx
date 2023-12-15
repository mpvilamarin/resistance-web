'use client'
import React, { useState } from "react";
import Link from 'next/link';
import styles from '../styles/Navbar.module.css'



const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className={styles.container}>
      <Link href="/">
          <img src='/icons/Logo.png' alt="logo" className={styles.image} />
      </Link>
      <div className={styles.list}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/nuestros-servicios">Nuestros Servicios</Link>
          </li>
          <li className={styles.navItem} onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <Link href="/recursos">Recursos</Link>
            {showDropdown && (
              <ul className={styles.dropdown}>
                <li><Link href="/recursos/blog">Blog</Link></li>
                <li><Link href="/recursos/infografias">Infografías</Link></li>
                <li><Link href="/recursos/videos">Videos</Link></li>
              </ul>
            )}
          </li>
          <li className={styles.navItem}>
            <Link href="/sobre-nosotros">Sobre Nosotros</Link>
            {showDropdown && (
              <ul className={styles.dropdown}>
                <li><Link href="/nuestros-servicios/servicios-empresas">Servicios Empresas</Link></li>
                <li><Link href="/nuestros-servicios/servicios-familias-y-colegios">Servicios Familias y Colegios</Link></li>
              </ul>
            )}
          </li>
          <li className={styles.navItem}>
            <Link href="/contacto">Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;