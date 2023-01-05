import {
	useMotionValue,
	useScroll,
	useVelocity,
	useSpring,
	useTransform,
	wrap,
	useAnimationFrame,
	motion,
	useMotionValueEvent,
	useMotionTemplate,
} from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface ParallaxSliderProps {
	children: ReactNode;
	baseVelocity: number;
	start: number;
	end: number;
}

const ParallaxSliderContinuous = ({ baseVelocity, children }: ParallaxSliderProps) => {
	const baseX = useMotionValue(0);
	const { scrollY } = useScroll();
	const scrollVelocity = useVelocity(scrollY);
	const smoothVelocity = useSpring(scrollVelocity, {
		damping: 50,
		stiffness: 400,
	});
	const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
		clamp: false,
	});
	const directionFactor = useRef(1);

	const x = useTransform(baseX, v => `${wrap(-20, -45, v)}%`);

	useAnimationFrame((t, delta) => {
		let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

		if (velocityFactor.get() < 0) {
			directionFactor.current = -1;
		} else if (velocityFactor.get() > 0) {
			directionFactor.current = 1;
		}

		moveBy += directionFactor.current * moveBy * velocityFactor.get();

		baseX.set(baseX.get() + moveBy);
	});
	return (
		<div className='overflow-hidden'>
			<motion.div className='flex gap-3' style={{ x }}>
				{children}
			</motion.div>
		</div>
	);
};

const ParallaxSlider = ({ baseVelocity, children, start, end }: ParallaxSliderProps) => {
	const container = useRef(null);
	const { scrollY, scrollYProgress } = useScroll({
		target: container,
		offset: ['start end', 'end start'],
	});

	const xProgress = useTransform(scrollYProgress, [0, 0.8], [start, end]);
	const xSmoothProgress = useSpring(xProgress, {
		stiffness: 100,
		damping: 15,
		restSpeed: 1,
	});
	const transform = useMotionTemplate`translateX(${xSmoothProgress}%)`;

	useMotionValueEvent(xSmoothProgress, 'change', cur => {
		console.log(cur);
	});

	return (
		<motion.div className='' ref={container} style={{ transform }}>
			<motion.div className='flex gap-3'>{children}</motion.div>
		</motion.div>
	);
};

export { ParallaxSliderContinuous, ParallaxSlider };
