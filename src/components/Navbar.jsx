'use client'

import React, { useState } from "react";
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [showDropdownRecursos, setShowDropdownRecursos] = useState(false);
  const [showDropdownServicios, setShowDropdownServicios] = useState(false);

  const toggleDropdownRecursos = () => {
    setShowDropdownRecursos(!showDropdownRecursos);
    setShowDropdownServicios(false); // Asegúrate de cerrar el otro dropdown si está abierto
  };

  const toggleDropdownServicios = () => {
    setShowDropdownServicios(!showDropdownServicios);
    setShowDropdownRecursos(false); // Asegúrate de cerrar el otro dropdown si está abierto
  };

  return (
    <nav className={styles.container}>
      <Link href="/">
        <img src='/icons/Logo.png' alt="logo" className={styles.image} />
      </Link>
      
      <div className={styles.list}>
        <ul className={styles.navList}>
          <li className={styles.navItem}  onMouseEnter={toggleDropdownServicios} onMouseLeave={toggleDropdownServicios}>
            <Link href="">Nuestros Servicios</Link>
            {showDropdownServicios && (
              <ul className={styles.dropdown}>
                <li><Link href="/nuestros-servicios/servicios-empresas">Servicios Empresas</Link></li>
                <li><Link href="/nuestros-servicios/servicios-familias-y-colegios">Servicios Familias y Colegios</Link></li>
              </ul>
            )}
          </li>
          <li className={styles.navItem} onMouseEnter={toggleDropdownRecursos} onMouseLeave={toggleDropdownRecursos}>
            <Link href="/recursos">Recursos</Link>
            {showDropdownRecursos && (
              <ul className={styles.dropdown}>
                <li><Link href="/recursos/blog">Blog</Link></li>
                <li><Link href="/recursos/infografias">Infografías</Link></li>
                <li><Link href="/recursos/videos">Videos</Link></li>
              </ul>
            )}
          </li>
          <li className={styles.navItem}>
            <Link href="/sobre-nosotros">Sobre Nosotros</Link>
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