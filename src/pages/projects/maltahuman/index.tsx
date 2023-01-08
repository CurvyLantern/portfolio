import {
	motion,
	useMotionTemplate,
	useMotionValue,
	useMotionValueEvent,
	useScroll,
	useSpring,
} from 'framer-motion';
import { useRef, useState } from 'react';
import { Banner } from 'src/components/ultrahuman/Banner';
import ChampionsSection from 'src/components/ultrahuman/ChampionsSection';
import { FeaturesSection } from 'src/components/ultrahuman/FeatureSection';
import { Footer } from 'src/components/ultrahuman/Footer';
import { Header } from 'src/components/ultrahuman/Header';
import { InsightsSection } from 'src/components/ultrahuman/InsightsSection';
import { InvestorSection } from 'src/components/ultrahuman/InvestorSection';
import { MeetSection } from 'src/components/ultrahuman/MeetSection';
import ShowCase from 'src/components/ultrahuman/ShowCase';
import { SliderSection } from 'src/components/ultrahuman/SliderSection';
import { VideoSection } from 'src/components/ultrahuman/VideoSection';

const MaltaHumanPage = () => {
	const { scrollY } = useScroll();
	const [isSticky, setIsSticky] = useState(false);
	useMotionValueEvent(scrollY, 'change', cur => {
		if (cur > 600 && !isSticky) {
			setIsSticky(true);
		} else if (cur < 600 && isSticky) {
			setIsSticky(false);
		}
	});
	return (
		<main className=' bg-black'>
			<Header />

			{/* Notification */}
			{/* Notification Section */}
			<section>
				<p className='bg-neutral-800 w-full py-4 font-semibold text-center text-white'>
					Our clinical trials for M1 CGM metabolic health platform are in progress.{' '}
					<span className='text-sky-400 pl-2'>Learn More &#8594;</span>
				</p>
			</section>

			<Banner />

			{/* Slider Section */}
			<SliderSection />

			{/* Insights Section */}
			<InsightsSection />

			{/* Features and benefits */}
			<FeaturesSection />

			{/* Stories Section */}
			<VideoSection />

			{/* Meet section */}
			<MeetSection />

			{/* Backed By the Best */}
			<InvestorSection />

			{/* Join the cyborg Army */}
			<ShowCase />

			{/* Word Champions */}
			<ChampionsSection />

			{/* Notification */}
			<p
				className={`${
					isSticky ? 'sticky' : 'relative'
				} z-50 backdrop-blur-lg bg-opacity-50 bg-neutral-800 w-full py-4 font-semibold text-center text-white bottom-0`}>
				Our clinical trials for M1 CGM metabolic health platform are in progress.{' '}
				<span className='text-sky-400 pl-2'>Learn More &#8594;</span>
			</p>
			{/* Footer */}
			<Footer />
		</main>
	);
};

export default MaltaHumanPage;
