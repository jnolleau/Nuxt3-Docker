import { CompatibilityEvent } from "h3";
import nodemailer from "nodemailer";

export default defineEventHandler(async (event: CompatibilityEvent) => {
  try {
    const body = await useBody(event)

    const config = useRuntimeConfig()
    // console.log('Runtime config:', config)
    // if (process.server) {
    //   console.log('MAIL User:', config.mailUser)
    // }
    

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: config.mailHost,
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: config.mailUser, // generated ethereal user
        pass: config.mailPassword, // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Julien" <j.nolleau@orange.fr>', // sender address
      to: body.email, // list of receivers
      subject: "Hello", // Subject line
      text: body.message, // plain text body
      html: `<b>${body.message}</b>`, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // // Preview only available when sending through an Ethereal account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    return { message: "message sent successfully", body: body }

  } catch (error) {
    return { message: error }
  }
})
