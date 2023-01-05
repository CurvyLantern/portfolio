const SliderSection = () => {
	return (
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
	);
};
export { SliderSection };
