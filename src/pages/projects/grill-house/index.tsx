import LogoImage from 'public/assets/images/logo.svg';
import { ReactNode, useState } from 'react';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2';
import Image from 'next/image';
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import { HiBars3, HiXMark } from 'react-icons/hi2';

import Food1 from 'public/assets/images/food1.png';
import Food2 from 'public/assets/images/food2.png';
import Food4 from 'public/assets/images/food4.png';
import Food6 from 'public/assets/images/food6.png';
import Food7 from 'public/assets/images/food7.png';
import Bowl1 from 'public/assets/images/bowl.png';
import KnifeImg from 'public/assets/images/knife1.png';

import BgBanner from 'public/assets/images/bg-1.jpg';
import BgMenu from 'public/assets/images/bg-2.jpg';
import { motion } from 'framer-motion';

const navItems = ['Home', 'Menu', 'Specials', 'About', 'Method'];
const GrillHousePage = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		// bg-neutral-800
		<div className='bg-neutral-800 box-border flex flex-col gap-20'>
			<div className='flex flex-col min-h-screen'>
				{/* Heading Section */}
				<nav className='md:flex-row md:items-center md:justify-around relative flex flex-col gap-10 px-5 py-3'>
					<div className=' flex justify-between'>
						<div className=' lg:w-32 w-20'>
							{/* Can't use className here */}
							<LogoImage />
						</div>

						{/* mobile */}
						<div className='text-amber-400 md:hidden flex text-4xl'>
							<button onClick={() => setIsMenuOpen(!isMenuOpen)}>
								{isMenuOpen ? <HiXMark /> : <HiBars3 />}
							</button>
						</div>
					</div>
					<ul className=' border-amber-400 bg-amber-400 md:flex-row md:flex flex-col hidden border-4'>
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
							);
						})}
					</ul>
					<motion.div className='md:hidden bg-neutral-800 top-full md:relative absolute left-0 z-30 w-full'>
						{isMenuOpen ? (
							<ul className=' border-amber-400 bg-amber-400 md:flex-row flex flex-col border-4'>
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
									);
								})}
							</ul>
						) : null}
					</motion.div>
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
			<section
				className=' relative bg-no-repeat bg-cover'
				style={{
					backgroundImage: `url(${BgMenu.src})`,
				}}>
				{/* overlay */}
				<div className='bg-opacity-60 absolute inset-0 w-full h-full bg-black'></div>
				<div className='relative px-5'>
					<h2 className=' py-10 text-4xl font-bold text-center text-white'>Menu</h2>
					<div className=' flex gap-10 px-20 py-10'>
						{Array(3)
							.fill(0)
							.map((i, idx) => (
								<div key={idx} className='flex-1'>
									<Image src={Food1} className='w-full' alt='Food image'></Image>
								</div>
							))}
					</div>
					<div className='md:grid-cols-2 lg:grid-cols-3 grid grid-cols-1 gap-5'>
						{Array(9)
							.fill(0)
							.map((i, idx) => {
								return (
									<div key={idx} className='border-amber-400 flex flex-col text-white border-4'>
										<header className='bg-amber-400 text-neutral-800 font-bold text-center'>
											<h4>Chicken</h4>
										</header>
										<div className='grid flex-1 px-5 py-4'>
											<div className='flex'>
												<p className='flex-1'>Chicken with Salad</p>
												<p>600</p>
											</div>
											<div className='flex'>
												<p className='flex-1'>Chicken with Salad</p>
												<p>600</p>
											</div>
											<div className='flex'>
												<p className='flex-1'>Chicken with Salad</p>
												<p>600</p>
											</div>
										</div>
									</div>
								);
							})}
					</div>
				</div>
			</section>

			{/* Discount */}
			<section
				className=' py-10 bg-no-repeat bg-cover'
				style={{
					backgroundImage: `url(${BgBanner.src})`,
				}}>
				<div className='md:grid-cols-3 grid grid-cols-1 px-20'>
					<div className=' md:col-span-2'>
						<Image src={Food4} alt='image' className='w-full' />
					</div>
					<div className='md:text-right flex flex-col justify-around gap-10 text-center'>
						<div className='mt-auto mb-auto'>
							<p className='text-amber-400 lg:text-5xl flex flex-col mb-5 text-2xl'>
								<span>Get a</span> <span className=' font-bold'>25% discount </span>
								<span>on your next dinner</span>
							</p>
							<button className='bg-amber-400 px-6 py-3 text-xl text-black'>Click Here</button>
						</div>
						<div className=' flex flex-col items-center'>
							<div className='lg:w-36 md:ml-auto w-24'>
								<LogoImage />
							</div>
							<p className='text-amber-400 text-2xl font-bold'>The Meat Experience</p>
						</div>
					</div>
				</div>
			</section>

			{/* Special of the month */}
			<section
				className=' py-10 bg-no-repeat bg-cover'
				style={{
					backgroundImage: `url(${BgBanner.src})`,
				}}>
				<div className='md:flex-row md:w-2/3 flex flex-col items-center justify-center w-full gap-10 px-10 mx-auto'>
					<div className='border-amber-400 flex-1 border-4'>
						<h3 className='text-neutral-800 bg-amber-400 px-4 py-3 text-3xl font-bold text-center uppercase'>
							Special of the month
						</h3>
						<p className='py-7 text-2xl font-semibold text-center text-white'>Lorem Ipsum</p>
					</div>
					<p className='flex-1 text-lg leading-tight tracking-wide text-white'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas praesentium quae autem sit dolor
						alias odit minus vero repellat perferendis! Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Nulla, voluptatem?
					</p>
				</div>
				<div className='md:h-128 md:grid-cols-2 relative grid h-64 my-10'>
					<div className=' relative'>
						<div
							className='md:-bottom-1/2 md:w-full absolute w-full'
							style={{
								filter: 'drop-shadow(15px -40px 50px black)',
							}}>
							<Image src={Food1} alt='this is special' className='object-cover w-full' />
						</div>
					</div>
					<div>
						<div
							style={{
								filter: 'drop-shadow(15px -20px 40px black)',
							}}>
							<Image src={Bowl1} alt='bowl' className='md:ml-52 w-28 md:w-48 ' />
						</div>
						<div
							style={{
								filter: 'drop-shadow(15px -40px 30px black)',
							}}
							className='relative'>
							<Image src={KnifeImg} alt='spoons' className='w-28 md:w-48 absolute' />
						</div>
					</div>
				</div>
			</section>

			{/* Method section */}
			<section
				className=' md:grid-cols-2 grid pt-40 bg-no-repeat bg-cover'
				style={{
					backgroundImage: `url(${BgBanner.src})`,
				}}>
				<div>
					<Image
						src={Food6}
						alt='food 6'
						className='object-cover w-full'
						style={{
							filter: `drop-shadow(50px 50px 50px black)`,
						}}
					/>
				</div>
				<div className='flex items-center justify-center'>
					<div className='w-11/12 max-w-[400px] border-[10px] border-amber-400'>
						<h2 className='bg-amber-400 px-5 py-5 text-5xl font-bold text-center'>Our Method</h2>
						<p className='p-5 text-xl font-semibold text-center text-white'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, mollitia. Doloribus pariatur
							quos sequi? Odio distinctio nesciunt dolor nemo ducimus!
						</p>
					</div>
				</div>
			</section>

			{/* Live */}
			<section
				className='relative pt-20 overflow-hidden bg-no-repeat bg-cover'
				style={{
					backgroundImage: `url(${BgBanner.src})`,
				}}>
				<div className='md:flex-row flex flex-col items-center justify-center w-2/3 gap-10 px-10 mx-auto'>
					<div className='border-amber-400 flex-1 border-4'>
						<h3 className='text-neutral-800 bg-amber-400 px-4 py-3 text-3xl font-bold text-center uppercase'>
							Live Music
						</h3>
						<p className='py-7 grid text-2xl font-semibold text-center text-white'>
							<span className='font-bold'>Jazz Night</span>
							<span>Every Friday</span>
						</p>
					</div>
					<p className='flex-1 text-xl leading-tight tracking-wide text-white'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. A unde, sed reprehenderit voluptatum
						neque porro ad quae dicta placeat perspiciatis mollitia esse quo? Necessitatibus cumque, alias
						ipsum minus sunt optio!
					</p>
				</div>
				<div className=' mt-28 bottom-0 left-0 w-full'>
					<Image
						src={Food7}
						alt='food7'
						className='w-full'
						style={{
							filter: `drop-shadow(10px 30px 40px black)`,
						}}
					/>
				</div>
			</section>

			{/* Footer */}
			<footer className=' flex flex-col py-10 pt-32'>
				<div className='flex items-center justify-center'>
					<div className='w-52 mb-20'>
						<LogoImage />
					</div>
				</div>
				<h2
					className='text-amber-400 mb-20 text-5xl font-bold text-center'
					style={{
						filter: `drop-shadow(0px 0px 10px black) drop-shadow(0 0 20px black)`,
					}}>
					The Meat Experience
				</h2>

				<div className='md:flex-row flex flex-col items-center justify-center gap-20'>
					<div className=' border-amber-400 border-8'>
						<h5 className='bg-amber-400 px-10 py-3 text-5xl font-bold text-center text-black uppercase'>
							OPEN
						</h5>
						<div className='p-4 text-2xl font-semibold text-white'>
							<p>Mon-Thurs: 12AM - 11PM</p>
							<p>Fri-Sun: 9AM - 12PM</p>
						</div>
					</div>
					<div className=''>
						<ul className='grid grid-cols-2 gap-5 text-xl text-white'>
							<li>Home</li>
							<li>Blog</li>
							<li>About</li>
							<li>Cookies</li>
							<li>Contact</li>
							<li>Site Map</li>
						</ul>
					</div>
				</div>

				<div className=' md:flex-row flex flex-col items-center gap-10 py-20'>
					<p className='md:pl-20 flex-1 text-4xl text-white'>Madison street,30 - City</p>
					<div className='flex items-center justify-center flex-1 gap-3'>
						<span className='bg-amber-400 w-14 h-14 flex items-center justify-center text-black rounded-lg'>
							<BsInstagram />
						</span>
						<span className='bg-amber-400 w-14 h-14 flex items-center justify-center text-black rounded-lg'>
							<BsFacebook />
						</span>
						<span className='bg-amber-400 w-14 h-14 flex items-center justify-center text-black rounded-lg'>
							<BsTwitter />
						</span>
						<span className='bg-amber-400 w-14 h-14 flex items-center justify-center text-black rounded-lg'>
							<BsYoutube />
						</span>
						<span className='text-amber-400 text-md '>@GRILL_HOUSE</span>
					</div>
				</div>
			</footer>
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
