import { MotionConfig, motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { random } from 'lodash-es';

export const AnimateLetter = ({ sentence, extraFn }: { sentence: string; extraFn: () => void }) => {
	const [actionEl, setActionEl] = useState(-1);
	const [hoverActions, setHoverAction] = useState<Map<number, undefined>>(new Map());
	const count = useRef(0);

	return (
		<span
			className='whitespace-pre inline-block'
			style={{
				perspective: 1000,
			}}>
			<MotionConfig
				transition={{
					// duration: 1,
					type: 'spring',
					mass: 20,
					stiffness: 50,
					damping: 20,
				}}>
				{sentence.split('').map((letter, idx) => {
					if (letter === ' ') {
						return ' ';
					}
					return (
						<motion.span
							key={idx}
							onTap={() => {
								count.current = random(10, 30);
								setActionEl(idx);
							}}
							onPointerOver={() => {
								!hoverActions.has(idx)
									? setHoverAction(prev => {
											prev.set(idx, undefined);
											return new Map(new Map(prev));
									  })
									: null;
							}}
							onAnimationStartCapture={() => {
								console.log('hello');
								extraFn();
							}}
							onAnimationEnd={() => {
								setHoverAction(prev => {
									prev.delete(idx);
									return new Map(prev);
								});
							}}
							className={`inline-block  relative animate__animated ${
								hoverActions.has(idx) ? 'animate__rubberBand' : ''
							}`}>
							{letter}
							{actionEl === idx ? (
								<div className='pointer-events-none select-none absolute top-0 left-0'>
									{Array(count.current)
										.fill(0)
										.map((_, i) => {
											return (
												<motion.span
													key={i}
													initial={{
														opacity: 1,
														scale: random(0.1, 0.4, true),
													}}
													animate={{
														opacity: 1,
														x: random(-400, 400),
														y: random(-400, 400),
														rotate: random(0, 360 * 3),
													}}
													className='inline-block absolute origin-center'>
													{letter}
												</motion.span>
											);
										})}
								</div>
							) : null}
						</motion.span>
					);
				})}
			</MotionConfig>
		</span>
	);
};
