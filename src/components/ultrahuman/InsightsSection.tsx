import { HiShoppingBag, HiStar } from 'react-icons/hi2';
import BaseSection from 'src/components/ultrahuman/BaseSection';

const InsightsSection = () => {
	return (
		<div className=''>
			<section className='py-10 px-20'>
				<header>
					<h2 className='py-10 text-5xl text-center text-white'>Deep Insights. Deeply trusted.</h2>
				</header>
				<p className='text-neutral-400 mb-20 text-xl leading-tight text-center'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum architecto aliquid rerum, aperiam
					asperiores blanditiis fuga nihil repudiandae quia laboriosam temporibus distinctio libero quod
					saepe harum, atque ea, delectus sed labore? Aut debitis amet ex repudiandae maxime, dolores totam.
					Quod inventore sit error doloribus molestias nam porro temporibus eum magni?
				</p>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
					{/* Appstore */}
					<div className='justify-items-center grid grid-rows-2 gap-3'>
						<div className='flex items-center gap-2 text-white'>
							<p className='text-5xl md:text-7xl'>4.9</p>
							<div>
								<p className='text-2xl'>App Store</p>
								<p className='text-amber-500 flex text-xl md:text-3xl'>
									{Array(5)
										.fill(0)
										.map((i, idx) => (
											<HiStar key={idx} />
										))}
								</p>
							</div>
						</div>
						<button className='text-neutral-400 flex items-center px-3 md:px-6 py-1 md:py-3 text-base md:text-xl border-2 border-white rounded-full'>
							<span className='text-3xl'>
								<HiShoppingBag />
							</span>

							<span className='pl-2 md:pl-3'>Download on AppStore</span>
						</button>
					</div>

					{/* Playstore */}
					<div className='justify-items-center grid grid-rows-2 gap-3'>
						<div className='flex items-center gap-2 text-white'>
							<p className='text-5xl md:text-7xl'>4.9</p>
							<div>
								<p className='text-2xl'>Play Store</p>
								<p className='text-amber-500 flex text-xl md:text-3xl'>
									{Array(5)
										.fill(0)
										.map((i, idx) => (
											<HiStar key={idx} />
										))}
								</p>
							</div>
						</div>
						<button className='text-neutral-400 flex items-center px-3 md:px-6 py-1 md:py-3 text-base md:text-xl border-2 border-white rounded-full'>
							<span className='text-3xl'>
								<HiShoppingBag />
							</span>

							<span className='pl-2 md:pl-3'>Download on Playstore</span>
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export { InsightsSection };
