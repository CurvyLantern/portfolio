// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
	name: string;
	data: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	const response = await fetch('http://localhost:3000/my-resume.pdf');
	const blob = await response.blob();
	console.log(response);
	// const data = await response.json();

	res.status(200).json({
		data: blob,
		name: 'nasim',
	});
}
