import {
	MotionConfig,
	Variant,
	Variants,
	motion,
	useMotionValue,
	useMotionValueEvent,
	useScroll,
	useSpring,
} from 'framer-motion';
import Link from 'next/link';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useAudio, useMouse, usePrevious } from 'react-use';
import { debounce, throttle } from 'lodash-es';
import { AnimateLetter } from 'src/components/AnimateLetter';
import { useEffectOnce } from 'usehooks-ts';
import {
	IconMouse,
	IconBrandJavascript,
	IconBrandReact,
	IconBrandVue,
	IconBrandTailwind,
	IconBrandNextjs,
	IconBrandSocketIo,
	IconBrandThreejs,
	IconBrandFramer,
	IconBrandSass,
} from '@tabler/icons-react';
import { SiExpress, SiFastify, SiWebrtc } from 'react-icons/si';

import { FaCss3, FaNodeJs } from 'react-icons/fa';

const rand = (min: number, max: number, decimal: boolean = false) =>
	!decimal ? Math.floor(Math.random() * (max - min) + min) : Math.random() * (max - min) + min;

const CustomMouse = () => {
	const [pos, setPos] = useState({
		x: -100,
		y: -100,
	});

	const mainRef = useRef<HTMLDivElement>(null);

	useEffectOnce(() => {
		const listener = (evt: MouseEvent) => {
			if (mainRef.current) {
				mainRef.current.style.transform = `translate(${evt.pageX - 16}px, ${evt.pageY - 16}px)`;
			}
			setPos({
				x: evt.pageX,
				y: evt.pageY,
			});
			// console.log({
			// 	x: evt.x,
			// 	y: evt.y,
			// 	x1: evt.pageX,
			// 	y1: evt.pageY,
			// });
		};
		window.addEventListener('mousemove', listener);
		return () => {
			window.removeEventListener('mousemove', listener);
		};
	});
	return (
		<div className='pointer-events-none'>
			<div
				ref={mainRef}
				className='z-[999] outline outline-2 outline-offset-4 outline-green-300 absolute w-8 h-8 rounded-full'></div>

			<motion.div
				className='mix-blend-difference bg-white z-[1000] absolute w-8 h-8 rounded-full flex items-center justify-center'
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

const PortfolioPage = () => {
	const [boingAudioEl, state, controls, ref] = useAudio({
		src: 'myaudio2.mp3',
	});
	useEffectOnce(() => {
		controls.volume(0.15);
	});

	const extraFn = useCallback(
		debounce(
			() => {
				controls.pause();
				controls.seek(0);
				controls.play();
			},
			100,
			{
				leading: true,
			}
		),
		[]
	);

	const { scrollY, scrollYProgress } = useScroll();
	const [axis, setAxis] = useState({
		x: 0,
		y: 0,
	});
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);

	const scrollDownVariant: Variants = {
		initial: {
			y: 0,
			opacity: 0,
		},
		scrollInView: {
			y: [-10, 10],
			opacity: 1,
			transition: {
				y: {
					duration: 2,
					ease: 'easeInOut',
					repeat: 15,
					repeatType: 'mirror',
				},
			},
		},
	};

	const skillArray = useMemo(() => {
		return [
			{
				title: 'node-js',
				icon: FaNodeJs,
				level: 70,
				color: '',
			},
			{
				title: 'vanilla-js',
				icon: IconBrandJavascript,
				level: 70,
			},
			{
				title: 'react',
				icon: IconBrandReact,
				level: 70,
			},
			{
				title: 'vue',
				icon: IconBrandVue,
				level: 70,
			},
			{
				title: 'css',
				icon: FaCss3,
				level: 70,
			},
			{
				title: 'scss',
				icon: IconBrandSass,
				level: 70,
			},
			{
				title: 'tailwind',
				icon: IconBrandTailwind,
				level: 70,
			},
			{
				title: 'next js',
				icon: IconBrandNextjs,
				level: 70,
			},
			{
				title: 'express',
				icon: SiExpress,
				level: 70,
			},
			{
				title: 'fastify',
				icon: SiFastify,
				level: 70,
			},
			{
				title: 'webrtc',
				icon: SiWebrtc,
				level: 70,
			},
			{
				title: 'websocket',
				icon: IconBrandSocketIo,
				level: 70,
			},
			{
				title: 'three js',
				icon: IconBrandThreejs,
				level: 70,
			},
			{
				title: 'framer motion',
				icon: IconBrandFramer,
				level: 70,
			},
		];
	}, []);

	return (
		<>
			<main className='min-h-screen  overflow-hidden cursor-none relative'>
				<CustomMouse />
				{boingAudioEl}
				<div className='flex px-20 py-10 justify-between'>
					<div className='text-3xl font-bold text-neutral-600'>
						<Link href='/'>AN</Link>
					</div>

					<div>darkmode</div>
				</div>
				<Container>
					<header className='relative text-center text-3xl tracking-wider pt-32 flex-col flex gap-4'>
						<div className='mb-10'>
							<Wave />
						</div>
						<h1 className='font-bold text-7xl text-center'>
							<AnimateLetter sentence='Hi there!!' extraFn={extraFn} />
						</h1>
						<p className='text-center'>
							I am <span className='text-cyan-500 text-[125%]'>Ashfaq Nasim</span>
						</p>
						<p className='text-center'>and I know about the web a little</p>
					</header>
					<motion.div
						initial='initial'
						variants={scrollDownVariant}
						whileInView='scrollInView'
						className='text-center py-44 flex items-center justify-center'>
						<IconMouse size={48} />
					</motion.div>
				</Container>
				<section id='skill'>
					<h2 className='py-10 text-3xl text-center font-semibold'>Things I am good at</h2>
					<div className='flex flex-wrap items-center justify-center gap-10 max-w-[800px] mx-auto'>
						{skillArray.map((skill, idx) => {
							const w = 96;
							let r = 96 / 2 - 5;
							let arc = 2 * Math.PI * r;
							const variant: Variants = {
								initial: {
									strokeDashoffset: (arc * (100 - 0)) / 100,
									strokeDasharray: arc,
								},
								show: custom => ({
									strokeDashoffset: (arc * (100 - custom)) / 100,
									strokeDasharray: arc,
								}),
							};
							return (
								// <div className='relative' key={idx}>
								<div
									key={idx}
									className='
								w-28
								h-28
								relative  flex items-center justify-center bg-neutral-800 bg-opacity-25 rounded-full'>
									<svg height='100%' width='100%' className='absolute top-0 left-0 -rotate-90'>
										<circle
											strokeLinecap='round'
											cx='50%'
											cy='50%'
											r={`calc(50% - 5px)`}
											stroke='white'
											strokeOpacity='.1'
											fill='transparent'
											stroke-width='10'></circle>
										<motion.circle
											variants={variant}
											initial='initial'
											animate='show'
											custom={skill.level}
											transition={{
												duration: 2,
											}}
											strokeLinecap='round'
											cx='50%'
											cy='50%'
											r={`calc(50% - 5px)`}
											stroke='white'
											fill='transparent'
											stroke-width='10'></motion.circle>
										Sorry, your browser does not support inline SVG.
									</svg>

									{skill.icon ? (
										<div>
											<skill.icon size={48} />
										</div>
									) : null}
									{/* <p className='text-white'>{skill.title}</p> */}
								</div>
								// </div>
							);
						})}
					</div>
				</section>

				<section id='projects-showcase'>
					<Container>
						<h2 className='text-3xl font-semibold text-center py-20'>Some Projects of mine</h2>
						<div className='grid grid-cols-1  md:grid-cols-2 justify-items-center  lg:grid-cols-3 gap-5'>
							<ProjectCard />
							<ProjectCard />
							<ProjectCard />
							<ProjectCard />
							<ProjectCard />
							<ProjectCard />
						</div>
					</Container>
				</section>
				<section id='contact-me'>
					<Container className='w-full sm:w-2/3 lg:w-1/2'>
						<h2 className='text-center text-3xl font-semibold py-20'>Write me something</h2>
						<div className='flex min-h-[500px]'>
							<div className='flex-1 rounded-l-md  bg-green-500'></div>
							<div className='flex-1 flex rounded-r-md border-l-0 border-2 border-purple-600'>
								<form action='#' className='flex-1 flex-col  p-5 flex items-center justify-center gap-5'>
									<div className='w-full flex-col flex gap-2'>
										<label htmlFor='subject'>What might the subject be ?</label>
										<input
											type='text'
											id='subject'
											className='p-2 rounded-sm bg-neutral-800 text-white text-xl'
										/>
									</div>
									<div className='w-full flex-col flex gap-2'>
										<label htmlFor='description'>Give me a little summary please</label>
										<textarea
											id='description'
											className='p-2 rounded-sm bg-neutral-800 text-white text-xl'
										/>
									</div>
									<div className='w-full flex-col flex gap-2'>
										<button className='p-3 bg-neutral-700'>Submit</button>
									</div>
								</form>
							</div>
						</div>
					</Container>
				</section>
			</main>
		</>
	);
};

const ProjectCard = () => {
	return (
		<div className='max-w-[500px] w-full flex flex-col'>
			<div className='bg-green-800 shrink-0 pt-[300px] relative'></div>
			<div className='px-4 py-8 flex-1 bg-neutral-900'>
				<h3 className='text-2xl pb-5'>Real-time screen sharing</h3>
				<p className='text-neutral-400'>
					A fun project that I have worked on, It has silly background story about why I made this one. read
					more here ==
				</p>
			</div>
		</div>
	);
};

const Wave = () => {
	return (
		<motion.span
			initial={{
				rotate: 45,
				scale: 3,
			}}
			animate={{
				rotate: [15, 55],
			}}
			transition={{
				duration: 0.5,
				repeat: Infinity,
				repeatType: 'mirror',
			}}
			style={{
				transformOrigin: '60% 70%',
			}}
			className='inline-block'>
			👋
			{/* <span
							className='inline-block p-[4px] bg-green-500 absolute'
							style={{
								top: `${y}%`,
								left: `${x}%`,
							}}></span> */}
		</motion.span>
	);
};
const Container = ({ children, className }: { className?: any; children: React.ReactNode }) => {
	return <div className={`${className} container mx-auto`}>{children}</div>;
};

/* <input
				type='range'
				value={x}
				min={0}
				max={100}
				step={1}
				onChange={evt => {
					console.log(evt.currentTarget.valueAsNumber);
					setX(evt.currentTarget.valueAsNumber);
				}}
			/>
			<input
				type='range'
				value={y}
				min={0}
				max={100}
				step={1}
				onChange={evt => {
					setY(evt.currentTarget.valueAsNumber);
				}}
			/> */

export default PortfolioPage;
