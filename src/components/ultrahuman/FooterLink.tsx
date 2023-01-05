import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const FooterLink = ({ children }: { children: ReactNode }) => (
	<li className='flex select-none'>
		<motion.a
			initial={{
				scale: 1,
			}}
			whileHover={{
				scale: 1.15,
				origin: 'left',
			}}
			className='flex items-center gap-2 cursor-pointer'>
			{children}
		</motion.a>
	</li>
);
export { FooterLink };
