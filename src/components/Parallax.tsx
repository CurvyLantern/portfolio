import { createElement, useRef } from 'react';
import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion';

interface ParallaxProps extends React.HTMLProps<HTMLElement> {
	children: JSX.Element;
	speed: number;
}
const Parallax = ({ children, speed = 0 }: ParallaxProps) => {
	const ref = useRef<HTMLElement>();

	const whichEl = typeof children.type === 'string' ? children.type : 'div';

	const parallaxEl = createElement(
		whichEl,
		{
			//		..._props,
			...children.props,
			ref: (el: HTMLElement) => {
				ref.current = el ? el : undefined;
			},
		},
		//..._children
		...children.props.children
	);

	const { scrollY } = useScroll();
	const transform = useTransform(scrollY, value => value * (speed / 100));
	useMotionValueEvent(transform, 'change', cur => {
		if (ref.current) {
			ref.current.style.transform = `translateY(${cur}px)`;
		}
	});
	return parallaxEl;
};

export default Parallax;
