import Image from 'next/image';

import { HiShoppingBag, HiArrowRight, HiStar } from 'react-icons/hi2';
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';
import BannerImage from 'public/assets/ultrahuman/bg-banner.jpg';
import RingImage from 'public/assets/ultrahuman/bg-ring.jpg';
import CardImage from 'public/assets/ultrahuman/card.jpg';
import SkullImage from 'public/assets/ultrahuman/skull.png';
import {
	animate,
	motion,
	useAnimationFrame,
	useMotionTemplate,
	useMotionValue,
	useMotionValueEvent,
	useScroll,
	useSpring,
	useTransform,
	useVelocity,
	wrap,
} from 'framer-motion';
import { ReactNode, useEffect, useRef } from 'react';
import { ParallaxSlider } from 'src/components/ultrahuman/ParallaxSliders';

const UltraHumanPage = () => {
	const ref = useRef<HTMLElement>(null);
	const { scrollY, scrollYProgress } = useScroll({
		target: ref,
		// offset: ['end end', 'start start'],
		offset: ['start end', 'end center'],
	});

	const transformedProg = useTransform(scrollYProgress, [0, 1], [0, 100]);
	const percentage1 = useMotionTemplate`${scrollYProgress}%`;
	const percentage2 = useMotionTemplate`${transformedProg}%`;
	const percentage3 = useMotionTemplate`${transformedProg}%`;
	const y = useMotionValue(-90);

	useMotionValueEvent(scrollY, 'change', cur => {
		if (cur > 40) {
			animate(y, 0, {
				type: 'tween',
				duration: 0.2,
			});
		} else {
			animate(y, -90, {
				type: 'tween',
				duration: 0.2,
			});
		}
	});

	return (
		<main className='bg-black'>
			<header className='h-14 lg:px-24 sticky top-0 z-10 flex items-center flex-1 px-10'>
				{/* overlay */}
				<motion.div
					className='bg-black w-full h-full absolute z-[-1] inset-0 backdrop-blur-3xl bg-opacity-60'
					style={{
						y,
					}}></motion.div>
				<div className='text-3xl font-extrabold text-white'>logo</div>
				<ul className='text-opacity-90 flex gap-6 ml-auto text-sm font-bold text-gray-400'>
					<li>Blog</li>
					<li>Maltahuman Ring</li>
					<li>Maltahuman M1</li>
					<li>Reviews</li>
					<li>Partnerships</li>
				</ul>
				<button className='ml-8 text-2xl text-white'>
					<HiShoppingBag />
				</button>

				{/* Learn More */}
			</header>
			<div className='bg-neutral-800'>
				{/* Notification Section */}
				<section>
					<p className='bg-neutral-800 w-full py-4 font-semibold text-center text-white'>
						Our clinical trials for M1 CGM metabolic health platform are in progress.{' '}
						<span className='text-sky-400 pl-2'>Learn More &#8594;</span>
					</p>
				</section>

				{/* Banner */}
				<section
					className='relative mb-8 text-center bg-black bg-center bg-no-repeat bg-cover'
					style={{
						backgroundImage: `url(${BannerImage.src})`,
					}}>
					<div className='md:py-44 lg:py-52 py-32'>
						<header className='mb-10 text-white'>
							<h1 className='py-3 text-5xl font-semibold'>Maltahuman M1</h1>
							<p>Supercharge your nutrition and exercise performance using glucose biomarkers</p>
						</header>
						<div className='mb-3'>
							<button className='px-10 py-3 bg-white rounded-full'>Join the waitlist</button>
						</div>
						<div className='text-white'>
							<a href='#'>Talk to a specialist &#8594;</a>
						</div>
					</div>
					<div className='backdrop-blur-2xl text-opacity-80 bg-opacity-20 absolute bottom-0 w-full py-3 text-center text-white bg-black'>
						<p className=''>
							Find your ideal fitness and nutrition plan.{' '}
							<a
								href='#'
								className='hover:translate-x-2 inline-block font-semibold transition translate-x-0 cursor-pointer'>
								Take the free test now &#8594;
							</a>
						</p>
					</div>
				</section>

				{/* Section 2 */}
				<section
					className='relative text-center bg-black bg-center bg-no-repeat bg-cover'
					style={{
						backgroundImage: `url(${RingImage.src})`,
					}}>
					<div className='md:py-44 py-32'>
						<header className='mb-10 text-white'>
							<h1 className='py-3 text-5xl font-semibold'>Maltahuman Ring</h1>
							<p>World's first metabolism tracking smart ring.</p>
						</header>
						<div className='mb-3'>
							<button className='px-10 py-3 bg-white rounded-full'>Pre-order now</button>
						</div>
						<div className='text-white'>
							<a href='#'>Learn more &#8594;</a>
						</div>
					</div>
				</section>
			</div>

			{/* Slider Section */}
			<div className='mb-10'>
				<section className='pt-28'>
					<header>
						<h2 className='py-10 text-5xl text-center text-white'>As featured in</h2>
					</header>
					<div className='h-128 grid grid-cols-2 gap-1 px-10'>
						{/* first */}
						<div className='border-neutral-800 text-neutral-400 flex flex-col items-center justify-center px-10 border-2'>
							<p className='text-3xl text-center'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, vero asperiores fugit optio
							</p>
							<h3 className='mt-10 text-5xl font-bold'>The Mango</h3>
						</div>

						{/* second */}
						<div className='border-neutral-800 text-neutral-400 flex flex-col items-center justify-center px-10 border-2'>
							<p className='text-3xl text-center'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, vero asperiores fugit optio
							</p>
							<h3 className='mt-10 text-5xl font-bold'>The Mango</h3>
						</div>
					</div>

					{/* indicator */}
					<div className='py-14 flex items-center justify-center gap-5 text-center'>
						<span className='w-3 h-3 bg-white rounded-full'></span>
						<span className='bg-neutral-600 w-3 h-3 rounded-full'></span>
						<span className='bg-neutral-600 w-3 h-3 rounded-full'></span>
						<span className='bg-neutral-600 w-3 h-3 rounded-full'></span>
					</div>
				</section>
			</div>

			{/* Insights Section */}
			<div className=''>
				<section className='px-10'>
					<header>
						<h2 className='py-10 text-5xl text-center text-white'>Deep Insights. Deeply trusted.</h2>
					</header>
					<p className='text-neutral-400 mb-20 text-xl leading-tight text-center'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum architecto aliquid rerum, aperiam
						asperiores blanditiis fuga nihil repudiandae quia laboriosam temporibus distinctio libero quod
						saepe harum, atque ea, delectus sed labore? Aut debitis amet ex repudiandae maxime, dolores
						totam. Quod inventore sit error doloribus molestias nam porro temporibus eum magni?
					</p>

					<div className='grid grid-cols-2'>
						{/* Appstore */}
						<div className='justify-items-center grid grid-rows-2 gap-3'>
							<div className='flex items-center gap-2 text-white'>
								<p className='text-7xl'>4.9</p>
								<div>
									<p className='text-2xl'>App Store</p>
									<p className='text-amber-500 flex text-3xl'>
										{Array(5)
											.fill(0)
											.map((i, idx) => (
												<HiStar key={idx} />
											))}
									</p>
								</div>
							</div>
							<button className='text-neutral-400 flex items-center px-6 py-3 text-2xl border-2 border-white rounded-full'>
								<HiShoppingBag />

								<span className='pl-3'>Download on AppStore</span>
							</button>
						</div>

						{/* Playstore */}
						<div className='justify-items-center grid grid-rows-2 gap-3'>
							<div className='flex items-center gap-2 text-white'>
								<p className='text-7xl'>4.9</p>
								<div>
									<p className='text-2xl'>App Store</p>
									<p className='text-amber-500 flex text-3xl'>
										{Array(5)
											.fill(0)
											.map((i, idx) => (
												<HiStar key={idx} />
											))}
									</p>
								</div>
							</div>
							<button className='text-neutral-400 flex items-center px-6 py-3 text-2xl border-2 border-white rounded-full'>
								<HiShoppingBag />

								<span className='pl-3'>Download on Playstore</span>
							</button>
						</div>
					</div>
				</section>
			</div>

			{/* Features and benefits */}
			<section className='grid gap-3 py-5 mb-20 overflow-hidden justify-items-center' ref={ref}>
				<ParallaxSlider baseVelocity={1} start={100} end={0}>
					{Array(6)
						.fill(0)
						.map((_, idx) => (
							<div key={idx} className='h-80 rounded-2xl flex-shrink-0 w-64 overflow-hidden'>
								<Image src={CardImage} className='object-cover w-full h-full' alt='Hello' />
							</div>
						))}
				</ParallaxSlider>
				<ParallaxSlider baseVelocity={1} start={-100} end={0}>
					{Array(6)
						.fill(0)
						.map((_, idx) => (
							<div key={idx} className='h-80 rounded-2xl flex-shrink-0 w-64 overflow-hidden'>
								<Image src={CardImage} className='object-cover w-full h-full' alt='Hello' />
							</div>
						))}
				</ParallaxSlider>
				<ParallaxSlider baseVelocity={1} start={100} end={0}>
					{Array(6)
						.fill(0)
						.map((_, idx) => (
							<div key={idx} className='h-80 rounded-2xl flex-shrink-0 w-64 overflow-hidden'>
								<Image src={CardImage} className='object-cover w-full h-full' alt='Hello' />
							</div>
						))}
				</ParallaxSlider>
			</section>

			{/* Stories Section */}
			{/* TODO: Implement Video Slider section */}
			<section className='text-center'>
				<div className='pb-10'>
					<header>
						<h2 className='py-10 text-6xl text-center text-white'>Real Cyborgs. Real Stories.</h2>
					</header>
					<button className='px-10 py-3 text-2xl text-white border-2 border-white rounded-full'>
						Get Started
					</button>
				</div>

				<div className='h-96 bg-red-500'></div>
			</section>

			{/* Meet section */}
			<section className='text-center'>
				<header>
					<h2 className='text-white py-5 text-5xl'>Meet our Medical and Sports Advisory Board</h2>
				</header>
				<p className='text-neutral-300 text-xl leading-none'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatem nobis aliquid
					sequi doloremque cupiditate nostrum odio enim autem praesentium.
				</p>
				<div className='my-10'>
					<button className='px-10 py-3 text-2xl text-white border-2 border-white rounded-full'>
						Learn about our clinical trials
					</button>
				</div>
			</section>

			{/* Notification */}
			<p className='backdrop-blur-lg bg-opacity-50 bg-neutral-800 w-full py-4 font-semibold text-center text-white sticky bottom-0'>
				Our clinical trials for M1 CGM metabolic health platform are in progress.{' '}
				<span className='text-sky-400 pl-2'>Learn More &#8594;</span>
			</p>
			{/* Footer */}
			<footer className='bg-neutral-900 px-20 pt-10'>
				{/* notification */}

				<div className='grid grid-cols-3'>
					<div className='grid grid-cols-2  gap-20 pb-20'>
						<div>
							<ul className='text-neutral-300 grid gap-2 text-sm'>
								<h4 className='text-white text-lg'>Company</h4>
								<FooterLink>About us</FooterLink>
								<FooterLink>Coaches</FooterLink>
								<FooterLink>Reviews</FooterLink>
								<FooterLink>Careers</FooterLink>
								<FooterLink>Partnerships</FooterLink>
								<FooterLink>Press</FooterLink>
								<FooterLink>Support</FooterLink>
								<FooterLink>Investor Relations</FooterLink>
							</ul>
						</div>
						<div>
							<ul className='text-neutral-300 grid gap-2 text-sm'>
								<h4 className='text-white text-lg'>Social</h4>
								<FooterLink>
									<BsTwitter />
									<span>Twitter</span>
								</FooterLink>
								<FooterLink>
									<BsFacebook />
									<span>Facebook</span>
								</FooterLink>
								<FooterLink>
									<BsInstagram />
									<span>Instagram</span>
								</FooterLink>
								<FooterLink>
									<BsLinkedin />
									<span>Linkedin</span>
								</FooterLink>
							</ul>
						</div>
					</div>
					<div className=''>
						<Image src={SkullImage} className='h-full object-cover w-full' alt={'skull logo'} />
					</div>
					<div>
						<h4 className='py-10 text-white text-xl'>Get The App Here</h4>
						<div className='flex gap-10'>
							<img src={appStoreLinkImg} />
							<img src={playStoreLinkImg} />
						</div>
					</div>
				</div>

				<div className='border-t-black border-t-2 py-5'>
					<p className='text-white text-xs'>
						Copyright 2020-2022 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, hic?
					</p>
					<p className='text-white text-xs pt-3'>
						<ul className='flex gap-5'>
							<li>
								<a href='#'>Terms of Sale</a>
							</li>
							<li>
								<a href='#'>Privacy Policy</a>
							</li>
							<li>
								<a href='#'>Terms of Use</a>
							</li>
						</ul>
					</p>
				</div>
			</footer>
		</main>
	);
};

const appStoreLinkImg =
	'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik0xMTAuMTM1IDBIOS41MzVjLS4zNjcgMC0uNzMgMC0xLjA5NS4wMDItLjMwNi4wMDItLjYxLjAwOC0uOTE5LjAxM0M2Ljg1LjAyMyA2LjE4LjA4MiA1LjUxNy4xOWE2LjY2NSA2LjY2NSAwIDAwLTEuOS42MjdBNi40MzggNi40MzggMCAwMC4xOTMgNS41MjFhMTIuOTkzIDEyLjk5MyAwIDAwLS4xNzkgMi4wMDJjLS4wMS4zMDctLjAxLjYxNS0uMDE1LjkyMVYzMS41NmMuMDA1LjMxLjAwNi42MS4wMTUuOTIxLjAwOC42NzEuMDY4IDEuMzQuMTggMi4wMDIuMTEuNjYzLjMyIDEuMzA2LjYyNCAxLjkwNWE2LjIgNi4yIDAgMDAxLjE3OSAxLjYxNCA2LjMgNi4zIDAgMDAxLjYxOCAxLjE3OSA2LjcgNi43IDAgMDAxLjkwMS42M2MuNjYzLjExIDEuMzMzLjE2OCAyLjAwNC4xNzcuMzEuMDA3LjYxMy4wMTEuOTE5LjAxMS4zNjYuMDAyLjcyOC4wMDIgMS4wOTUuMDAyaDEwMC42Yy4zNiAwIC43MjQgMCAxLjA4NC0uMDAyLjMwNCAwIC42MTctLjAwNC45MjItLjAxLjY3LS4wMSAxLjMzOC0uMDY4IDItLjE3OGE2LjgwNCA2LjgwNCAwIDAwMS45MDgtLjYzQTYuMjc3IDYuMjc3IDAgMDAxMTcuNjY2IDM4YTYuMzk1IDYuMzk1IDAgMDAxLjE4Mi0xLjYxNGMuMzAyLS42LjUxLTEuMjQyLjYxOS0xLjkwNS4xMTEtLjY2MS4xNzMtMS4zMy4xODUtMi4wMDIuMDA0LS4zMS4wMDQtLjYxLjAwNC0uOTIxLjAwOC0uMzY0LjAwOC0uNzI1LjAwOC0xLjA5NFY5LjUzNmMwLS4zNjYgMC0uNzMtLjAwOC0xLjA5MiAwLS4zMDYgMC0uNjE0LS4wMDQtLjkyYTEzLjUwNyAxMy41MDcgMCAwMC0uMTg1LTIuMDAzIDYuNjE4IDYuNjE4IDAgMDAtLjYyLTEuOTAzIDYuNDY2IDYuNDY2IDAgMDAtMi43OTgtMi44IDYuNzY4IDYuNzY4IDAgMDAtMS45MDgtLjYyN2MtLjY2MS0uMTEtMS4zMy0uMTY5LTItLjE3Ni0uMzA1LS4wMDUtLjYxOC0uMDExLS45MjItLjAxMy0uMzYtLjAwMi0uNzI1LS4wMDItMS4wODQtLjAwMnoiIGZpbGw9IiNBNkE2QTYiLz48cGF0aCBkPSJNOC40NDUgMzkuMTI1Yy0uMzA1IDAtLjYwMi0uMDA0LS45MDQtLjAxYTEyLjY4NyAxMi42ODcgMCAwMS0xLjg3LS4xNjQgNS44ODQgNS44ODQgMCAwMS0xLjY1Ni0uNTQ4IDUuNDA2IDUuNDA2IDAgMDEtMS4zOTctMS4wMTYgNS4zMiA1LjMyIDAgMDEtMS4wMi0xLjM5NyA1LjcyMiA1LjcyMiAwIDAxLS41NDQtMS42NTcgMTIuNDE0IDEyLjQxNCAwIDAxLS4xNjYtMS44NzVjLS4wMDctLjIxLS4wMTUtLjkxMy0uMDE1LS45MTN2LTIzLjFzLjAwOS0uNjkyLjAxNS0uODk1YTEyLjM3IDEyLjM3IDAgMDEuMTY1LTEuODcyIDUuNzU1IDUuNzU1IDAgMDEuNTQ0LTEuNjYyYy4yNi0uNTE4LjYwMy0uOTkgMS4wMTUtMS4zOThBNS41NjUgNS41NjUgMCAwMTUuNjY3IDEuMDVjLjYyLS4xIDEuMjQ4LS4xNTUgMS44NzYtLjE2M2wuOTAyLS4wMTJoMTAyLjc2OWwuOTEzLjAxM2MuNjIzLjAwNyAxLjI0NC4wNjEgMS44NTguMTYyYTUuOTM4IDUuOTM4IDAgMDExLjY3MS41NDggNS41OTQgNS41OTQgMCAwMTIuNDE1IDIuNDJjLjI2LjUyLjQ0MSAxLjA3Ni41MzUgMS42NDkuMTA0LjYyNC4xNjIgMS4yNTUuMTc0IDEuODg3LjAwMy4yODMuMDAzLjU4OC4wMDMuODkuMDA4LjM3NS4wMDguNzMyLjAwOCAxLjA5MnYyMC45MjljMCAuMzYzIDAgLjcxOC0uMDA4IDEuMDc1IDAgLjMyNSAwIC42MjMtLjAwNC45My0uMDExLjYyLS4wNjkgMS4yNC0uMTcgMS44NTNhNS43MzkgNS43MzkgMCAwMS0uNTQgMS42NyA1LjQ4IDUuNDggMCAwMS0xLjAxNiAxLjM4NiA1LjQxMyA1LjQxMyAwIDAxLTEuNCAxLjAyMiA1Ljg2MiA1Ljg2MiAwIDAxLTEuNjY4LjU1Yy0uNjE4LjEwMS0xLjI0My4xNTYtMS44NjkuMTYzLS4yOTMuMDA3LS42LjAxMS0uODk3LjAxMWwtMS4wODQuMDAyLTEwMS42OS0uMDAyeiIgZmlsbD0iIzAwMCIvPjxwYXRoIGQ9Ik0yNC43NjkgMjAuM2E0Ljk0OSA0Ljk0OSAwIDAxMi4zNTYtNC4xNTEgNS4wNjYgNS4wNjYgMCAwMC0zLjk5LTIuMTU4Yy0xLjY4LS4xNzYtMy4zMDggMS4wMDUtNC4xNjQgMS4wMDUtLjg3MiAwLTIuMTktLjk4OC0zLjYwOC0uOTU4YTUuMzE1IDUuMzE1IDAgMDAtNC40NzMgMi43MjhjLTEuOTM0IDMuMzQ4LS40OTEgOC4yNjkgMS4zNjEgMTAuOTc2LjkyNyAxLjMyNSAyLjAxIDIuODA1IDMuNDI4IDIuNzUzIDEuMzg3LS4wNTggMS45MDUtLjg4NSAzLjU4LS44ODUgMS42NTggMCAyLjE0NC44ODUgMy41OS44NTIgMS40ODktLjAyNSAyLjQyNi0xLjMzMiAzLjMyLTIuNjdhMTAuOTYyIDEwLjk2MiAwIDAwMS41Mi0zLjA5MiA0Ljc4MiA0Ljc4MiAwIDAxLTIuOTItNC40em0tMi43MzItOC4wOWE0Ljg3MiA0Ljg3MiAwIDAwMS4xMTUtMy40OSA0Ljk1NyA0Ljk1NyAwIDAwLTMuMjA4IDEuNjYgNC42MzYgNC42MzYgMCAwMC0xLjE0NCAzLjM2IDQuMSA0LjEgMCAwMDMuMjM3LTEuNTN6bTIwLjI2NSAxNC45M0gzNy41N2wtMS4xMzcgMy4zNTZoLTIuMDA1bDQuNDg0LTEyLjQxOGgyLjA4M2w0LjQ4MyAxMi40MThoLTIuMDM5bC0xLjEzNi0zLjM1NnptLTQuMjQzLTEuNTVoMy43NTJsLTEuODUtNS40NDZoLS4wNTFsLTEuODUgNS40NDd6bTE3LjEwMS4zOGMwIDIuODEzLTEuNTA2IDQuNjItMy43NzkgNC42MmEzLjA3IDMuMDcgMCAwMS0yLjg0OC0xLjU4M2gtLjA0M3Y0LjQ4NGgtMS44NlYyMS40NDJoMS44djEuNTA2aC4wMzNhMy4yMTIgMy4yMTIgMCAwMTIuODgzLTEuNmMyLjI5OCAwIDMuODEzIDEuODE2IDMuODEzIDQuNjIyem0tMS45MSAwYzAtMS44MzMtLjk0OC0zLjAzOC0yLjM5My0zLjAzOC0xLjQyIDAtMi4zNzUgMS4yMy0yLjM3NSAzLjAzOCAwIDEuODI0Ljk1NSAzLjA0NiAyLjM3NSAzLjA0NiAxLjQ0NSAwIDIuMzkzLTEuMTk3IDIuMzkzLTMuMDQ2em0xMS44NzUgMGMwIDIuODEzLTEuNTA2IDQuNjItMy43NzkgNC42MmEzLjA3IDMuMDcgMCAwMS0yLjg0OC0xLjU4M2gtLjA0M3Y0LjQ4NGgtMS44NTlWMjEuNDQyaDEuNzk5djEuNTA2aC4wMzRhMy4yMTIgMy4yMTIgMCAwMTIuODgzLTEuNmMyLjI5OCAwIDMuODEzIDEuODE2IDMuODEzIDQuNjIyem0tMS45MSAwYzAtMS44MzMtLjk0OC0zLjAzOC0yLjM5My0zLjAzOC0xLjQyIDAtMi4zNzUgMS4yMy0yLjM3NSAzLjAzOCAwIDEuODI0Ljk1NSAzLjA0NiAyLjM3NSAzLjA0NiAxLjQ0NSAwIDIuMzkyLTEuMTk3IDIuMzkyLTMuMDQ2em04LjQ5NSAxLjA2NmMuMTM4IDEuMjMyIDEuMzM0IDIuMDQgMi45NyAyLjA0IDEuNTY2IDAgMi42OTMtLjgwOCAyLjY5My0xLjkxOSAwLS45NjQtLjY4LTEuNTQtMi4yOS0xLjkzNmwtMS42MDktLjM4OGMtMi4yOC0uNTUtMy4zMzktMS42MTctMy4zMzktMy4zNDggMC0yLjE0MiAxLjg2Ny0zLjYxNCA0LjUxOS0zLjYxNCAyLjYyNCAwIDQuNDIzIDEuNDcyIDQuNDgzIDMuNjE0aC0xLjg3NmMtLjExMi0xLjIzOS0xLjEzNi0xLjk4Ny0yLjYzNC0xLjk4Ny0xLjQ5NyAwLTIuNTIxLjc1Ny0yLjUyMSAxLjg1OCAwIC44NzguNjU0IDEuMzk1IDIuMjU1IDEuNzlsMS4zNjguMzM2YzIuNTQ4LjYwMyAzLjYwNiAxLjYyNiAzLjYwNiAzLjQ0MyAwIDIuMzIzLTEuODUgMy43NzgtNC43OTMgMy43NzgtMi43NTQgMC00LjYxNC0xLjQyLTQuNzM0LTMuNjY3aDEuOTAyek04My4zNDYgMTkuM3YyLjE0MmgxLjcyMnYxLjQ3MmgtMS43MjJ2NC45OTFjMCAuNzc2LjM0NSAxLjEzNyAxLjEwMiAxLjEzNy4yMDQtLjAwNC40MDgtLjAxOC42MTEtLjA0M3YxLjQ2M2MtLjM0LjA2My0uNjg2LjA5Mi0xLjAzMi4wODYtMS44MzMgMC0yLjU0OC0uNjg5LTIuNTQ4LTIuNDQ1di01LjE4OWgtMS4zMTZ2LTEuNDcyaDEuMzE2VjE5LjNoMS44Njd6bTIuNzE5IDYuNjdjMC0yLjg0OSAxLjY3OC00LjYzOSA0LjI5NC00LjYzOSAyLjYyNSAwIDQuMjk1IDEuNzkgNC4yOTUgNC42MzkgMCAyLjg1Ni0xLjY2MSA0LjYzOC00LjI5NSA0LjYzOC0yLjYzMyAwLTQuMjk0LTEuNzgyLTQuMjk0LTQuNjM4em02LjY5NSAwYzAtMS45NTQtLjg5NS0zLjEwOC0yLjQwMS0zLjEwOC0xLjUwNiAwLTIuNCAxLjE2Mi0yLjQgMy4xMDggMCAxLjk2Mi44OTQgMy4xMDYgMi40IDMuMTA2IDEuNTA2IDAgMi40MDEtMS4xNDQgMi40MDEtMy4xMDZ6bTMuNDI2LTQuNTI4aDEuNzczdjEuNTQxaC4wNDNhMi4xNiAyLjE2IDAgMDEyLjE3Ny0xLjYzNWMuMjE0LS4wMDEuNDI4LjAyMi42MzcuMDY5djEuNzM4YTIuNTk4IDIuNTk4IDAgMDAtLjgzNS0uMTEyIDEuODczIDEuODczIDAgMDAtMS45MzcgMi4wODN2NS4zN2gtMS44NTh2LTkuMDU0em0xMy4xOTggNi4zOTVjLS4yNSAxLjY0My0xLjg1IDIuNzcxLTMuODk4IDIuNzcxLTIuNjM0IDAtNC4yNjktMS43NjQtNC4yNjktNC41OTUgMC0yLjg0IDEuNjQ0LTQuNjgyIDQuMTktNC42ODIgMi41MDYgMCA0LjA4IDEuNzIgNC4wOCA0LjQ2NnYuNjM3aC02LjM5NHYuMTEyYTIuMzU4IDIuMzU4IDAgMDAyLjQzNiAyLjU2NCAyLjA0OCAyLjA0OCAwIDAwMi4wOS0xLjI3M2gxLjc2NXptLTYuMjgyLTIuNzAyaDQuNTI2YTIuMTc3IDIuMTc3IDAgMDAtMi4yMi0yLjI5OCAyLjI5MiAyLjI5MiAwIDAwLTIuMzA2IDIuMjk4ek0zNy44MjYgOC43MzFhMi42NCAyLjY0IDAgMDEyLjgwOCAyLjk2NWMwIDEuOTA2LTEuMDMgMy4wMDItMi44MDggMy4wMDJoLTIuMTU1VjguNzNoMi4xNTV6bS0xLjIyOCA1LjEyM2gxLjEyNWExLjg3NiAxLjg3NiAwIDAwMS45NjctMi4xNDYgMS44ODEgMS44ODEgMCAwMC0xLjk2Ny0yLjEzNGgtMS4xMjV2NC4yOHptNS4wODItMS40MWEyLjEzMyAyLjEzMyAwIDExNC4yNDggMCAyLjEzNCAyLjEzNCAwIDExLTQuMjQ3IDB6bTMuMzM0IDBjMC0uOTc2LS40MzktMS41NDctMS4yMDgtMS41NDctLjc3MyAwLTEuMjA3LjU3MS0xLjIwNyAxLjU0NyAwIC45ODQuNDM0IDEuNTUgMS4yMDcgMS41NS43NyAwIDEuMjA4LS41NyAxLjIwOC0xLjU1em02LjU1OSAyLjI1NGgtLjkyMmwtLjkzLTMuMzE3aC0uMDdsLS45MjcgMy4zMTdoLS45MTNsLTEuMjQyLTQuNTAzaC45MDJsLjgwNiAzLjQzNmguMDY3bC45MjYtMy40MzZoLjg1MmwuOTI2IDMuNDM2aC4wN2wuODAzLTMuNDM2aC44ODl6bTIuMjgxLTQuNTAzaC44NTV2LjcxNWguMDY2YTEuMzQ3IDEuMzQ3IDAgMDExLjM0NC0uODAyIDEuNDY1IDEuNDY1IDAgMDExLjU1OSAxLjY3NXYyLjkxNWgtLjg4OXYtMi42OTJjMC0uNzI0LS4zMTQtMS4wODQtLjk3Mi0xLjA4NGExLjAzMyAxLjAzMyAwIDAwLTEuMDc1IDEuMTQxdjIuNjM1aC0uODg4di00LjUwM3ptNS4yNC0xLjc1OGguODg4djYuMjZoLS44ODh6bTIuMTI0IDQuMDA3YTIuMTMzIDIuMTMzIDAgMTE0LjI0NyAwIDIuMTM0IDIuMTM0IDAgMTEtNC4yNDcgMHptMy4zMzMgMGMwLS45NzYtLjQzOS0xLjU0Ny0xLjIwOC0xLjU0Ny0uNzczIDAtMS4yMDcuNTcxLTEuMjA3IDEuNTQ3IDAgLjk4NC40MzQgMS41NSAxLjIwNyAxLjU1Ljc3IDAgMS4yMDgtLjU3IDEuMjA4LTEuNTV6bTEuODQ5Ljk4YzAtLjgxLjYwNC0xLjI3OCAxLjY3Ni0xLjM0NGwxLjIyLS4wN3YtLjM4OWMwLS40NzUtLjMxNS0uNzQ0LS45MjItLjc0NC0uNDk3IDAtLjg0LjE4Mi0uOTM5LjVoLS44NmMuMDktLjc3My44MTgtMS4yNyAxLjg0LTEuMjcgMS4xMjggMCAxLjc2NS41NjMgMS43NjUgMS41MTR2My4wNzdoLS44NTV2LS42MzNoLS4wN2ExLjUxNyAxLjUxNyAwIDAxLTEuMzUzLjcwNyAxLjM2IDEuMzYgMCAwMS0xLjUwMS0xLjM0OHptMi44OTUtLjM4NHYtLjM3N2wtMS4xLjA3Yy0uNjIuMDQyLS45LjI1My0uOS42NSAwIC40MDUuMzUxLjY0LjgzNC42NGExLjA2MiAxLjA2MiAwIDAwMS4xNjYtLjk4M3ptMi4wNTMtLjU5NmMwLTEuNDIzLjczMi0yLjMyNCAxLjg3LTIuMzI0YTEuNDg0IDEuNDg0IDAgMDExLjM4Ljc5aC4wNjdWOC40MzdoLjg4OHY2LjI2aC0uODUxdi0uNzFoLS4wN2ExLjU2MyAxLjU2MyAwIDAxLTEuNDE1Ljc4NWMtMS4xNDUgMC0xLjg2OS0uOTAxLTEuODY5LTIuMzI4em0uOTE4IDBjMCAuOTU1LjQ1IDEuNTMgMS4yMDMgMS41My43NSAwIDEuMjEyLS41ODMgMS4yMTItMS41MjYgMC0uOTM4LS40NjgtMS41My0xLjIxMi0xLjUzLS43NDggMC0xLjIwMy41OC0xLjIwMyAxLjUyNnptNi45NjQgMGEyLjEzMyAyLjEzMyAwIDExNC4yNDcgMCAyLjEzNCAyLjEzNCAwIDExLTQuMjQ3IDB6bTMuMzMzIDBjMC0uOTc2LS40MzgtMS41NDctMS4yMDgtMS41NDctLjc3MiAwLTEuMjA3LjU3MS0xLjIwNyAxLjU0NyAwIC45ODQuNDM1IDEuNTUgMS4yMDcgMS41NS43NyAwIDEuMjA4LS41NyAxLjIwOC0xLjU1em0yLjEwNy0yLjI0OWguODU1di43MTVoLjA2NmMuMjMxLS41MjcuNzctLjg0OSAxLjM0NC0uODAyYTEuNDY1IDEuNDY1IDAgMDExLjU1OSAxLjY3NXYyLjkxNWgtLjg4OXYtMi42OTJjMC0uNzI0LS4zMTQtMS4wODQtLjk3Mi0xLjA4NGExLjAzMyAxLjAzMyAwIDAwLTEuMDc1IDEuMTQxdjIuNjM1aC0uODg5di00LjUwM3ptOC44NDUtMS4xMjF2MS4xNDFoLjk3NnYuNzQ5aC0uOTc2djIuMzE1YzAgLjQ3Mi4xOTUuNjc5LjYzNy42NzkuMTEzIDAgLjIyNi0uMDA4LjMzOS0uMDIxdi43NGMtLjE2LjAyOS0uMzIyLjA0NC0uNDg0LjA0Ni0uOTg4IDAtMS4zODEtLjM0OC0xLjM4MS0xLjIxNnYtMi41NDNoLS43MTV2LS43NDloLjcxNVY5LjA3NGguODl6bTIuMTktLjYzN2guODh2Mi40ODFoLjA3YTEuMzg2IDEuMzg2IDAgMDExLjM3NC0uODA2IDEuNDgzIDEuNDgzIDAgMDExLjU1IDEuNjc5djIuOTA3aC0uODg5VjEyLjAxYzAtLjcyLS4zMzUtMS4wODQtLjk2My0xLjA4NGExLjA1MiAxLjA1MiAwIDAwLTEuMTM0IDEuMTQydjIuNjNoLS44ODhWOC40Mzd6bTkuMDU2IDUuMDQ1YTEuODI4IDEuODI4IDAgMDEtMS45NSAxLjMwMyAyLjA0NSAyLjA0NSAwIDAxLTIuMDgxLTIuMzI1IDIuMDc3IDIuMDc3IDAgMDEyLjA3Ni0yLjM1MmMxLjI1MyAwIDIuMDA5Ljg1NiAyLjAwOSAyLjI3di4zMWgtMy4xOHYuMDVhMS4xOSAxLjE5IDAgMDAxLjIgMS4yOSAxLjA4IDEuMDggMCAwMDEuMDctLjU0NmguODU2em0tMy4xMjYtMS40NTFoMi4yNzVhMS4wODYgMS4wODYgMCAwMC0xLjEwOS0xLjE2NyAxLjE1MiAxLjE1MiAwIDAwLTEuMTY2IDEuMTY3eiIgZmlsbD0iI0ZGRiIvPjwvZz48L3N2Zz4=';
const playStoreLinkImg =
	'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM1IiBoZWlnaHQ9IjQwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxsaW5lYXJHcmFkaWVudCB4MT0iNjEuMDI3JSIgeTE9IjQuOTQ3JSIgeDI9IjI2LjUlIiB5Mj0iNzEuOTE2JSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiMwMEEwRkYiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDBBMUZGIiBvZmZzZXQ9Ii42NTclIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzAwQkVGRiIgb2Zmc2V0PSIyNi4wMSUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDBEMkZGIiBvZmZzZXQ9IjUxLjIyJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMERGRkYiIG9mZnNldD0iNzYuMDQlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzAwRTNGRiIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjEwNy42MjIlIiB5MT0iNTAuMDE2JSIgeDI9Ii0xMzAuNTM2JSIgeTI9IjUwLjAxNiUiIGlkPSJiIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZFMDAwIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGQkQwMCIgb2Zmc2V0PSI0MC44NyUiLz48c3RvcCBzdG9wLWNvbG9yPSJvcmFuZ2UiIG9mZnNldD0iNzcuNTQlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGOUMwMCIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9Ijg2LjI1MyUiIHkxPSIzMC44OTclIiB4Mj0iLTUwLjE4OCUiIHkyPSIxMzYuMDgxJSIgaWQ9ImMiPjxzdG9wIHN0b3AtY29sb3I9IiNGRjNBNDQiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjQzMxMTYyIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iLTE4Ljc3JSIgeTE9Ii0xMS44MzIlIiB4Mj0iNDIuMTIlIiB5Mj0iMzUuMDgxJSIgaWQ9ImQiPjxzdG9wIHN0b3AtY29sb3I9IiMzMkEwNzEiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMkRBNzcxIiBvZmZzZXQ9IjYuODUlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzE1Q0Y3NCIgb2Zmc2V0PSI0Ny42MiUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDZFNzc1IiBvZmZzZXQ9IjgwLjA5JSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMEYwNzYiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik0xMzAgNDBINWMtMi43NSAwLTUtMi4yNS01LTVWNWMwLTIuNzUgMi4yNS01IDUtNWgxMjVjMi43NSAwIDUgMi4yNSA1IDV2MzBjMCAyLjc1LTIuMjUgNS01IDV6IiBmaWxsPSIjMDAwIi8+PHBhdGggZD0iTTEzMCAuOGE0LjIgNC4yIDAgMDE0LjIgNC4ydjMwYTQuMiA0LjIgMCAwMS00LjIgNC4ySDVBNC4yIDQuMiAwIDAxLjggMzVWNUE0LjIgNC4yIDAgMDE1IC44aDEyNW0wLS44SDVDMi4yNSAwIDAgMi4yNSAwIDV2MzBjMCAyLjc1IDIuMjUgNSA1IDVoMTI1YzIuNzUgMCA1LTIuMjUgNS01VjVjMC0yLjc1LTIuMjUtNS01LTV6IiBmaWxsPSIjQTZBNkE2Ii8+PHBhdGggZD0iTTQ3LjQyIDEwLjI0YzAgLjg0LS4yNSAxLjUxLS43NSAyLS41Ni41OS0xLjMuODktMi4yLjg5LS44NyAwLTEuNi0uMy0yLjIxLS45LS42MS0uNi0uOTEtMS4zNS0uOTEtMi4yMyAwLS44OS4zLTEuNjMuOTEtMi4yMy42MS0uNiAxLjM0LS45IDIuMjEtLjkuNDMgMCAuODQuMDggMS4yMy4yNS4zOS4xNy43LjM5Ljk0LjY3bC0uNTMuNTNjLS40LS40Ny0uOTQtLjcxLTEuNjQtLjcxLS42MyAwLTEuMTguMjItMS42NC42Ny0uNDYuNDQtLjY5IDEuMDItLjY5IDEuNzNzLjIzIDEuMjkuNjkgMS43M2MuNDYuNDQgMS4wMS42NyAxLjY0LjY3LjY3IDAgMS4yMy0uMjIgMS42OC0uNjcuMjktLjI5LjQ2LS43LjUtMS4yMmgtMi4xOFY5LjhoMi45MWMuMDIuMTUuMDQuMy4wNC40NHptNC42MS0yLjVINDkuM3YxLjloMi40NnYuNzJINDkuM3YxLjloMi43M1YxM2gtMy41VjdoMy41di43NHpNNTUuMjggMTNoLS43N1Y3Ljc0aC0xLjY4VjdoNC4xMnYuNzRoLTEuNjhWMTN6bTQuNjYgMFY3aC43N3Y2em00LjE5IDBoLS43N1Y3Ljc0aC0xLjY4VjdoNC4xMnYuNzRoLTEuNjhWMTN6bTkuNDgtLjc4Yy0uNTkuNjEtMS4zMi45MS0yLjIuOTEtLjg4IDAtMS42MS0uMy0yLjItLjkxLS41OS0uNjEtLjg4LTEuMzUtLjg4LTIuMjIgMC0uODcuMjktMS42Mi44OC0yLjIyLjU5LS42MSAxLjMyLS45MSAyLjItLjkxLjg3IDAgMS42LjMgMi4yLjkxLjU5LjYxLjg5IDEuMzUuODkgMi4yMi0uMDEuODgtLjMgMS42Mi0uODkgMi4yMnptLTMuODMtLjVjLjQ0LjQ1Ljk5LjY3IDEuNjMuNjcuNjQgMCAxLjE5LS4yMiAxLjYzLS42Ny40NC0uNDUuNjctMS4wMi42Ny0xLjcycy0uMjItMS4yNy0uNjctMS43MmMtLjQ0LS40NS0uOTktLjY3LTEuNjMtLjY3LS42NCAwLTEuMTkuMjItMS42My42Ny0uNDQuNDUtLjY3IDEuMDItLjY3IDEuNzJzLjIzIDEuMjcuNjcgMS43MnptNS44IDEuMjhWN2guOTRsMi45MiA0LjY3aC4wM2wtLjAzLTEuMTZWN2guNzd2NmgtLjhsLTMuMDUtNC44OWgtLjAzbC4wMyAxLjE2VjEzeiIgZmlsbD0iI0ZGRiIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9Ii4yIi8+PHBhdGggZD0iTTY4LjE0IDIxLjc1Yy0yLjM1IDAtNC4yNyAxLjc5LTQuMjcgNC4yNSAwIDIuNDUgMS45MiA0LjI1IDQuMjcgNC4yNSAyLjM1IDAgNC4yNy0xLjggNC4yNy00LjI1IDAtMi40Ni0xLjkyLTQuMjUtNC4yNy00LjI1em0wIDYuODNjLTEuMjkgMC0yLjQtMS4wNi0yLjQtMi41OCAwLTEuNTMgMS4xMS0yLjU4IDIuNC0yLjU4IDEuMjkgMCAyLjQgMS4wNSAyLjQgMi41OCAwIDEuNTItMS4xMiAyLjU4LTIuNCAyLjU4em0tOS4zMi02LjgzYy0yLjM1IDAtNC4yNyAxLjc5LTQuMjcgNC4yNSAwIDIuNDUgMS45MiA0LjI1IDQuMjcgNC4yNSAyLjM1IDAgNC4yNy0xLjggNC4yNy00LjI1IDAtMi40Ni0xLjkyLTQuMjUtNC4yNy00LjI1em0wIDYuODNjLTEuMjkgMC0yLjQtMS4wNi0yLjQtMi41OCAwLTEuNTMgMS4xMS0yLjU4IDIuNC0yLjU4IDEuMjkgMCAyLjQgMS4wNSAyLjQgMi41OCAwIDEuNTItMS4xMSAyLjU4LTIuNCAyLjU4em0tMTEuMDgtNS41MnYxLjhoNC4zMmMtLjEzIDEuMDEtLjQ3IDEuNzYtLjk4IDIuMjctLjYzLjYzLTEuNjEgMS4zMi0zLjMzIDEuMzItMi42NiAwLTQuNzQtMi4xNC00Ljc0LTQuOCAwLTIuNjYgMi4wOC00LjggNC43NC00LjggMS40MyAwIDIuNDguNTYgMy4yNSAxLjI5bDEuMjctMS4yN2MtMS4wOC0xLjAzLTIuNTEtMS44Mi00LjUzLTEuODItMy42NCAwLTYuNyAyLjk2LTYuNyA2LjYxIDAgMy42NCAzLjA2IDYuNjEgNi43IDYuNjEgMS45NyAwIDMuNDUtLjY0IDQuNjEtMS44NSAxLjE5LTEuMTkgMS41Ni0yLjg3IDEuNTYtNC4yMiAwLS40Mi0uMDMtLjgxLS4xLTEuMTNoLTYuMDd2LS4wMXptNDUuMzEgMS40Yy0uMzUtLjk1LTEuNDMtMi43MS0zLjY0LTIuNzEtMi4xOSAwLTQuMDEgMS43Mi00LjAxIDQuMjUgMCAyLjM4IDEuOCA0LjI1IDQuMjIgNC4yNSAxLjk1IDAgMy4wOC0xLjE5IDMuNTQtMS44OGwtMS40NS0uOTdjLS40OC43MS0xLjE0IDEuMTgtMi4wOSAxLjE4cy0xLjYzLS40NC0yLjA2LTEuMjlsNS42OS0yLjM1LS4yLS40OHptLTUuOCAxLjQyYy0uMDUtMS42NCAxLjI3LTIuNDggMi4yMi0yLjQ4Ljc0IDAgMS4zNy4zNyAxLjU4LjlsLTMuOCAxLjU4ek04Mi42MyAzMGgxLjg3VjE3LjVoLTEuODdWMzB6bS0zLjA2LTcuM2gtLjA3Yy0uNDItLjUtMS4yMi0uOTUtMi4yNC0uOTUtMi4xMyAwLTQuMDggMS44Ny00LjA4IDQuMjcgMCAyLjM4IDEuOTUgNC4yNCA0LjA4IDQuMjQgMS4wMSAwIDEuODItLjQ1IDIuMjQtLjk3aC4wNnYuNjFjMCAxLjYzLS44NyAyLjUtMi4yNyAyLjUtMS4xNCAwLTEuODUtLjgyLTIuMTQtMS41MWwtMS42My42OGMuNDcgMS4xMyAxLjcxIDIuNTEgMy43NyAyLjUxIDIuMTkgMCA0LjA0LTEuMjkgNC4wNC00LjQzdi03LjY0aC0xLjc3di42OWguMDF6bS0yLjE1IDUuODhjLTEuMjkgMC0yLjM3LTEuMDgtMi4zNy0yLjU2IDAtMS41IDEuMDgtMi41OSAyLjM3LTIuNTkgMS4yNyAwIDIuMjcgMS4xIDIuMjcgMi41OS4wMSAxLjQ4LS45OSAyLjU2LTIuMjcgMi41NnptMjQuMzktMTEuMDhoLTQuNDdWMzBoMS44N3YtNC43NGgyLjYxYzIuMDcgMCA0LjEtMS41IDQuMS0zLjg4cy0yLjA1LTMuODgtNC4xMS0zLjg4em0uMDQgNi4wMkg5OS4ydi00LjI5aDIuNjVjMS40IDAgMi4xOSAxLjE2IDIuMTkgMi4xNCAwIC45OC0uNzkgMi4xNS0yLjE5IDIuMTV6bTExLjU0LTEuNzljLTEuMzUgMC0yLjc1LjYtMy4zMyAxLjkxbDEuNjYuNjljLjM1LS42OSAxLjAxLS45MiAxLjctLjkyLjk2IDAgMS45NS41OCAxLjk2IDEuNjF2LjEzYy0uMzQtLjE5LTEuMDYtLjQ4LTEuOTUtLjQ4LTEuNzkgMC0zLjYuOTgtMy42IDIuODEgMCAxLjY3IDEuNDYgMi43NSAzLjEgMi43NSAxLjI1IDAgMS45NS0uNTYgMi4zOC0xLjIyaC4wNnYuOTdoMS44di00Ljc5Yy4wMS0yLjIyLTEuNjUtMy40Ni0zLjc4LTMuNDZ6bS0uMjMgNi44NWMtLjYxIDAtMS40Ni0uMzEtMS40Ni0xLjA2IDAtLjk2IDEuMDYtMS4zMyAxLjk4LTEuMzMuODIgMCAxLjIxLjE4IDEuNy40MmEyLjI1NyAyLjI1NyAwIDAxLTIuMjIgMS45N3pNMTIzLjc0IDIybC0yLjE0IDUuNDJoLS4wNkwxMTkuMzIgMjJoLTIuMDFsMy4zMyA3LjU4LTEuOSA0LjIxaDEuOTVMMTI1LjgyIDIyaC0yLjA4em0tMTYuOCA4aDEuODdWMTcuNWgtMS44N1YzMHoiIGZpbGw9IiNGRkYiLz48cGF0aCBkPSJNMS40NC41NGMtLjI5LjMxLS40Ni43OS0uNDYgMS40djIyLjEyYzAgLjYyLjE3IDEuMS40NiAxLjRsLjA3LjA3TDEzLjkgMTMuMTV2LS4zTDEuNTEuNDdsLS4wNy4wN3oiIGZpbGw9InVybCgjYSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkgNykiLz48cGF0aCBkPSJNMTguMDMgMTcuMjhsLTQuMTMtNC4xM3YtLjNsNC4xMy00LjEzLjA5LjA1IDQuODkgMi43OGMxLjQuNzkgMS40IDIuMDkgMCAyLjg5bC00Ljg5IDIuNzgtLjA5LjA2eiIgZmlsbD0idXJsKCNiKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOSA3KSIvPjxwYXRoIGQ9Ik0xOC4xMiAxNy4yMkwxMy45IDEzIDEuNDQgMjUuNDZjLjQ2LjQ5IDEuMjIuNTUgMi4wOC4wNmwxNC42LTguMyIgZmlsbD0idXJsKCNjKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOSA3KSIvPjxwYXRoIGQ9Ik0xOC4xMiA4Ljc4TDMuNTEuNDhDMi42NS0uMDEgMS44OS4wNSAxLjQzLjU0TDEzLjkgMTNsNC4yMi00LjIyeiIgZmlsbD0idXJsKCNkKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOSA3KSIvPjxnIGZpbGw9IiMwMDAiPjxwYXRoIGQ9Ik0yNy4wMyAyNC4xM2wtMTQuNTIgOC4yNWMtLjgxLjQ2LTEuNTQuNDMtMiAuMDFsLS4wNy4wNy4wNy4wN2MuNDcuNDIgMS4xOS40NSAyLS4wMWwxNC42MS04LjMtLjA5LS4wOXoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggZD0iTTEwLjQ0IDMyLjMyYy0uMjktLjMxLS40Ni0uNzktLjQ2LTEuNHYuMTVjMCAuNjIuMTcgMS4xLjQ2IDEuNGwuMDctLjA3LS4wNy0uMDh6IiBvcGFjaXR5PSIuMTIiLz48L2c+PHBhdGggZD0iTTMyLjAxIDIxLjNsLTQuOTkgMi44My4wOS4wOUwzMiAyMS40NGMuNy0uNCAxLjA1LS45MiAxLjA1LTEuNDQtLjA1LjQ3LS40Ljk0LTEuMDQgMS4zeiIgZmlsbD0iIzAwMCIgb3BhY2l0eT0iLjEyIi8+PHBhdGggZD0iTTEyLjUxIDcuNjJsMTkuNSAxMS4wOGMuNjMuMzYuOTkuODIgMS4wNSAxLjMgMC0uNTItLjM1LTEuMDUtMS4wNS0xLjQ0TDEyLjUxIDcuNDhjLTEuNC0uNzktMi41NC0uMTMtMi41NCAxLjQ3di4xNWMwLTEuNjEgMS4xNS0yLjI3IDIuNTQtMS40OHoiIGZpbGw9IiNGRkYiIG9wYWNpdHk9Ii4yNSIvPjwvZz48L3N2Zz4=';
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

export default UltraHumanPage;
