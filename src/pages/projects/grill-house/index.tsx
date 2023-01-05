import LogoImage from 'public/assets/images/logosvg.svg';
import { ReactNode } from 'react';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2';
import Image from 'next/image';

import Food1 from 'public/assets/images/food1.png';
import Food2 from 'public/assets/images/food2.png';

import BgBanner from 'public/assets/images/bg-1.jpg';

const navItems = ['Home', 'Menu', 'Specials', 'About', 'Method'];
const GrillHousePage = () => {
	return (
		// bg-neutral-800
		<div className='bg-neutral-800 box-border'>
			<div className='flex flex-col min-h-screen pt-6'>
				{/* Heading Section */}
				<nav className=' md:flex-row flex flex-col items-center justify-around gap-10 p-5'>
					<div className=' lg:w-56 w-40'>
						{/* Can't use className here */}
						<LogoImage width={false} height={false} viewBox='0 0 200 150' />
					</div>
					<ul className='border-amber-400 bg-amber-400 sm:flex-row flex flex-col border-4'>
						{/* bg-yellow-300  */}
						{navItems.map((item, idx) => {
							return (
								<li key={idx} className='text-amber-400 flex-1 text-xl font-bold'>
									<a
										href='#'
										className={`${
											item === 'Specials' ? 'bg-amber-400 text-white' : 'bg-neutral-800'
										} hover:bg-amber-300 px-5 py-3 block `}>
										{item}
									</a>
								</li>
								// <li key={idx} className='flex text-xl font-bold text-yellow-300 bg-yellow-300'>
								// 	<a
								// 		href='#'
								// 		className={`${
								// 			item === 'Specials'
								// 				? 'shadow-inner bg-transparent text-white'
								// 				: 'bg-gray-600 rounded-lg'
								// 		} px-5 py-3`}>
								// 		{item}
								// 	</a>
								// </li>
							);
						})}
					</ul>
				</nav>

				{/* Banner Section */}
				<section
					className='relative flex items-center justify-center flex-1 bg-left-top bg-no-repeat bg-cover'
					style={{
						backgroundImage: `url(${BgBanner.src})`,
					}}>
					{/* absolute top-0 left-0 flex items-center justify-center w-3/4 -translate-x-1/2 */}
					<div className=' absolute w-full h-full overflow-hidden'>
						<Image
							src={Food1}
							alt='Left Burger'
							className='top-1/2 absolute left-0 w-auto h-full -translate-x-1/2 -translate-y-1/2'
						/>
					</div>

					<div className='absolute w-full h-full overflow-hidden'>
						<Image
							src={Food2}
							alt='right Burger'
							className='top-1/2 absolute right-0 w-auto h-full translate-x-1/2 -translate-y-1/2'
						/>
					</div>

					{/* Overlay */}
					<div className='absolute w-full h-full bg-black bg-opacity-50'></div>

					{/* top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2*/}
					<article className='absolute flex flex-col'>
						<div className='border-amber-400 max-w-xs mb-10 text-center text-white border-4'>
							<header className='bg-amber-400 text-neutral-800 font-bold'>
								<h1 className='px-10 py-5 text-3xl'>Opening Party</h1>
							</header>
							<p className='py-4 text-xl font-semibold'>06/20/2020 - 7 PM</p>
						</div>

						{/* sume texts */}
						<ul className='gap-x-2 flex mb-10 text-2xl text-white'>
							<li>Food</li>
							<span>-</span>
							<li>Music</li>
							<span>-</span>

							<li>Friends</li>
							<span>-</span>

							<li>Fun</li>
						</ul>

						{/* indicator */}
						<div className='text-amber-400 flex items-center justify-center gap-5 text-3xl'>
							<HiArrowLeft />
							<span className='bg-amber-400 w-6 h-6 rounded-full'></span>
							<span className='bg-amber-400 w-6 h-6 rounded-full'></span>
							<span className='bg-amber-400 w-6 h-6 rounded-full'></span>
							<HiArrowRight />
						</div>
					</article>
				</section>
			</div>

			{/* Menu Section */}
			<section className='flex'>
				<div className='grid flex-1 grid-rows-3'>
					<div>
						<Image src={Food1} alt='Food image'></Image>
					</div>
					<div className='border-amber-400 max-w-xs text-center text-white border-4'>
						<header className='bg-amber-400 text-neutral-800 font-bold'>
							<h4>Chicken</h4>
						</header>
						<p>Chicken with Salad</p>
					</div>
					<div className='border-amber-400 max-w-xs text-center text-white border-4'>
						<header className='bg-amber-400 text-neutral-800 font-bold'>
							<h4>Slides</h4>
						</header>
						<p>Potato Fries</p>
					</div>
				</div>
				<div className='grid flex-1 grid-rows-3'></div>
				<div className='grid flex-1 grid-rows-3'></div>
			</section>
		</div>
	);
};

const Content = ({ heading, innerContent }: { heading: ReactNode; innerContent: ReactNode }) => {
	return (
		<div className='border-amber-400 max-w-xs text-center text-white border-4'>
			<header className='bg-amber-400 text-neutral-800 font-bold'>{heading}</header>
			<p>{innerContent}</p>
		</div>
	);
};

export default GrillHousePage;
