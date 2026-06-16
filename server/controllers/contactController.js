const nodemailer = require("nodemailer");
const Contact = require("../models/Contact");
const validator = require("email-validator");
const sendContactMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!validator.validate(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address",
      });
    }

    await Contact.create({
      name,
      email,
      message,
    });

  
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Viraloop Contact Message`,
      html: `
        <h2>New Inquiry</h2>

        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>

        <p>${message}</p>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Message sent",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed to send",
    });
  }
};

// const validator = require("email-validator");

// if (!validator.validate(email)) {
//   return res.status(400).json({
//     message: "Invalid email address",
//   });
// }

  const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find()
      .sort({ createdAt: -1 });

    res.status(200).json(contacts);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch contacts",
    });
  }
};

module.exports = {
  sendContactMessage,
  getContacts,
};