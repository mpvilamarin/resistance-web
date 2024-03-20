import nodemailer from "nodemailer"
import dotenv from 'dotenv';
dotenv.config();

async function newMail(email) {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp-legacy.office365.com",
      secure: false,
      port: 587,
      auth: {
        user: 'noova@resistance.com.co',
        pass: 'N44v12OO24*',
      },
      debug: true,
      logger: true,
    });

    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log(success)
        console.log("Server is ready to take our messages");
      }
    });

    await transporter.sendMail({
      from: 'noova@resistance.com.co',
      to: email,
      subject: "prueba con async await y nodemailer new",
      text: "holi, si funciona con SMTP y sin directiva"
    })
  } catch (error) {
    console.error("El correo no fue enviado", error)
  }
}

export default newMail;