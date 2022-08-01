const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main(link, toUser) {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '<foo@example.com>', // sender address
        to: toUser, // list of receivers
        subject: "Reset Password", // Subject line
        text: "Hello world?", // plain text body
        html: `<b>We have received a password change request from your account<br><br>Click on the link below to reset your password<br><br><a href="${link}">click here</a></b>`, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    return true
}

main().catch((err) => {
    return false
});

module.exports = main