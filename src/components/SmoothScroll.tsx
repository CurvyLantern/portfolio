import { animate, motion, useMotionValue, useMotionValueEvent, useScroll, useSpring } from 'framer-motion';
import React from 'react';
import useMeasure from 'react-use-measure';

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
	const [scrollRef, { height: pageHeight = 1 }] = useMeasure();

	const { scrollY } = useScroll();
	const smoothY = useMotionValue(scrollY.get());
	const physics = { damping: 15, mass: 0.5, stiffness: 55 };
	const spring = useSpring(smoothY, physics);

	const y = useMotionValue(scrollY.get());
	useMotionValueEvent(scrollY, 'change', cur => {
		smoothY.set(cur * -1);
		animate(y.get(), cur * -1, {
			type: 'tween',
			ease: 'easeOut',
			duration: 0.8,
			onUpdate(latest) {
				y.set(latest);
			},
		});
	});

	return (
		<>
			<motion.div
				ref={scrollRef}
				style={{ y }}
				className='will-change-transform fixed top-0 left-0 w-full overflow-hidden'>
				{children}
			</motion.div>
			<div style={{ height: pageHeight }}></div>
		</>
	);
};

export default SmoothScroll;
