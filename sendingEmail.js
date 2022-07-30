const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: "lakshyatecno@gmail.com",
    pass: "epjbhgdztpfhyvpu",
  },
  secure: true,
});

const mailDataObj = {
  from: "crm-no-reply@gmail.com",
  to: "lakshyanbd0@gmail.com",
  subject: "Testing the code to send the email",
  text: "sample tetxt",
  html: "<h1>Hello World</h1>",
};

transporter.sendMail(mailDataObj, (err, data) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Sending sucessfulln");
  }
});
