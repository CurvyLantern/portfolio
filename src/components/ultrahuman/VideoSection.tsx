import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Suspense, useState } from 'react';

import VideoUrl from 'public/assets/ultrahuman/video.mp4';
import CustomVideoPlayer from 'src/components/ultrahuman/CustomVideoPlayer';

const url = 'https://www.youtube.com/watch?v=yE3kwHfeDaQ&ab_channel=%E7%8E%8BOK';

console.log(VideoUrl);
const VideoSection = () => {
	const [isDown, setDown] = useState(false);
	return (
		<section className='text-center'>
			<div className='pb-10'>
				<header>
					<h2 className='py-10 text-6xl text-center text-white'>Real Cyborgs. Real Stories.</h2>
				</header>
				<button className='px-10 py-3 text-2xl text-white border-2 border-white rounded-full'>
					Get Started
				</button>
			</div>

			<div className=' flex '>
				<Suspense fallback={null}>
					<Swiper loop>
						{Array(5)
							.fill(0)
							.map((i, idx) => {
								return (
									<SwiperSlide key={idx} className='flex justify-center'>
										{({ isActive }) => <CustomVideoPlayer url={VideoUrl} active={isActive} />}
									</SwiperSlide>
								);
							})}
					</Swiper>
				</Suspense>
			</div>
		</section>
	);
};

export { VideoSection };
