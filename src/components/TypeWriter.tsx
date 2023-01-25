import { useCycle } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useInterval, useUpdateEffect } from 'usehooks-ts';

type Props = {
	wordArray: string[];
};
export const TypeWriter = ({ wordArray }: Props) => {
	const [curContent, cycleContent] = useCycle(...wordArray);
	const letters = curContent.split(''); // framer motion

	const [letterEffectArr, setLetterEffectArr] = useState<string[]>([]);
	const [roles, setRoles] = useState<'add' | 'delete'>('add');

	// useInterval(
	// 	() => {
	// 		if (roles === 'add' && letterEffectArr.length < letters.length) {
	// 			setLetterEffectArr([...letterEffectArr, letters[letterEffectArr.length]]);
	// 			return;
	// 		}
	// 		if (roles === 'add' && letterEffectArr.length >= letters.length) {
	// 			setRoles('delete');
	// 			return;
	// 		}

	// 		if (roles === 'delete' && letterEffectArr.length > 1) {
	// 			letterEffectArr.pop();
	// 			setLetterEffectArr([...letterEffectArr]);
	// 			return;
	// 		}

	// 		if (letterEffectArr.length === 1) {
	// 			letterEffectArr.pop();
	// 			setLetterEffectArr([...letterEffectArr]);

	// 			setRoles('add');
	// 			onCycle();
	// 			return;
	// 		}
	// 	},
	// 	roles === 'delete' && letterEffectArr.length <= 0 ? null : 200
	// );
	const rafId = useRef(-1);
	const delay = 200;
	const diff = useRef(-1);
	const tempLettersRef = useRef<string[]>([...letters]);
	console.log(tempLettersRef.current);
	useEffect(() => {
		const findDiff = (t: number) => {
			const val = t - diff.current >= 200;
			if (val) {
				diff.current = t;
			}
			return val;
		};
		const loop = (t: number) => {
			rafId.current = window.requestAnimationFrame(loop);
			if (!findDiff(t)) return;

			if (roles === 'add') {
				if (tempLettersRef.current.length <= 0) {
					cycleContent();
				} else {
					letterEffectArr.push(tempLettersRef.current.shift()!);
				}
			}
		};
		rafId.current = window.requestAnimationFrame(loop);
		return () => {
			window.cancelAnimationFrame(rafId.current);
		};
	}, []);

	return (
		<>
			<span>{curContent}</span>
			<span className='text-5xl font-bold'>
				{letterEffectArr.map((l, idx) => (
					<span key={Date.now() + l + idx}>{l}</span>
				))}
			</span>
		</>
	);
};
