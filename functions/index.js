const functions = require('firebase-functions')
const nodemailer = require('nodemailer')
const cors = require('cors')({ origin: true })
const gmailEmail = functions.config().gmail.email
const gmailPassword = functions.config().gmail.password
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
})

exports.submit = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method !== 'POST') {
      return res.status(404).send({ error: 'accepts only post request' })
    }
    const { email, message, name } = req.body
    const mailOptions = {
      from: email,
      replyTo: req.body.email,
      to: gmailEmail,
      subject: `[SITE MAISON] ${name} vous a envoyé un message`,
      text: req.body.message,
      html: `<p>${req.body.message}</p>`
    }

    mailTransport.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.status(400).send({ error })
      }
      res.status(200).send({ success: true })
    })
  })
})
