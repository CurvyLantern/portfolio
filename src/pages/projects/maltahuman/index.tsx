import { Banner } from 'src/components/ultrahuman/Banner';
import { FeaturesSection } from 'src/components/ultrahuman/FeatureSection';
import { Footer } from 'src/components/ultrahuman/Footer';
import { Header } from 'src/components/ultrahuman/Header';
import { InsightsSection } from 'src/components/ultrahuman/InsightsSection';
import { MeetSection } from 'src/components/ultrahuman/MeetSection';
import { SliderSection } from 'src/components/ultrahuman/SliderSection';
import { VideoSection } from 'src/components/ultrahuman/VideoSection';

const MaltaHumanPage = () => {
	return (
		<main className='bg-black'>
			<Header />

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

			{/* Notification */}
			<p className='backdrop-blur-lg bg-opacity-50 bg-neutral-800 w-full py-4 font-semibold text-center text-white sticky bottom-0'>
				Our clinical trials for M1 CGM metabolic health platform are in progress.{' '}
				<span className='text-sky-400 pl-2'>Learn More &#8594;</span>
			</p>
			{/* Footer */}
			<Footer />
		</main>
	);
};

export default MaltaHumanPage;
