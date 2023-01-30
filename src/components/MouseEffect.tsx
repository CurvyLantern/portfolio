import { motion, useAnimationFrame } from 'framer-motion';
import { useState, useRef } from 'react';
import { useEffectOnce } from 'usehooks-ts';

export const MouseEffect = () => {
	const [pos, setPos] = useState({
		x: -100,
		y: -100,
	});

	const mainRef = useRef<HTMLDivElement>(null);
	const mouseRef = useRef({
		x: -100,
		y: -100,
	});

	useAnimationFrame(() => {
		if (mainRef.current) {
			mainRef.current.style.transform = `translate(${mouseRef.current.x - 16}px, ${
				mouseRef.current.y - 16
			}px)`;
		}
		setPos({
			x: mouseRef.current.x,
			y: mouseRef.current.y,
		});
	});

	useEffectOnce(() => {
		const listener = ({ clientX, clientY }: MouseEvent) => {
			let y = clientY;
			let x = clientX;

			mouseRef.current.x = x;
			mouseRef.current.y = y;

			// if (mainRef.current) {
			// 	// mainRef.current.style.transform = `translate(${x - 16}px, ${y - 16}px)`;
			// }

			// setPos({
			// 	x,
			// 	y,
			// });
		};
		window.addEventListener('mousemove', listener);
		return () => {
			window.removeEventListener('mousemove', listener);
		};
	});
	return (
		<div className='mix-blend-difference pointer-events-none fixed z-[10000]'>
			<div
				ref={mainRef}
				className='z-[999] absolute outline outline-2 outline-offset-4 outline-green-300 w-8 h-8 rounded-full'></div>

			<motion.div
				className=' bg-white z-[1000] absolute w-8 h-8 rounded-full flex items-center justify-center'
				initial={{
					x: pos.x - 16,
					y: pos.y - 16,
				}}
				animate={{
					x: pos.x - 16,
					y: pos.y - 16,
				}}
				transition={{
					type: 'spring',
					mass: 2,
					damping: 20,
					stiffness: 50,
				}}></motion.div>
			<motion.div
				initial={{
					x: pos.x,
					y: pos.y,
				}}
				animate={{
					x: pos.x,
					y: pos.y,
				}}
				transition={{
					type: 'spring',
					mass: 1,
					bounce: 0,
					stiffness: 20,
				}}
				className='z-[1001] w-2 h-2 rounded-full bg-red-500 absolute'></motion.div>
		</div>
	);
};
