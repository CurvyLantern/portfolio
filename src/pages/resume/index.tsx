import { Variants, motion, useAnimation } from 'framer-motion';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useState } from 'react';
import { useEffectOnce } from 'react-use';
import { MyPdfFetcher } from 'src/utils/FetcherHelpers';

const ViewPdf = dynamic(
	() => {
		return import('../../components/PdfLoader');
	},
	{
		ssr: false,
	}
);

interface ResumePageProps {}
const ResumePage: React.FC<ResumePageProps> = () => {
	// const [pdfData, setPdfData] = useState<any>(null);

	// useEffectOnce(() => {
	// 	const init = async () => {
	// 		let resume = await MyPdfFetcher();
	// 		setPdfData(resume);
	// 	};
	// 	init();
	// });

	return (
		<>
			{/* <div className='min-h-screen'> */}
			<div className='w-full md:w-2/3 lg:w-1/2 mx-auto'>
				<img src='/resume.png' alt='my resume' />
				{/* <ViewPdf file={pdfData}></ViewPdf> */}
			</div>
			<BlinkingDownloadBtn />
			{/* </div> */}
		</>
	);
};
const BlinkingDownloadBtn = () => {
	const variant: Variants = {
		init: {
			scale: 1,
		},
		animate: {
			scale: 1.05,
			transition: {
				repeat: Infinity,
				repeatType: 'mirror',
			},
		},
	};
	return (
		<div className='flex items-center justify-center py-5'>
			{/* <motion.div variants={variant} initial='init' animate='animate' whileHover='init'> */}
			<Link
				href='/resume.pdf'
				download='ashfaq_naseem_resume.pdf'
				className='inline-block bg-green-500 px-4 py-3 hover:scale-105 active:scale-95 transition-transform rounded-md'>
				Download
			</Link>
			{/* </motion.div> */}
		</div>
	);
};

export default ResumePage;
