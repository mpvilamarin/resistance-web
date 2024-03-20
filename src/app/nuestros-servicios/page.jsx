import React from "react";
import styles from './nuestros-servicios.module.css';
import Link from "next/link";
import Hero from "@/components/Hero";
import Form from "@/components/Form";

export default function Servicios() {

    return (
        <div>
            <Hero
                imagePath="/images/HeroServicios.jpg"
                title="Nuestros Servicios"
                button1Text="Para Empresas"
                button2Text="Para Familias"
                button1Url="/nuestros-servicios/servicios-empresas"
                button2Url="/nuestros-servicios/servicios-familias-y-colegios"
            />
        </div>
    )
}