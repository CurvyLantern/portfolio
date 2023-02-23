import Link from 'next/link';
import { useRouter } from 'next/router';
import BackgroundVideo from 'src/components/BackgroundVideo';
import { MouseEffect } from 'src/components/MouseEffect';
import Parallax from 'src/components/Parallax';
import SmoothScroll from 'src/components/SmoothScroll';
import { SmoothScrollWaapi } from 'src/components/SmoothScroll2';

type Props = {
	children: React.ReactNode;
};
const RootLayout = ({ children }: Props) => {
	const router = useRouter();
	const isNotResumePage = router.pathname !== '/resume';
	return (
		<div>
			<MouseEffect />
			<main className='relative min-h-screen overflow-x-hidden cursor-pointer'>
				{/* background video */}
				<BackgroundVideo />
				{/* whole page overlay */}
				<div className='-z-30 backdrop-blur-sm bg-opacity-80 fixed top-0 left-0 w-full h-full bg-black'></div>

				<nav className=' flex items-center justify-between px-20 py-10'>
					<div className='text-neutral-600 text-3xl font-bold'>
						<Link href='/'>AN</Link>
					</div>

					{isNotResumePage ? (
						<Link href='/resume' className='underline'>
							Resume
						</Link>
					) : null}
				</nav>

				{/* children goes here */}
				{children}
			</main>
			<footer className='py-10 bg-neutral-800 flex flex-col items-center justify-center gap-3'>
				<p>made with ♥</p>
				<sub className='text-neutral-300'>tech used NextJs, tailwindcss</sub>
			</footer>
		</div>
	);
};

export { RootLayout };
