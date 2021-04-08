export default function (req, res) {
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
    to: "pravin86n@gmail.com",
    subject: `New Email Address from Website`,
    text: req.body.email,
    html: `
        <div>         
          <div>Email: ${req.body.email}</div>
        </div>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
    res.status(200);
    res.end();
  });
}
