import {
	IconBrandFramer,
	IconBrandJavascript,
	IconBrandNextjs,
	IconBrandReact,
	IconBrandSass,
	IconBrandSocketIo,
	IconBrandTailwind,
	IconBrandThreejs,
	IconBrandVue,
	IconMouse,
	TablerIconsProps,
} from '@tabler/icons-react';
import { Variants, motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { debounce } from 'lodash-es';
import Link from 'next/link';
import { useCallback, useMemo, useRef, useState } from 'react';
import { SiExpress, SiFastify, SiWebrtc } from 'react-icons/si';
import { useAudio } from 'react-use';
import { AnimateLetter } from 'src/components/AnimateLetter';
import { useEffectOnce } from 'usehooks-ts';

import { GetStaticProps } from 'next';
import { FaCss3, FaNodeJs } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import { ContactForm } from 'src/components/ContactForm';
import { ProjectCard } from 'src/components/ProjectCard';
import { SkillCard } from 'src/components/SkillCard';
import SmoothScroll from 'src/components/SmoothScroll';
import BackgroundVideo from 'src/components/BackgroundVideo';
import Parallax from 'src/components/Parallax';
import { Wave } from 'src/components/Wave';
import { Container } from 'src/components/Container';
import { ProjectsData } from 'DB/data_projects';
import SkillsSection from 'src/components/SkillsSection';
import ContactMeSection from 'src/components/ContactMeSection';
import { MouseEffect } from 'src/components/MouseEffect';

interface PortfolioPageProps {
	myProjects: typeof ProjectsData;
	skills: {
		title: string;
		icon: IconType | ((props: TablerIconsProps) => JSX.Element);
		level: number;
		color: string;
	}[];
}
const PortfolioPage = ({ myProjects }: PortfolioPageProps) => {
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

	const heroSectionRef = useRef(null);

	return (
		<div>
			<section ref={heroSectionRef}>
				<Container>
					<motion.header className='relative flex flex-col gap-4 pt-32 text-3xl tracking-wider text-center'>
						<div className='mb-10'>
							<Wave />
						</div>
						{/* <Parallax speed={10}> */}
						<div>
							<h1 className='text-7xl font-bold text-center'>
								<AnimateLetter sentence='Hi there!!' extraFn={() => {}} />
							</h1>
							<p className='text-center'>
								I am <span className='text-cyan-500 text-[125%]'>Ashfaq Nasim</span>
							</p>
							<p className='text-center'>and I know about the web a little</p>
						</div>
						{/* </Parallax> */}
					</motion.header>
					<motion.div
						initial='initial'
						variants={scrollDownVariant}
						whileInView='scrollInView'
						className='py-44 flex items-center justify-center text-center'>
						<IconMouse size={48} />
					</motion.div>
				</Container>
			</section>
			{/* Skills section */}
			<SkillsSection />
			<section id='projects-showcase'>
				<Container>
					<h2 className='py-20 text-3xl font-semibold text-center'>Some Projects of mine</h2>
					{/* <div className='md:grid-cols-2 justify-items-center xl:grid-cols-3 grid grid-cols-1 gap-5'> */}
					<div className='flex gap-5 flex-wrap items-center justify-center'>
						{myProjects.map((project, idx) => {
							return <ProjectCard key={idx} {...project} index={idx} />;
						})}
					</div>
				</Container>
			</section>
			<ContactMeSection />
		</div>
	);
};

export const getStaticProps: GetStaticProps = ctx => {
	return {
		props: {
			myProjects: ProjectsData,
		},
	};
};

export default PortfolioPage;
