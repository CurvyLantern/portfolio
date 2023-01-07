import { ParallaxSlider } from 'src/components/ultrahuman/ParallaxSliders';
import Image from 'next/image';

import CardImage from 'public/assets/ultrahuman/card.jpg';
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const FeaturesSection = () => (
	<div className='mb-20'>
		<section className='grid lg:hidden gap-3 py-5 mb-20 overflow-hidden justify-items-center'>
			<ParallaxSlider baseVelocity={1} start={20} end={0}>
				{Array(6)
					.fill(0)
					.map((_, idx) => (
						<div key={idx} className='h-80 rounded-2xl flex-shrink-0 w-64 overflow-hidden'>
							<Image src={CardImage} className='object-cover w-full h-full' alt='Hello' />
						</div>
					))}
			</ParallaxSlider>
			<ParallaxSlider baseVelocity={1} start={-20} end={0}>
				{Array(6)
					.fill(0)
					.map((_, idx) => (
						<div key={idx} className='h-80 rounded-2xl flex-shrink-0 w-64 overflow-hidden'>
							<Image src={CardImage} className='object-cover w-full h-full' alt='Hello' />
						</div>
					))}
			</ParallaxSlider>
			<ParallaxSlider baseVelocity={1} start={20} end={0}>
				{Array(6)
					.fill(0)
					.map((_, idx) => (
						<div key={idx} className='h-80 rounded-2xl flex-shrink-0 w-64 overflow-hidden'>
							<Image src={CardImage} className='object-cover w-full h-full' alt='Hello' />
						</div>
					))}
			</ParallaxSlider>
		</section>
		<LargeFeatureSection />
	</div>
);

const LargeFeatureSection = () => {
	const target = useRef(null);
	const { scrollY, scrollYProgress } = useScroll({
		offset: ['start end', 'start start'],
		target,
	});
	useMotionValueEvent(scrollYProgress, 'change', cur => {
		console.log(cur, 'cur');
	});

	const alphaY1 = useTransform(scrollYProgress, [0, 1], [500, 0]);
	const alphaY2 = useTransform(scrollYProgress, [0, 1], [250, 0]);
	// const smoothY = useSpring(alphaY, {
	// 	stiffness: 100,
	// 	damping: 30,
	// });
	return (
		<section ref={target} className='hidden lg:block lg:relative'>
			<div className='flex gap-3 w-5/6 mx-auto '>
				<motion.div style={{ y: alphaY1 }} className='flex-[2] flex-col flex gap-3'>
					{Array(2)
						.fill(0)
						.map((i, idx) => (
							<div key={idx} className='w-full'>
								<Image src={CardImage} className='object-cover w-full' alt='Hello' />
							</div>
						))}
				</motion.div>
				<motion.div style={{ y: alphaY2 }} className='flex-[2] flex-col flex gap-3'>
					{Array(3)
						.fill(0)
						.map((i, idx) => (
							<div key={idx} className='w-full'>
								<Image src={CardImage} className='object-cover w-full' alt='Hello' />
							</div>
						))}
				</motion.div>
				<motion.div className='flex-[3] flex-col flex gap-3'>
					<div className='w-full'>
						<Image src={CardImage} className='object-cover w-full' alt='Hello' />
					</div>
				</motion.div>
				<motion.div style={{ y: alphaY2 }} className='flex-[2] flex-col flex gap-3'>
					{Array(3)
						.fill(0)
						.map((i, idx) => (
							<div key={idx} className='w-full'>
								<Image src={CardImage} className='object-cover w-full' alt='Hello' />
							</div>
						))}
				</motion.div>
				<motion.div style={{ y: alphaY1 }} className='flex-[2] flex-col flex gap-3'>
					{Array(2)
						.fill(0)
						.map((i, idx) => (
							<div key={idx} className='w-full'>
								<Image src={CardImage} className='object-cover w-full' alt='Hello' />
							</div>
						))}
				</motion.div>
			</div>
			<div
				className='absolute bottom-0 left-0 w-full h-52 '
				style={{
					backgroundImage:
						'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,.8) 30%, rgba(0,0,0,1) 60%, rgba(0,0,0,1) 100%)',
				}}></div>
		</section>
	);
};

export { FeaturesSection };
