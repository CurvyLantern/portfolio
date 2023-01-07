import { useScroll, useMotionValue, useMotionValueEvent, animate, motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiShoppingBag, HiBars3, HiXMark } from 'react-icons/hi2';

const Header = () => {
	const [isMenuShowing, setIsMenuShowing] = useState(false);

	const { scrollY } = useScroll();

	const y = useMotionValue(-90);
	const scrolledPastLimit = useRef(false);
	const limit = useRef(70);

	useMotionValueEvent(scrollY, 'change', cur => {
		// if user scrolls further than 40px
		// then animate y and set scrolledPastlimit to true
		if (cur > limit.current && !scrolledPastLimit.current) {
			animate(y, 0, {
				type: 'tween',
				duration: 0.2,
			});
			scrolledPastLimit.current = true;
			console.log('hello there 1', cur);
		}
		// else if user scrolls up to less than 40
		// then set scrolledPastLimit to false
		else if (cur <= limit.current && scrolledPastLimit.current) {
			animate(y, -90, {
				type: 'tween',
				duration: 0.2,
			});
			scrolledPastLimit.current = false;
			console.log('hello there 2');
		}
	});
	return (
		<header className='h-14  sticky top-0 z-20 flex  flex-1 '>
			{/* overlay */}
			<motion.div
				className='bg-black w-full h-full absolute z-[-1] inset-0 backdrop-blur-xl bg-opacity-80'
				style={{
					y,
				}}></motion.div>
			<div className='absolute lg:px-24 px-10 top-0 items-center left-0 w-full h-full z-20 flex'>
				<div className='text-3xl font-extrabold text-white mr-auto'>logo</div>
				<ul className='hidden md:flex text-opacity-90  gap-6 ml-auto text-sm font-bold text-gray-400'>
					<li>Blog</li>
					<li>Maltahuman Ring</li>
					<li>Maltahuman M1</li>
					<li>Reviews</li>
					<li>Partnerships</li>
				</ul>
				<button className='ml-8 text-2xl text-white'>
					<HiShoppingBag />
				</button>
				<button className='ml-8 text-2xl text-white' onClick={() => setIsMenuShowing(!isMenuShowing)}>
					{isMenuShowing ? <HiXMark /> : <HiBars3 />}
				</button>
			</div>

			{isMenuShowing ? (
				<ul className='flex flex-col z-10 items-center pt-40 backdrop-blur-md bg-opacity-80 absolute top-0  left-0 w-screen h-screen bg-black  text-opacity-90 text-4xl font-bold text-gray-400'>
					<li>Blog</li>
					<li>Maltahuman Ring</li>
					<li>Maltahuman M1</li>
					<li>Reviews</li>
					<li>Partnerships</li>
				</ul>
			) : null}

			{/* Learn More */}
		</header>
	);
};

export { Header };
