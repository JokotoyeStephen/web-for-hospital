import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config()
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    tls: { rejectUnauthorized: false },
})

const sendMail = async (to, subject, text) =>{
    await transporter.sendMail({
        from: "Our Event center",
        to,
        subject,
        text
    })
}

export default sendMail