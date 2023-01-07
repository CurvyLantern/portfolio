import Brand1 from 'public/assets/ultrahuman/brand1.webp';
import Investor1 from 'public/assets/ultrahuman/investor1.webp';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
const InvestorSection = () => {
	return (
		<section className='py-10 px-5 text-center'>
			<header>
				<h2 className='py-10 text-5xl text-center text-white'>Backed by the best</h2>
			</header>
			<div className='grid grid-cols-2 md:grid-cols-4 justify-items-center gap-5  mb-10'>
				<Image src={Brand1} alt='brand image' className='w-32' />
				<Image src={Brand1} alt='brand image' className='w-32' />
				<Image src={Brand1} alt='brand image' className='w-32' />
				<Image src={Brand1} alt='brand image' className='w-32' />
			</div>
			<div className='flex'>
				<Swiper slidesPerView={1.15} spaceBetween={10}>
					{Array(5)
						.fill(0)
						.map((i, idx) => {
							return (
								<SwiperSlide key={idx}>
									<Image src={Investor1} alt='investor' className='w-full' />
									<div className='text-center py-3'>
										<h5 className='text-base text-white'>Balaji S</h5>
										<p className='text-sm text-neutral-400'>Lorem ipsum dolor sit amet</p>
									</div>
								</SwiperSlide>
							);
						})}
				</Swiper>
			</div>

			<button className='py-3 px-5 rounded-full border-2 border-white text-white'>explore products</button>
		</section>
	);
};

export { InvestorSection };
