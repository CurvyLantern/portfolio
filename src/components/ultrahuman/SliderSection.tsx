import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { useId } from 'react';

import styles from './SliderSection.module.css';

const SliderSection = () => {
	return (
		<section className='pt-28 mb-10'>
			<header>
				<h2 className='py-10 text-5xl text-center text-white'>As featured in</h2>
			</header>
			<div className='h-128 px-10'>
				<Swiper
					modules={[Pagination]}
					pagination={{
						el: `.${styles.myCustomPagination}`,
						clickable: true,
					}}
					spaceBetween={10}
					breakpoints={{
						800: {
							slidesPerView: 3,
							slidesPerGroup: 3,
						},
					}}>
					{Array(9)
						.fill(0)
						.map((i, idx) => {
							return (
								<SwiperSlide key={idx}>
									<div className='border-neutral-800 py-5 text-neutral-400 flex flex-col items-center justify-center px-10 border-2'>
										<p className='text-3xl text-center'>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, vero asperiores fugit
											optio
										</p>
										<h3 className='mt-10 text-4xl font-bold'>The Mango</h3>
									</div>
								</SwiperSlide>
							);
						})}
					<div slot='pagination' className='bg-red-900'></div>
				</Swiper>
				<div className={`${styles.myCustomPagination} flex gap-3 items-center justify-center p-4`}></div>
			</div>
		</section>
	);
};
export { SliderSection };
