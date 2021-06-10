
// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

import sgMail from '@sendgrid/mail'

export default (req, res) => {
  const {
    FROM,
    SENDTO,
    SUBJECT,
    firstName,
    message,
  } = req.body
 
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: SENDTO,
    from: FROM, // Change to your verified sender
    subject: SUBJECT,
    text: message,
    html: message,
  }

  sgMail
    .send(msg)
    .then(() => {
      res.json({ success: true })
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })

}