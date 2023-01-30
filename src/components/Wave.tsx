import { motion } from 'framer-motion';
import { useState } from 'react';

export const Wave = () => {
	const [test, setTest] = useState(true);

	return (
		<motion.span
			initial={{
				rotate: 45,
				scale: 3,
			}}
			animate={{
				rotate: [15, 65],
			}}
			transition={{
				duration: 0.5,
				repeat: Infinity,
				repeatType: 'mirror',
			}}
			style={{
				transformOrigin: '60% 70%',
			}}
			onTap={() => setTest(!test)}
			className='inline-block select-none'>
			{test ? '👋' : '👏'}
		</motion.span>
	);
};
