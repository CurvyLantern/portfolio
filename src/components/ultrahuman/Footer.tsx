import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';
import Image from 'next/image';

import SkullImage from 'public/assets/ultrahuman/skull.png';
import AppStoreSvg from 'public/assets/ultrahuman/appStore.svg';
import PlayStoreSvg from 'public/assets/ultrahuman/playStore.svg';
import { FooterLink } from 'src/components/ultrahuman/FooterLink';

const Footer = () => (
	<footer className='bg-neutral-900 px-20 pt-10'>
		{/* notification */}
		<div
			className='grid grid-rows-2  md:grid-rows-1 md:grid-cols-2 
			bg-no-repeat bg-center
			'
			style={{
				backgroundImage: `url(${SkullImage.src})`,
			}}>
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
			{/* <div className=''>
				<Image src={SkullImage} className='h-full object-cover w-full' alt={'skull logo'} />
			</div> */}
			<div>
				<h4 className='py-10 text-white text-xl'>Get The App Here</h4>
				<div className='flex gap-10'>
					<AppStoreSvg />
					<PlayStoreSvg />
				</div>
			</div>
		</div>

		<div className='border-t-black border-t-2 py-5'>
			<p className='text-white text-xs'>
				Copyright 2020-2022 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, hic?
			</p>
			<div className='text-white text-xs pt-3'>
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
			</div>
		</div>
	</footer>
);

export { Footer };
