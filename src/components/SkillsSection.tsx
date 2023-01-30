import {
	IconBrandJavascript,
	IconBrandReact,
	IconBrandVue,
	IconBrandSass,
	IconBrandTailwind,
	IconBrandNextjs,
	IconBrandSocketIo,
	IconBrandThreejs,
	IconBrandFramer,
} from '@tabler/icons-react';
import { useMemo } from 'react';
import { FaNodeJs, FaCss3 } from 'react-icons/fa';
import { SiExpress, SiFastify, SiWebrtc } from 'react-icons/si';
import { SkillCard } from 'src/components/SkillCard';

const type = <T, I, L, C>(title: T, icon: I, level: L, color: C) => ({
	title,
	icon,
	level,
	color,
});
const skills = [
	type('node-js', FaNodeJs, 70, 'rgb(60, 135, 58)'),
	type('vanilla-js', IconBrandJavascript, 95, 'rgb(228, 208, 75)'),
	type('react', IconBrandReact, 90, 'rgb(94, 212, 243)'),
	type('vue', IconBrandVue, 90, 'rgb(64, 178, 127)'),
	type('css', FaCss3, 92, 'rgb(29, 108, 172)'),
	type('scss', IconBrandSass, 80, 'rgb(195, 97, 146)'),
	type('tailwind', IconBrandTailwind, 95, 'rgb(53, 179, 235)'),
	type('next js', IconBrandNextjs, 95, 'rgb(255, 255, 255)'),
	type('express', SiExpress, 70, 'rgb(230, 30, 30)'),
	type('fastify', SiFastify, 70, 'rgb(255, 255, 255)'),
	type('webrtc', SiWebrtc, 50, 'rgb(242, 97, 0)'),
	type('websocket', IconBrandSocketIo, 75, 'rgb(255, 255, 255)'),
	type('three js', IconBrandThreejs, 80, 'rgb(255, 255, 255)'),
	type('framer motion', IconBrandFramer, 85, 'rgb(32, 139, 242)'),
];
interface Props {}
const SkillsSection = ({}) => {
	return (
		<section id='skill'>
			<h2 className='py-10 text-3xl font-semibold text-center'>Things I am good at</h2>
			<div className='flex flex-wrap items-center justify-center gap-10 lg:gap-20 max-w-[1000px] mx-auto'>
				{skills.map((skill, idx) => {
					return <SkillCard {...skill} key={idx} len={skills.length} index={idx} />;
				})}
			</div>
		</section>
	);
};

export default SkillsSection;
