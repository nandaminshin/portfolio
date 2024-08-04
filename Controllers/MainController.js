const sendEmail = require('../mailer');

const MainController = {
    index: (req, res) => {
        res.render('index');
    },

    sendEmail: (req, res) => {
        const { name, email, subject, message } = req.body;

        const emailContent = `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
    `;

        sendEmail(email, 'onayi7777@gmail.com', subject, emailContent) // Use user's email as 'from' and your email as 'to'
            .then(() => {
                res.render('index');
            })
            .catch((error) => {
                console.error('Error sending email:', error); // Log the error details
                res.status(500).send(`Error sending message: ${error.message}`);
            });
    },


}

module.exports = MainController;