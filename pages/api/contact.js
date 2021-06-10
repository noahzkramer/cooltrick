
// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

import sgMail from '@sendgrid/mail'

export default (req, res) => {
  const {
    FROM,
    SENDTO,
    SUBJECT,
    firstName,
    Message,
  } = req.body
 
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: FROM,
    from: SENDTO, // Change to your verified sender
    subject: SUBJECT,
    text: Message,
    html: Message,
  }

  sgMail
    .send(msg)
    .then(() => {
      res.json({ success: true })
      console.log('Email sent')
    })
    .catch((error) => {
      res.json({ success: false })
      console.error(error)
    })

}