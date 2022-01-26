const nodemailer = require("nodemailer")
const { join } = require("path")

require("dotenv").config({
    path: join(__dirname, "../.env")
})

const transporterConfigs = {
    host: process.env.MAILER_HOST,
    port: Number(process.env.MAILER_PORT),
    secure: !!Number(process.env.MAILER_SECURE),
    authMethod: process.env.MAILER_AUTH_METHOD,
    ignoreTLS: !!Number(process.env.MAILER_IGNORE_TLS)
}

console.log("Transporter configs: ",transporterConfigs)

const emailParams = {
    from: process.env.MAILER_FROM_ADDRESS,
    to: "prova@gmail.com",
    subject: "prova",
    text: "Hello world?",
    html: "<b>Hello world?</b>"
  }

console.log("Email params: ", emailParams)


const main = async() => {
    const transporter = nodemailer.createTransport(transporterConfigs)
    const info = await transporter.sendMail(emailParams)
    console.log(`Message sent: ${info.messageId}`)
}

// main()