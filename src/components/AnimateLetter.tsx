import { MotionConfig, motion, useAnimationFrame } from 'framer-motion';
import { useState, useRef, useMemo, useEffect } from 'react';
import { random, sample } from 'lodash-es';
import clsx from 'clsx';
import colors from 'nice-color-palettes';
import { useAudio, useUpdateEffect } from 'react-use';
import { useEffectOnce } from 'usehooks-ts';
const color = colors[76];

const alternate = () => (Math.random() > 0.5 ? 1 : -1);
// const randAbs = (x: number, y: number) => random(x, y) * alternate();
const setTY = (x: number, y: number, el: HTMLElement | null) => {
	if (el) {
		el.style.transform = `translate3d(${x}px, ${y}px, 0px)`;
	}
};

interface LetterParticlesProps {
	count: number;
	content: React.ReactNode;
}
// TODO: implement particles
const Particles = ({ count, content }: LetterParticlesProps) => {
	let timeout = 5; // in second
	const particleRefs = useRef<
		{
			el: HTMLSpanElement | null;
			x: number;
			y: number;
			tx: number;
			ty: number;
			dist: number;
		}[]
	>([]);
	useEffect(() => {
		console.log(particleRefs.current);
	}, []);
	let { sin, cos } = Math;
	useAnimationFrame((time, dt) => {
		let ts = time / 1000; // time in second
		console.log({ ts });
		if (ts > timeout) {
			// perform animation after timeout
		} else {
			// perform animation before timeout
			let ndt = dt / 1;
			for (let particle of particleRefs.current) {
				let { dist, el, tx, ty, x, y } = particle;
				let dx = (x / 1000) * dt;
				let dy = (y / 1000) * dt;
				let ax = tx + dx;
				let ay = ty + dy;

				setTY(ax, ay, el);

				particle.tx = ax;
				particle.ty = ay;
			}
		}
	});

	return (
		<>
			{Array(count)
				.fill(0)
				.map((_, idx) => {
					let x = random(30, 200) * alternate();
					let y = random(30, 200) * alternate();
					let dist = Math.sqrt(x ** 2 + y ** 2);
					return (
						<span
							ref={ref =>
								(particleRefs.current[idx] = {
									el: ref,
									tx: 0,
									ty: 0,
									x: random(30, 200) * alternate(),
									y: random(30, 200) * alternate(),
									dist,
								})
							}
							key={idx}
							className='absolute inline-block scale-50 pointer-events-none'>
							{content}
						</span>
					);
				})}
		</>
	);
};

interface LetterProps {
	elIndex: number;
	actionElIndex: number;
	letter: string;
	type?: string;
	setActionElIndex: (i: number) => void;
	onHover?: () => void;
}
const Letter = ({ letter, type = 'rubberBand', setActionElIndex, actionElIndex, elIndex }: LetterProps) => {
	const count = useRef(0);
	const [isHovered, setIsHovered] = useState(false);

	const [boingAudioEl, state, controls, ref] = useAudio({
		src: 'myaudio2.mp3',
	});

	const handleClick = () => {
		// count.current = random(40, 60);
		count.current = 2;
		if (actionElIndex === elIndex) {
			setActionElIndex(-1);
		} else {
			setActionElIndex(elIndex);
		}
	};

	const handleHover = () => {
		if (!isHovered) {
			controls.pause();
			controls.seek(0);
			controls.play();
		}

		setIsHovered(true);
	};
	const onAnimationEnd = () => {
		setIsHovered(false);
	};

	useEffectOnce(() => {
		controls.volume(0.1);
	});

	return (
		<span className='inline-flex items-center justify-center'>
			<span
				className={clsx({
					animate__animated: true,
					[`animate__${type}`]: isHovered,
				})}
				onClick={handleClick}
				onPointerOver={handleHover}
				onAnimationEnd={onAnimationEnd}>
				{letter}
			</span>
			{boingAudioEl}
			{/* {actionElIndex === elIndex ? <Particles count={count.current} content={letter} /> : null} */}
		</span>
	);
};

export const AnimateLetter = ({ sentence, extraFn }: { sentence: string; extraFn: () => void }) => {
	const [actionEl, setActionElIndex] = useState(-1);
	const [hoverActions, setHoverAction] = useState<Map<number, undefined>>(new Map());
	const count = useRef(0);
	const [globalClick, setGlobalClick] = useState(false);

	const Letters = sentence.split('').map((letter, idx) => {
		if (letter === ' ') {
			return ' ';
		}
		return (
			<Letter
				key={idx}
				letter={letter}
				actionElIndex={actionEl}
				elIndex={idx}
				setActionElIndex={setActionElIndex}
			/>
			// <motion.span
			// 	key={idx}
			// 	onTap={() => {
			// 		count.current = random(10, 30);
			// 		setActionEl(idx);
			// 	}}
			// 	onPointerOver={() => {
			// 		!hoverActions.has(idx)
			// 			? setHoverAction(prev => {
			// 					prev.set(idx, undefined);
			// 					return new Map(new Map(prev));
			// 			  })
			// 			: null;
			// 	}}
			// 	onAnimationStartCapture={() => {
			// 		console.log('hello');
			// 		extraFn();
			// 	}}
			// 	onAnimationEnd={() => {
			// 		setHoverAction(prev => {
			// 			prev.delete(idx);
			// 			return new Map(prev);
			// 		});
			// 	}}
			// 	className={`inline-block  relative animate__animated ${
			// 		hoverActions.has(idx) ? 'animate__rubberBand' : ''
			// 	}`}>
			// 	{letter}
			// 	{actionEl === idx ? (
			// 		<div className='absolute top-0 left-0 pointer-events-none select-none'>
			// 			{Array(count.current)
			// 				.fill(0)
			// 				.map((_, i) => {
			// 					return (
			// 						<motion.span
			// 							key={i}
			// 							initial={{
			// 								opacity: 1,
			// 								scale: random(0.1, 0.4, true),
			// 							}}
			// 							animate={{
			// 								opacity: 1,
			// 								x: random(-400, 400),
			// 								y: random(-400, 400),
			// 								rotate: random(0, 360 * 3),
			// 							}}
			// 							style={{
			// 								color: sample(color),
			// 							}}
			// 							className='absolute inline-block origin-center'>
			// 							{letter}
			// 						</motion.span>
			// 					);
			// 				})}
			// 		</div>
			// 	) : null}
			// </motion.span>
		);
	});

	return (
		<span
			className='block whitespace-pre'
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
				{Letters}
			</MotionConfig>
		</span>
	);
};
