import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest } from 'next/server';

type CONTEXT = {
	req: NextApiRequest;
	res: NextApiResponse;
};

export const SuccessResponse = ({ res }: CONTEXT) => {
	return res.status(200).json({
		success: true,
	});
};

export const BadRequest = ({ res }: CONTEXT, error: Error = new Error('')) => {
	return res.status(400).json({
		message: error.message ? error.message : 'Bad request',
	});
};
