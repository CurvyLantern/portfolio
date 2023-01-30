// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { mailOptions, transporter } from 'src/libs/nodemailer';
import { BadRequest, SuccessResponse } from 'src/utils/ApiHelpers';

type Body = {
	email: string;
	description: string;
};
type Data = {
	email: string;
	description: string;
};

const handler = async <Body>(req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'POST') {
		// do something with post req
		const { email, description } = req.body;
		if (email) {
			try {
				await transporter.sendMail({
					...mailOptions,
					subject: 'This is a test',
					text: description,
					html: `
				<h1>This is a test heading</h1>
				<p>Body of the email</p>`,
				});

				return SuccessResponse({ req, res });
			} catch (error) {
				console.log(error);
				return BadRequest({ req, res }, error as Error);
			}
		}
	}

	// catch all route
	return BadRequest({ req, res });
};
export default handler;
