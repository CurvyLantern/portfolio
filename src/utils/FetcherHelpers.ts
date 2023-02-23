const ContactFormFetcher = async (body: any) => {
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

async function streamToArrayBuffer(stream: ReadableStream<Uint8Array>): Promise<Uint8Array> {
	let result = new Uint8Array(0);
	const reader = stream.getReader();
	while (true) {
		// eslint-disable-line no-constant-condition
		const { done, value } = await reader.read();
		if (done) {
			break;
		}

		const newResult = new Uint8Array(result.length + value.length);
		newResult.set(result);
		newResult.set(value, result.length);
		result = newResult;
	}
	return result;
}

const MyPdfFetcher = async () => {
	const res = await fetch('/api/getResume');
	let result = await streamToArrayBuffer(res.body!);

	const testFile = new File([result], 'foo.pdf', {
		type: 'application/pdf',
	});

	return testFile;
};

export { ContactFormFetcher, MyPdfFetcher, streamToArrayBuffer };
