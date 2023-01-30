import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import { useRef, useState } from 'react';
import { useEffectOnce } from 'usehooks-ts';

const ViewPdf = dynamic(
	() => {
		return import('../../components/PdfLoader.jsx');
	},
	{
		ssr: false,
	}
);

async function createFile(path: string, name: string): Promise<File> {
	let response = await fetch(path);
	console.log(response);
	let data = await response.blob();
	return new File([data], name, {
		type: data.type,
	});
}

interface ResumePageProps {
	fileData: Blob;
}
const ResumePage = ({ fileData }: ResumePageProps) => {
	const [basicFile, setBasicFile] = useState<any>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	useEffectOnce(() => {
		const init = async () => {
			// const file = await createFile('/api/get_local_pdf', 'temp.pdf');
			// console.log(file, 'from effect');
		};
		init();
	});

	return (
		<div className='w-screen h-screen'>
			<input
				ref={inputRef}
				type='file'
				onChange={evt => {
					console.log(evt.target.files);
					if (evt.target.files && evt.target.files.length > 0) {
						setBasicFile(evt.target.files[0]);
					}
				}}
			/>
			<ViewPdf file={'/my-resume.pdf'}></ViewPdf>
		</div>
	);
};
export const getServerSideProps: GetServerSideProps = async ctx => {
	const testRes = await fetch('http://localhost:3000/my-resume.pdf');
	const testBlob = await testRes.blob();
	console.log(testBlob);
	// const file = new File([testBlob], 'my-resume.pdf', {
	// 	type: testBlob.type,
	// });
	// console.log(file);

	return {
		props: {
			fileData: null,
		},
	};
};
export default ResumePage;
