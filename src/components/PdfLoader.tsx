import { useEffect, useMemo, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import useMeasure from 'react-use-measure';

let uri = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
pdfjs.GlobalWorkerOptions.workerSrc = uri;
interface PdfLoaderInterface {
	file: File | null;
}
const PdfLoader = ({ file }: PdfLoaderInterface) => {
	const [pageCount, setPageCount] = useState(0);
	const [loaded, setLoaded] = useState(false);

	const LoadingComp = () => {
		return <div>Pdf is loading</div>;
	};
	const Empty = () => {
		return <div>The pdf is empty or something went wrong</div>;
	};

	const [parentRef, { width }] = useMeasure({
		debounce: {
			scroll: 0,
			resize: 500,
		},
	});

	return (
		<Document
			inputRef={parentRef}
			file={file}
			loading={<LoadingComp />}
			noData={<Empty />}
			onSourceError={err => {
				console.error(err);
			}}
			onSourceSuccess={() => {}}
			onLoadProgress={t => {}}
			onLoadError={err => {
				console.error(err);
			}}
			onLoadSuccess={({ numPages }) => {
				setPageCount(numPages);
				setLoaded(true);
			}}>
			{loaded && width
				? Array.from({ length: pageCount }, (_, idx) => {
						return (
							<Page
								key={`page_${idx + 1}`}
								pageIndex={idx}
								renderAnnotationLayer={false}
								renderTextLayer={false}
								width={width}
							/>
						);
				  })
				: null}
		</Document>
	);
};
export default PdfLoader;
