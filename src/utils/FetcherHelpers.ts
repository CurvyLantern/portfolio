export const ContactFormFetcher = async (body: any) => {
	const res = await fetch('/api/mail', {
		method: 'POST',
		body: JSON.stringify(body),
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
	});

	return await res.json();
};
