const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

sgMail.send({
	to: "alirezazarei28@gmail.com",
	from: "alirezazarei28@gmail.com",
	subject: "test email from node",
	text: " this is a test email from node"
});
