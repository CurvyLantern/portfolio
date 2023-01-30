import { TablerIconsProps } from '@tabler/icons-react';
import { Variants, motion } from 'framer-motion';
import { useState } from 'react';
import { IconType } from 'react-icons/lib';

type SkillCardProps = {
	title: string;
	icon: IconType | ((props: TablerIconsProps) => JSX.Element);
	level: number;
	color: string;
	len: number;
	index: number;
};
const useCircularProgress = (circum: number, prog: number) => {
	let offset = circum - (circum * prog) / 100;
	return offset;
};
export const SkillCard = ({ ...skill }: SkillCardProps) => {
	const [isHovered, setHover] = useState(false);
	const w = 96;
	let r = w / 2;
	let circumference = (2 * Math.PI * w) / 2 + 5;

	const variant: Variants = {
		initial: {
			strokeDashoffset: useCircularProgress(circumference, 0),
			strokeDasharray: circumference,
		},
		show: {
			strokeDashoffset: useCircularProgress(circumference, skill.level),
			strokeDasharray: circumference,
		},
	};
	let sBlur = skill.level / 8;
	// let ix = skill.len / 2 - skill.index;
	// ix *= 20;

	let ix = skill.index % 5;
	ix *= 50;
	ix -= 100;
	const parentV: Variants = {
		view: {
			y: 0,
			scale: 1,
			opacity: 1,
			x: 0,
			transition: {
				// delay: skill.index * 0.05,
			},
		},
		initial: {
			y: 20,
			opacity: 0.5,
			scale: 0.8,
			x: ix,
		},
	};
	return (
		<motion.div
			variants={parentV}
			whileInView='view'
			initial='initial'
			onPointerOver={() => {
				setHover(true);
			}}
			onPointerOut={() => {
				setHover(false);
			}}
			style={{
				boxShadow: `0 0 ${sBlur}px ${skill.color}, 0 0 ${sBlur}px ${skill.color} inset`,
			}}
			className='w-28 h-28 bg-neutral-800 relative flex items-center justify-center bg-opacity-25 rounded-full'>
			<svg
				viewBox={`0 0 ${w} ${w}`}
				height='100%'
				width='100%'
				className='absolute top-0 left-0 overflow-visible -rotate-90'>
				<circle
					strokeLinecap='round'
					cx='50%'
					cy='50%'
					r='50%'
					stroke='white'
					strokeOpacity='.1'
					fill='transparent'
					strokeWidth='5'></circle>
				<motion.circle
					variants={variant}
					initial='initial'
					animate='show'
					transition={{
						duration: 2,
					}}
					strokeLinecap='round'
					cx='50%'
					cy='50%'
					r='50%'
					stroke={skill.color}
					fill='transparent'
					strokeWidth='5'></motion.circle>
				Sorry, your browser does not support inline SVG.
			</svg>

			{skill.icon ? (
				<div>
					<skill.icon size={48} color={skill.color} />
				</div>
			) : null}

			<motion.div
				initial={{
					y: 0,
					opacity: 0,
				}}
				animate={{
					y: isHovered ? -100 : -50,
					opacity: isHovered ? 1 : 0,
				}}
				className='text-white bg-neutral-700 absolute w-full px-5 py-2 text-center rounded-lg'>
				<h5 className='text-sm'>{skill.title}</h5>
				<p>{skill.level}%</p>
			</motion.div>
		</motion.div>
		// </div>
	);
};
