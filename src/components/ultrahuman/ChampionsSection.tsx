import { EffectCube, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import Image from 'next/image';

import PlayerImg1 from 'public/assets/ultrahuman/player1.webp';
import dynamic from 'next/dynamic';

import VideoUrl from 'public/assets/ultrahuman/video.mp4';
import { Suspense } from 'react';
import { motion } from 'framer-motion';

const ReactPlayer = dynamic(() => import('react-player/file'), { ssr: false });

const ChampionsSection = () => {
	return (
		<section className=' pt-20 pb-40'>
			<div>
				<header>
					<h2 className='py-10 text-5xl text-center text-white'>Powering world champions</h2>
				</header>
			</div>
			<div className=' text-center pb-20'>
				<button className='px-10 py-3 text-2xl text-white border-2 border-white rounded-full'>
					Explore products
				</button>
			</div>
			<Swiper
				modules={[EffectCoverflow]}
				centeredSlides
				spaceBetween={25}
				slidesPerView={'auto'}
				effect='coverflow'
				loop
				breakpoints={{
					// when window width is >= 640px
					640: {
						slidesPerView: 2.5,
						effect: 'slide',
						modules: [],
					},
				}}>
				{Array(10)
					.fill(0)
					.map((i, idx) => {
						return (
							<SwiperSlide key={idx}>
								<div className='select-none'>
									<div className='relative'>
										<ReactPlayer
											url={VideoUrl}
											muted
											playing
											loop
											width={'100%'}
											height={'100%'}
											className='absolute inset-0 player-video'
										/>
										<motion.div
											whileHover={{
												opacity: 0,
											}}
											whileTap={{
												opacity: 0,
											}}
											className='relative w-full'>
											<Image src={PlayerImg1} alt='player' className='w-full' />
										</motion.div>
									</div>
									<div className='p-3'>
										<h5 className='text-white text-lg'>Lorem ipsum dolor sit.</h5>
										<p className='text-sm text-neutral-400'>
											Lorem ipsum dolor sit amet consectetur adipisicing{' '}
										</p>
									</div>
								</div>
							</SwiperSlide>
						);
					})}
				<div slot='container-end' className='flex justify-center gap-20 py-5'>
					<Left />
					<Right />
				</div>
			</Swiper>
		</section>
	);
};

const Left = () => {
	const swiper = useSwiper();

	return (
		<button
			onClick={() => swiper.slidePrev()}
			className='w-10 h-10 flex items-center justify-center rounded-full border-2 text-white '>
			&lt;
		</button>
	);
};

const Right = () => {
	const swiper = useSwiper();
	return (
		<button
			onClick={() => swiper.slideNext()}
			className='w-10 h-10 flex items-center justify-center rounded-full border-2 text-white '>
			&gt;
		</button>
	);
};

export default ChampionsSection;
