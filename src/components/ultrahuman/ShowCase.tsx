import { motion } from 'framer-motion';
import Image from 'next/image';
import GallerImg1 from 'public/assets/ultrahuman/gallery1.webp';
import useResizeObserver from 'use-resize-observer';

import styles from './ShowCase.module.css';

const ShowCase = () => {
	// const { ref, width = 1, height = 1 } = useResizeObserver<HTMLDivElement>();
	// const { ref: ref2, width: width2 = 1, height: height2 = 1 } = useResizeObserver<HTMLDivElement>();
	return (
		<section className='py-20'>
			<div className='text-center'>
				<header>
					<h2 className='py-10 text-5xl text-center text-white'>Join the Cyborg Army</h2>
				</header>
				<p className='text-neutral-400 mb-20 text-xl leading-tight text-center'>
					Get access to the world’s fastest growing community of like-minded athletes, biohackers and
					longevity enthusiasts.
				</p>
				<button className='px-10 py-3 text-2xl text-white border-2 border-white rounded-full'>
					Evolve to Cyborg
				</button>
			</div>
			<div className='space-y-5 grid overflow-hidden pt-20'>
				<div className={`flex gap-5 flex-shrink-0 flex-grow ${styles.animation} `}>
					{Array(15)
						.fill(0)
						.map((i, idx) => {
							return (
								<div key={idx} className='w-96 flex-shrink-0 rounded-lg overflow-hidden'>
									<Image src={GallerImg1} alt='image 1' className='w-full object-cover' />
								</div>
							);
						})}
				</div>
				<div className={`flex gap-5 flex-shrink-0 flex-grow ${styles.animation} ${styles.reverse}`}>
					{Array(15)
						.fill(0)
						.map((i, idx) => {
							return (
								<div key={idx} className='w-96 flex-shrink-0 rounded-lg overflow-hidden'>
									<Image src={GallerImg1} alt='image 1' className='w-full object-cover' />
								</div>
							);
						})}
				</div>
			</div>
		</section>
	);
};

const t = (
	<motion.div
		initial={{
			x: 0,
		}}
		animate={{
			x: '-50%',
		}}
		transition={{
			type: 'tween',
			ease: 'linear',
			duration: 15,
			repeat: Infinity,
			repeatDelay: 1,
			repeatType: 'loop',
		}}
		className='flex gap-5 flex-shrink-0 flex-grow'>
		{Array(15)
			.fill(0)
			.map((i, idx) => {
				return (
					<div key={idx} className='w-96 flex-shrink-0 rounded-lg overflow-hidden'>
						<Image src={GallerImg1} alt='image 1' className='w-full object-cover' />
					</div>
				);
			})}
	</motion.div>
);

export default ShowCase;
