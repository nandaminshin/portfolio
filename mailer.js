require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS  // Your app-specific password or less secure app password
    }
});

const sendEmail = (from, to, subject, text) => {
    const mailOptions = {
        from: from, // User's email
        to: to, // Your email (recipient email)
        subject: subject,
        text: text
    };

    return transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
