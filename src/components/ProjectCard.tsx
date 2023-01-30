import { Variants, motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect } from 'react';

export const ProjectCard = ({
	img,
	short_desc,
	title,
	index,
	web_url = '#',
}: {
	title: string;
	short_desc: string;
	img: string;
	web_url: string;
	index: number;
}) => {
	const variant: Variants = {
		up: {
			y: 0,
			opacity: 1,
			scale: 1,
			transition: {
				delay: index * 0.15,
			},
		},
		initial: {
			opacity: 0,
			y: 100,
			scale: 0.8,
		},
	};

	return (
		<motion.div
			variants={variant}
			initial='initial'
			whileInView='up'
			viewport={{
				once: true,
			}}
			className='max-w-[500px] w-full flex flex-col'>
			<div
				style={{
					backgroundImage: `url(${img})`,
				}}
				className='bg-cover bg-no-repeat bg-center  bg-green-800 shrink-0 pt-[300px] relative'></div>
			<div className='bg-neutral-900 flex-1 px-4 py-8'>
				<h3 className='pb-5 text-2xl'>{title}</h3>
				<p className='text-neutral-400'>
					{short_desc}{' '}
					<Link
						className='text-blue-400'
						href={{
							pathname: 'projects/muvitime',
						}}>
						read more here
					</Link>
				</p>

				<Link href={web_url} rel='' target='_blank' className='text-blue-400'>
					open project in new tab
				</Link>
			</div>
		</motion.div>
	);
};
