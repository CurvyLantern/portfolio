import { BsYoutube, BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

const Flemingo = () => {
	return (
		<div className='flex flex-col bg-white'>
			<nav className=' flex items-center px-20 py-5'>
				<div className='text-4xl font-bold text-black'>Logo</div>
				<ul className='flex gap-10 ml-auto text-gray-800'>
					<li>Features</li>
					<li>Pricing</li>
					<li>Testimonials</li>
				</ul>
				<button className='px-7 py-2 ml-10 text-white bg-gray-800 rounded-lg'>Log In</button>
			</nav>
			<div className='flex flex-col items-center justify-center pt-20'>
				<h1 className='text-7xl w-1/2 font-semibold text-center text-gray-900'>
					Analytics <span className='text-teal-300'>made simple </span>
					for businesses & companies.
				</h1>
				<p className='w-1/3 pt-5 mb-8 text-lg tracking-wide text-center'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam deserunt quam mollitia eaque
					necessitatibus! Voluptates quia iusto beatae. Reiciendis, nobis.
				</p>

				<button className='px-6 py-4 text-white bg-gray-800 rounded-lg'>Get Started</button>

				<div className='mt-32'>
					<p className='mb-8 text-center'>Supported sites</p>
					<div className='flex gap-10'>
						<span className='flex items-center justify-center w-12 h-12 text-2xl text-white bg-gray-900 rounded-full'>
							<BsYoutube />
						</span>
						<span className='flex items-center justify-center w-12 h-12 text-2xl text-white bg-gray-900 rounded-full'>
							<BsTwitter />
						</span>
						<span className='flex items-center justify-center w-12 h-12 text-2xl text-white bg-gray-900 rounded-full'>
							<BsInstagram />
						</span>
						<span className='flex items-center justify-center w-12 h-12 text-2xl text-white bg-gray-900 rounded-full'>
							<BsFacebook />
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Flemingo;
