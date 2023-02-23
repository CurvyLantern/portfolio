import { createElement, useRef, FC, useEffect } from 'react';
import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { animate, scroll } from 'motion';

interface ParallaxProps extends React.HTMLProps<HTMLElement> {
	// children: JSX.Element;
	speed: number;
}
const Parallax: FC<ParallaxProps> = ({ children, speed = 0 }) => {
	const wrapperRef = useRef<HTMLDivElement>(null);

	// 	let whichEl = 'div'
	// 	if()
	// 	const parallaxEl = createElement(
	// 		whichEl,
	// 		{
	// 			//		..._props,
	// 			...children.props,
	// 			ref: (el: HTMLElement) => {
	// 				ref.current = el ? el : undefined;
	// 			},
	// 		},
	// 		//..._children
	// 		...children.props.children
	// 	);
	// }

	const { scrollY } = useScroll();
	useMotionValueEvent(scrollY, 'change', cur => {
		let transform = cur * (speed / 100);
		console.log({ cur });
		if (wrapperRef.current) {
			wrapperRef.current.style.transform = `translateY(${transform}px)`;
		}
	});
	return (
		<div ref={wrapperRef} className=''>
			{children}
		</div>
	);
};

export default Parallax;
