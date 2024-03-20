// postForm.js
import { Contacto } from "../models/form.js";
import dotenv from "dotenv";
import sendMail from '../helpers/mailer.js';
dotenv.config();

async function createContact(req, res) {
  try {
    const { nombre, email, telefono, empresa, mensaje } = req.body;

    // Crea un nuevo contacto en la base de datos
    const newContact = await Contacto.create({
      nombre,
      email,
      telefono,
      empresa,
      mensaje,
    });

    await sendMail(email)
    res.status(201).json({ newContact })

  } catch (error) {
    console.error("Error al crear el contacto:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

export { createContact };