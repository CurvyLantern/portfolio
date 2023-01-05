import { useScroll, useMotionValue, useMotionValueEvent, animate, motion } from 'framer-motion';
import { HiShoppingBag } from 'react-icons/hi2';

const Header = () => {
	const { scrollY } = useScroll();

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
		<header className='h-14 lg:px-24 sticky top-0 z-10 flex items-center flex-1 px-10'>
			{/* overlay */}
			<motion.div
				className='bg-black w-full h-full absolute z-[-1] inset-0 backdrop-blur-3xl bg-opacity-60'
				style={{
					y,
				}}></motion.div>
			<div className='text-3xl font-extrabold text-white'>logo</div>
			<ul className='text-opacity-90 flex gap-6 ml-auto text-sm font-bold text-gray-400'>
				<li>Blog</li>
				<li>Maltahuman Ring</li>
				<li>Maltahuman M1</li>
				<li>Reviews</li>
				<li>Partnerships</li>
			</ul>
			<button className='ml-8 text-2xl text-white'>
				<HiShoppingBag />
			</button>

			{/* Learn More */}
		</header>
	);
};
