import Image from 'next/image';

import { HiShoppingBag, HiArrowRight, HiStar } from 'react-icons/hi2';
import BannerImage from 'public/assets/ultrahuman/bg-banner.jpg';
import RingImage from 'public/assets/ultrahuman/bg-ring.jpg';
import CardImage from 'public/assets/ultrahuman/card.jpg';
import {
	animate,
	motion,
	useAnimationFrame,
	useMotionTemplate,
	useMotionValue,
	useMotionValueEvent,
	useScroll,
	useSpring,
	useTransform,
	useVelocity,
	wrap,
} from 'framer-motion';
import { ReactNode, useEffect, useRef } from 'react';
import { ParallaxSlider } from 'src/components/ultrahuman/ParallaxSliders';

const UltraHumanPage = () => {
	const ref = useRef<HTMLElement>(null);
	const { scrollY, scrollYProgress } = useScroll({
		target: ref,
		// offset: ['end end', 'start start'],
		offset: ['start end', 'end center'],
	});

	const transformedProg = useTransform(scrollYProgress, [0, 1], [0, 100]);
	const percentage1 = useMotionTemplate`${scrollYProgress}%`;
	const percentage2 = useMotionTemplate`${transformedProg}%`;
	const percentage3 = useMotionTemplate`${transformedProg}%`;
	const y = useMotionValue(-90);

	useMotionValueEvent(scrollY, 'change', cur => {
		if (cur > 40) {
			animate(y, 0, {
				type: 'tween',
				duration: 0.2,
			});
		} else {
			animate(y, -90, {
				type: 'tween',
				duration: 0.2,
			});
		}
	});

	return (
		<main className='bg-black'>
			<header className='h-14 lg:px-24 sticky top-0 z-10 flex items-center flex-1 px-10'>
				<motion.div
					className='bg-black w-full h-full absolute z-[-1] inset-0 backdrop-blur-2xl bg-opacity-80'
					style={{
						y,
					}}></motion.div>
				<div className='text-3xl font-extrabold text-white'>logo</div>
				<ul className='text-opacity-90 flex gap-6 ml-auto text-sm font-bold text-gray-400'>
					<li>Blog</li>
					<li>Ultrahuman Ring</li>
					<li>Ultrahuman M1</li>
					<li>Reviews</li>
					<li>Partnerships</li>
				</ul>
				<button className='ml-8 text-2xl text-white'>
					<HiShoppingBag />
				</button>

				{/* Learn More */}
			</header>
			<div className='bg-neutral-800'>
				{/* Notification Section */}
				<section>
					<p className='bg-neutral-800 w-full py-4 font-semibold text-center text-white'>
						Our clinical trials for M1 CGM metabolic health platform are in progress.{' '}
						<span className='text-sky-400 pl-2'>Learn More &#8594;</span>
					</p>
				</section>

				{/* Banner */}
				<section
					className='relative mb-8 text-center bg-black bg-center bg-no-repeat bg-cover'
					style={{
						backgroundImage: `url(${BannerImage.src})`,
					}}>
					<div className='md:py-44 py-32'>
						<header className='mb-10 text-white'>
							<h1 className='py-3 text-5xl font-semibold'>Ultrahuman M1</h1>
							<p>Supercharge your nutrition and exercise performance using glucose biomarkers</p>
						</header>
						<div className='mb-3'>
							<button className='px-10 py-3 bg-white rounded-full'>Join the waitlist</button>
						</div>
						<div className='text-white'>
							<a href='#'>Talk to a specialist &#8594;</a>
						</div>
					</div>
					<div className='backdrop-blur-2xl text-opacity-80 bg-opacity-20 absolute bottom-0 w-full py-3 text-center text-white bg-black'>
						<p className=''>
							Find your ideal fitness and nutrition plan.{' '}
							<a
								href='#'
								className='hover:translate-x-2 inline-block font-semibold transition translate-x-0 cursor-pointer'>
								Take the free test now &#8594;
							</a>
						</p>
					</div>
				</section>

				{/* Section 2 */}
				<section
					className='relative text-center bg-black bg-center bg-no-repeat bg-cover'
					style={{
						backgroundImage: `url(${RingImage.src})`,
					}}>
					<div className='md:py-44 py-32'>
						<header className='mb-10 text-white'>
							<h1 className='py-3 text-5xl font-semibold'>Ultrahuman Ring</h1>
							<p>World's first metabolism tracking smart ring.</p>
						</header>
						<div className='mb-3'>
							<button className='px-10 py-3 bg-white rounded-full'>Pre-order now</button>
						</div>
						<div className='text-white'>
							<a href='#'>Learn more &#8594;</a>
						</div>
					</div>
				</section>
			</div>

			{/* Slider Section */}
			<div className='mb-10'>
				<section className='pt-28'>
					<header>
						<h2 className='py-10 text-5xl text-center text-white'>As featured in</h2>
					</header>
					<div className='h-128 grid grid-cols-2 gap-1 px-10'>
						{/* first */}
						<div className='border-neutral-800 text-neutral-400 flex flex-col items-center justify-center px-10 border-2'>
							<p className='text-3xl text-center'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, vero asperiores fugit optio
							</p>
							<h3 className='mt-10 text-5xl font-bold'>The Mango</h3>
						</div>

						{/* second */}
						<div className='border-neutral-800 text-neutral-400 flex flex-col items-center justify-center px-10 border-2'>
							<p className='text-3xl text-center'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, vero asperiores fugit optio
							</p>
							<h3 className='mt-10 text-5xl font-bold'>The Mango</h3>
						</div>
					</div>

					{/* indicator */}
					<div className='py-14 flex items-center justify-center gap-5 text-center'>
						<span className='w-3 h-3 bg-white rounded-full'></span>
						<span className='bg-neutral-600 w-3 h-3 rounded-full'></span>
						<span className='bg-neutral-600 w-3 h-3 rounded-full'></span>
						<span className='bg-neutral-600 w-3 h-3 rounded-full'></span>
					</div>
				</section>
			</div>

			{/* Insights Section */}
			<div className=''>
				<section className='px-10'>
					<header>
						<h2 className='py-10 text-5xl text-center text-white'>Deep Insights. Deeply trusted.</h2>
					</header>
					<p className='text-neutral-400 mb-20 text-xl leading-tight text-center'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum architecto aliquid rerum, aperiam
						asperiores blanditiis fuga nihil repudiandae quia laboriosam temporibus distinctio libero quod
						saepe harum, atque ea, delectus sed labore? Aut debitis amet ex repudiandae maxime, dolores
						totam. Quod inventore sit error doloribus molestias nam porro temporibus eum magni?
					</p>

					<div className='grid grid-cols-2'>
						{/* Appstore */}
						<div className='justify-items-center grid grid-rows-2 gap-3'>
							<div className='flex items-center gap-2 text-white'>
								<p className='text-7xl'>4.9</p>
								<div>
									<p className='text-2xl'>App Store</p>
									<p className='text-amber-500 flex text-3xl'>
										{Array(5)
											.fill(0)
											.map((i, idx) => (
												<HiStar key={idx} />
											))}
									</p>
								</div>
							</div>
							<button className='text-neutral-400 flex items-center px-6 py-3 text-2xl border-2 border-white rounded-full'>
								<HiShoppingBag />

								<span className='pl-3'>Download on AppStore</span>
							</button>
						</div>

						{/* Playstore */}
						<div className='justify-items-center grid grid-rows-2 gap-3'>
							<div className='flex items-center gap-2 text-white'>
								<p className='text-7xl'>4.9</p>
								<div>
									<p className='text-2xl'>App Store</p>
									<p className='text-amber-500 flex text-3xl'>
										{Array(5)
											.fill(0)
											.map((i, idx) => (
												<HiStar key={idx} />
											))}
									</p>
								</div>
							</div>
							<button className='text-neutral-400 flex items-center px-6 py-3 text-2xl border-2 border-white rounded-full'>
								<HiShoppingBag />

								<span className='pl-3'>Download on Playstore</span>
							</button>
						</div>
					</div>
				</section>
			</div>

			{/* Features and benefits */}
			<section className='grid gap-3 py-5 mb-20 overflow-hidden justify-items-center' ref={ref}>
				<ParallaxSlider baseVelocity={1} start={100} end={0}>
					{Array(6)
						.fill(0)
						.map((_, idx) => (
							<div key={idx} className='h-80 rounded-2xl flex-shrink-0 w-64 overflow-hidden'>
								<Image src={CardImage} className='object-cover w-full h-full' alt='Hello' />
							</div>
						))}
				</ParallaxSlider>
				<ParallaxSlider baseVelocity={1} start={-100} end={0}>
					{Array(6)
						.fill(0)
						.map((_, idx) => (
							<div key={idx} className='h-80 rounded-2xl flex-shrink-0 w-64 overflow-hidden'>
								<Image src={CardImage} className='object-cover w-full h-full' alt='Hello' />
							</div>
						))}
				</ParallaxSlider>
				<ParallaxSlider baseVelocity={1} start={100} end={0}>
					{Array(6)
						.fill(0)
						.map((_, idx) => (
							<div key={idx} className='h-80 rounded-2xl flex-shrink-0 w-64 overflow-hidden'>
								<Image src={CardImage} className='object-cover w-full h-full' alt='Hello' />
							</div>
						))}
				</ParallaxSlider>
			</section>

			{/* Stories Section */}
			{/* TODO: Implement Video Slider section */}
			<section className='text-center'>
				<div className='pb-10'>
					<header>
						<h2 className='py-10 text-6xl text-center text-white'>Real Cyborgs. Real Stories.</h2>
					</header>
					<button className='px-10 py-3 text-2xl text-white border-2 border-white rounded-full'>
						Get Started
					</button>
				</div>
			</section>
		</main>
	);
};

export default UltraHumanPage;
