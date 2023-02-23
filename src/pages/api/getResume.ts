// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

type Data = {
	name: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	const fileName = 'public/resume.pdf';
	const p = path.resolve(process.cwd(), fileName);
	const stat = fs.statSync(p);

	//if there is content disposition , idm intercepts
	res.writeHead(200, {
		'Content-Type': 'application/pdf',
		'Content-Length': stat.size,
		// 'Content-disposition': 'attachment; filename=resume_ashfaq_naseem.pdf',
	});
	const stream = fs.createReadStream(p);

	stream.pipe(res);
	stream.on('end', () => {
		res.end();
	});
}
