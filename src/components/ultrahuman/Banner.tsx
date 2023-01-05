import BannerImage from 'public/assets/ultrahuman/bg-banner.jpg';
import RingImage from 'public/assets/ultrahuman/bg-ring.jpg';

const Banner = () => {
	return (
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
	);
};

export { Banner };
