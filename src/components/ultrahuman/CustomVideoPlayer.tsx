import dynamic from 'next/dynamic';
import { Suspense, useEffect, useLayoutEffect, useState } from 'react';

const ReactPlayer = dynamic(() => import('react-player/file'), {
	ssr: false,
});
const CustomVideoPlayer = ({ url, active }: { active: boolean; url: string }) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const handlePause = () => {
		setIsPlaying(false);
	};
	const handlePlaying = () => {
		setIsPlaying(true);
	};
	useEffect(() => {
		if (!active) {
			handlePause();
		}
	}, [active]);
	return (
		<div className='w-11/12'>
			<ReactPlayer
				onPause={handlePause}
				onPlay={handlePlaying}
				playing={isPlaying}
				width={'100%'}
				height={'auto'}
				controls
				url={url}></ReactPlayer>
		</div>
	);
};

export default CustomVideoPlayer;
