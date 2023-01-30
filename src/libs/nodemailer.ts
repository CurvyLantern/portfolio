import nodemailer from 'nodemailer';

const email = process.env.NODEMAILER_EMAIL;
const pass = process.env.NODEMAILER_PASS;

// create reusable transporter object using the default SMTP transport
export const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: email, // generated ethereal user
		pass, // generated ethereal password
	},
});

export const mailOptions = {
	from: email,
	to: email,
};
