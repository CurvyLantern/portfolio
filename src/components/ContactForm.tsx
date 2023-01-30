import { useForm, SubmitHandler } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactFormFetcher } from 'src/utils/FetcherHelpers';
import { useState } from 'react';

import { PulseLoader } from 'react-spinners';

const schema = z.object({
	email: z.string().email(),
	description: z.string().max(150),
});
type Schema = z.infer<typeof schema>;
export const ContactForm = () => {
	const [isLoading, setLoading] = useState(false);

	const { register, handleSubmit } = useForm<Schema>({
		resolver: zodResolver(schema),
	});
	const onSubmit: SubmitHandler<Schema> = async ({ email, description }) => {
		setLoading(true);
		const res = await ContactFormFetcher({ email, description });
		setLoading(false);
		console.log('email response', res);
	};
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex flex-col items-center justify-center flex-1 gap-5 p-5'>
			<div className='flex flex-col w-full gap-2'>
				<label htmlFor='subject'>Here you should enter your email</label>
				<input
					{...register('email', {
						required: true,
					})}
					type='email'
					id='subject'
					className='bg-neutral-800 text-neutral-200 p-2 text-xl rounded-md'
				/>
			</div>
			<div className='flex flex-col w-full gap-2'>
				<label htmlFor='description'>What do you want to talk about ?</label>
				<textarea
					rows={5}
					{...register('description', {
						required: true,
					})}
					id='description'
					className='bg-neutral-800 text-md p-2 text-white rounded-md resize-none'
				/>
			</div>
			<div className='flex flex-col w-full gap-2'>
				<button
					disabled={isLoading}
					className='flex items-center justify-center transition hover:-translate-y-2  p-3 bg-green-700 rounded-md'>
					{isLoading ? (
						<span className='flex flex-col items-center justify-center'>
							<PulseLoader
								loading={isLoading}
								size={10}
								aria-label='Loading Spinner'
								data-testid='loader'
							/>
						</span>
					) : (
						'Submit'
					)}
				</button>
			</div>
		</form>
	);
};
