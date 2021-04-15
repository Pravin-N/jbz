// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function (req, res) {
  let nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "justbusinessweb@gmail.com",
      pass: process.env.EMAIL_PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: "justbusinessweb@gmail.com",
    to: "info@jbz.ae",
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `
      <div>
        <div>Name: ${req.body.name}</div>
        <div>Email: ${req.body.email}</div>
        <div>Phone: ${req.body.phone}</div>
        <div>Company: ${req.body.company}</div>
        <div>
          <p>Message: ${req.body.message}</p>
        </div>
      </div>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
      res.status(200);
      res.end();
    }
  });
}
