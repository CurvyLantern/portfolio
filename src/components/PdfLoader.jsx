import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

let uri = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
uri = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

pdfjs.GlobalWorkerOptions.workerSrc = uri;
const PdfLoader = ({ file }) => {
	const [pageCount, setPageCount] = useState(0);

	console.log(pdfjs.GlobalWorkerOptions.workerSrc);
	if (!file) {
		return <div>no pdf is selected</div>;
	}
	return (
		<Document
			file={file}
			onSourceError={err => {
				console.error(err);
			}}
			onSourceSuccess={() => {
				console.log('success');
			}}
			onLoadProgress={t => {
				console.log(t);
			}}
			onLoadError={err => {
				console.log('load error');
				console.error(err);
			}}
			onLoadSuccess={({ numPages }) => {
				setPageCount(numPages);
			}}>
			{Array.from({ length: pageCount }, (_, idx) => {
				console.log({ idx });

				return (
					<Page
						key={`page_${idx + 1}`}
						pageIndex={idx}
						renderAnnotationLayer={false}
						renderTextLayer={false}
					/>
				);
			})}
		</Document>
	);
};
export default PdfLoader;
