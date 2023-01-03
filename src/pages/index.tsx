import { getCookie, setCookie } from 'cookies-next';
import { GetServerSideProps } from 'next';
import { useLayoutEffect, useRef, useState } from 'react';
import { FaFacebookSquare, FaGithubSquare } from 'react-icons/fa';
import { HiMoon, HiSun } from 'react-icons/hi2';

import Image from 'next/image';

import { useCycle } from 'framer-motion';
import Link from 'next/link';
import AvatarImg from 'public/assets/avatar.jpg';
import { useInterval } from 'usehooks-ts';

const contents = ['Web', 'Javascript', 'Html', 'Css', 'Next Js'];

const PortfolioPage = (props: any) => {
	const [curContent, cycleContent] = useCycle(...contents);
	const [isDarkMode, cycleDarkMode] = useCycle('light', 'dark');

	useLayoutEffect(() => {
		if (isDarkMode === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [isDarkMode]);

	return (
		<div className='min-h-screen dark:bg-teal-700  bg-teal-100 flex-col flex'>
			{/* Navbar section */}
			<nav className='bg-opacity-40 bg-teal-200 shadow-md border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 '>
				<div className='container flex flex-wrap items-center justify-between mx-auto'>
					<Link href='/' className='flex items-center'>
						<span className='text-orange-300 drop-shadow-sm self-center  font-bold text-3xl whitespace-nowrap dark:text-white'>
							AN
						</span>
					</Link>

					<div className='flex gap-5'>
						<Link
							href={{
								pathname: 'resume',
							}}>
							<button
								type='button'
								className='text-white bg-teal-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
								Resume
							</button>
						</Link>
						<div className='w-1 bg-gray-600'></div>
						<button
							type='button'
							className=' flex px-5 items-center p-2 text-sm dark:text-gray-500 rounded-lg dark:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-100  bg-gray-700 dark:focus:ring-gray-600'
							onClick={() => {
								cycleDarkMode();
							}}>
							<span className='sr-only'>Toggle Dark Mode</span>
							{isDarkMode === 'light' ? <HiMoon /> : <HiSun />}
						</button>
					</div>
				</div>
			</nav>
			{/* Main Banner */}
			<section className='mb-auto flex flex-col items-center justify-center'>
				<header className='mt-10 text-3xl font-bold text-orange-400 selection:text-2xl selection:text-orange-200 selection:bg-teal-800 selection:bg-opacity-75 '>
					<h1>Ashfaq Naseem</h1>
				</header>

				<p className='dark:text-teal-100 flex items-center justify-center gap-2 text-xl font-semibold  h-20'>
					A guy who knows about the{' '}
					<TypeWriter
						onCycle={() => {
							cycleContent();
						}}
						text={curContent}
						key={curContent}
					/>{' '}
					a little
				</p>

				{/* My Image */}
				<div className='max-w-[250px] my-10 w-full aspect-1 rounded-full overflow-hidden relative shadow-lg'>
					<Image src={AvatarImg} className='object-cover' fill alt='this is my image'></Image>
				</div>
				<div className='flex text-5xl gap-4 dark:text-teal-100 '>
					<span>
						<FaFacebookSquare />
					</span>
					<span>
						<FaGithubSquare />
					</span>
				</div>
			</section>
			<footer className='bg-teal-700 bg-opacity-60 text-teal-200 shadow-md text-center   px-5 py-5 mt-10 dark:bg-gray-900'>
				Hi this site is made using nextJs
			</footer>
		</div>
	);
};

const TypeWriter = ({ text, onCycle }: { onCycle: () => void; text: string }) => {
	const words = text.split(' '); // framer motion
	const letters = words.map(w => [...w.split(''), ' ']).flat(); // f r a m e r  m o t i o n

	const [letterEffectArr, setLetterEffectArr] = useState<string[]>([]);
	const [roles, setRoles] = useState<'add' | 'delete'>('add');

	useInterval(
		() => {
			if (roles === 'add' && letterEffectArr.length < letters.length) {
				setLetterEffectArr([...letterEffectArr, letters[letterEffectArr.length]]);
				return;
			}
			if (roles === 'add' && letterEffectArr.length >= letters.length) {
				setRoles('delete');
				return;
			}

			if (roles === 'delete' && letterEffectArr.length > 1) {
				letterEffectArr.pop();
				setLetterEffectArr([...letterEffectArr]);
				return;
			}

			if (letterEffectArr.length === 1) {
				letterEffectArr.pop();
				setLetterEffectArr([...letterEffectArr]);

				setRoles('add');
				onCycle();
				return;
			}
		},
		roles === 'delete' && letterEffectArr.length <= 0 ? null : 200
	);

	return (
		<span className='text-5xl font-bold'>
			{letterEffectArr.map((l, idx) => (
				<span key={idx + l}>{l}</span>
			))}
		</span>
	);
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
	const mode = getCookie('darkMode', { req, res });

	setCookie('darkMode', mode ? mode : 'dark', { req, res, maxAge: 60 * 6 * 24 });

	return {
		props: {
			darkMode: mode ? mode : 'dark',
		},
	};
};

export default PortfolioPage;
