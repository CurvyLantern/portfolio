import React, { useEffect, useRef } from 'react';
import useMeasure from 'react-use-measure';
import { scroll, animate, ScrollOffset, spring } from 'motion';
import { interpolate } from '@motionone/utils';

import { mergeRefs } from 'react-merge-refs';
import { AnimationPlaybackControls, animate as framerAnimate } from 'framer-motion';

const SmoothScrollWaapi = ({ children }: { children: React.ReactNode }) => {
	const ref = useRef<HTMLDivElement>(null);
	const [scrollRef, { height = 1 }] = useMeasure();
	const fAnimateRef = useRef<AnimationPlaybackControls>();

	useEffect(() => {
		if (ref.current) {
			scroll(
				animate(ref.current, {
					y: [0, -height],
				}),
				{
					axis: 'y',
					offset: ScrollOffset.Exit,
					smooth: 0.4,
				}
			);
		}

		return () => {};
	}, [height]);

	return (
		<>
			<div
				ref={mergeRefs([ref, scrollRef])}
				className='will-change-transform fixed top-0 left-0 w-full overflow-hidden'>
				{children}
			</div>
			<div style={{ height }}></div>
		</>
	);
};

export { SmoothScrollWaapi };
