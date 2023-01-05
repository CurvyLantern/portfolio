import { ParallaxSlider } from 'src/components/ultrahuman/ParallaxSliders';
import Image from 'next/image';

import CardImage from 'public/assets/ultrahuman/card.jpg';

const FeaturesSection = () => (
	<section className='grid gap-3 py-5 mb-20 overflow-hidden justify-items-center'>
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
);

export { FeaturesSection };
