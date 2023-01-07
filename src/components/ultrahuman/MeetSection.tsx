import BaseSection from 'src/components/ultrahuman/BaseSection';
import Doctor1 from 'public/assets/ultrahuman/doctor1.webp';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

const MeetSection = () => (
	<section className='py-10'>
		<div className='px-20'>
			<header>
				<h2 className='py-10 text-5xl text-center text-white'>
					Meet our Medical and Sports Advisory Board
				</h2>
			</header>
			<p className='text-neutral-400 mb-20 text-xl leading-tight text-center'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatem nobis aliquid sequi
				doloremque cupiditate nostrum odio enim autem praesentium.
			</p>
		</div>
		<div className='my-10 text-center'>
			<button className='px-10 py-3 text-2xl text-white border-2 border-white rounded-full'>
				Learn about our clinical trials
			</button>
		</div>
		<div className='flex flex-col justify-center items-center'>
			<div className='w-[90%] grid lg:grid-cols-4 justify-items-center items-center gap-5'>
				{Array(4)
					.fill(0)
					.map((i, idx) => {
						return <DoctorCard key={idx} />;
					})}
			</div>
		</div>
	</section>
);

const DoctorCard = () => {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<div
			className='relative '
			onPointerOver={() => setIsHovered(true)}
			onPointerOut={() => setIsHovered(false)}>
			<Image src={Doctor1} alt={'doctor0'} className='w-full' />
			<div className='overflow-hidden text-white absolute text-center left-0 w-full bottom-0 bg-black bg-opacity-50 backdrop-blur-md'>
				<div className=''>
					<motion.h5
						initial={{
							y: 0,
						}}
						animate={{
							y: isHovered ? -100 : 0,
						}}
						className='text-white text-base'>
						Dr. Philip Ovadia
					</motion.h5>
					<motion.p className='text-sm text-neutral-300'>
						Board-certifies cardiothoracic surgeon, founder of Ovadia Heart Health
					</motion.p>
				</div>
				<motion.a href='#' className='inline-block'>
					Learn more &gt;{' '}
				</motion.a>
			</div>
		</div>
	);
};
export { MeetSection };
