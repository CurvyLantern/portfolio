import { motion } from 'framer-motion';
import Parallax from 'src/components/Parallax';

const BackgroundVideo = () => {
	return (
		<Parallax speed={5}>
			<div className='-z-50 absolute top-0 left-0 w-screen h-screen bg-green-600'>
				<video playsInline autoPlay muted loop className='object-cover w-full h-full'>
					<source src='/swan_family1.mp4' type='video/mp4' />
				</video>
				<div
					style={{
						backgroundImage:
							'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.6270680147058824) 35%, rgba(0,0,0,1) 74%)',
					}}
					className='absolute bottom-0 right-0 w-full h-24'></div>
			</div>
		</Parallax>
	);
};

export default BackgroundVideo;
