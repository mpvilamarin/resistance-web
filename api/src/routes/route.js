// route.js
import { Router } from 'express'
import { createContact } from '../controllers/postForm.js'
import WelcomeMail from '../helpers/mailer.js'

const router = Router()

router.post('/form', createContact, async (req, res) => {
    const { email } = req.body
    try {
        await WelcomeMail(email)
        res.status(200).json({ message: "Correo enviado éxitosamente" })
    } catch (error) {
        res.status(500).json({ error: "Error en la ruta" })
    }
})

export default router;