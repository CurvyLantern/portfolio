import { ContactForm } from 'src/components/ContactForm';
import { Container } from 'src/components/Container';

const ContactMeSection = () => {
	return (
		<section id='contact-me' className='my-10'>
			<Container className='sm:w-2/3 lg:w-1/2 w-full'>
				<h2 className='py-20 text-3xl font-semibold text-center'>Write me something</h2>
				<div className='flex flex-col min-h-[500px] outline outline-2 outline-offset-4 rounded-md overflow-hidden outline-green-600'>
					<video playsInline autoPlay muted loop className=' object-cover w-full'>
						<source src='/swan_family2.mp4' type='video/mp4' />
						Your browser does not support video
					</video>
					<div className='rounded-r-md flex flex-1'>
						<ContactForm />
					</div>
				</div>
			</Container>
		</section>
	);
};

export default ContactMeSection;
