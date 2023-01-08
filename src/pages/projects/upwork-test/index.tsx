const color1 = 'rgb(20, 124, 123)';
const color2 = 'rgb(35, 203, 203)';

const UpworkTest = () => {
	return (
		<div className='flex flex-col h-screen'>
			<header className='flex items-center justify-between px-10 py-5 bg-teal-600'>
				<h1 className='text-neutral-400 text-3xl font-bold'>DEMO LOGO</h1>
				<button className='text-xl text-white uppercase'>logout</button>
			</header>
			<section className='flex flex-1'>
				<aside className=' w-52 py-10 text-black bg-teal-400'>
					<ul>
						<li className='flex'>
							<button className=' hover:bg-teal-700 flex justify-between flex-1 px-5 py-3'>
								Home <span>&gt;</span>
							</button>
						</li>
						<li className='flex'>
							<button className=' hover:bg-teal-700 flex justify-between flex-1 px-5 py-3'>
								Home <span>&gt;</span>
							</button>
						</li>
						<li className='flex'>
							<button className=' hover:bg-teal-700 flex justify-between flex-1 px-5 py-3'>
								Home <span>&gt;</span>
							</button>
						</li>
						<li className='flex'>
							<button className=' hover:bg-teal-700 flex justify-between flex-1 px-5 py-3'>
								Home <span>&gt;</span>
							</button>
						</li>
						<li className='flex'>
							<button className=' hover:bg-teal-700 flex justify-between flex-1 px-5 py-3'>
								Home <span>&gt;</span>
							</button>
						</li>
						<li className='flex'>
							<button className=' hover:bg-teal-700 flex justify-between flex-1 px-5 py-3'>
								Home <span>&gt;</span>
							</button>
						</li>
					</ul>
				</aside>

				{/* right */}
				<main className='flex flex-col flex-1 gap-8 p-8 bg-white'>
					<div className='h-96 bg-neutral-800'></div>

					<div>
						<h2>Table Title 1</h2>
						<table className='w-full'>
							<thead>
								<tr className='h-12 bg-teal-400'>
									<th>ID</th>
									<th>Client</th>
									<th>Pickup</th>
									<th>Dropout</th>
									<th>Status</th>
									<th>Icons</th>
									<th>Date</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{Array(4)
									.fill(0)
									.map((i, idx) => {
										return (
											<tr key={idx}>
												<td>17265</td>
												<td>Jessie</td>
												<td>Worley Ave</td>
												<td>1005 Cleanview</td>
												<td>Pendin</td>
												<td>yes</td>
												<td>2019/06/20</td>
												<td>&lt;</td>
											</tr>
										);
									})}
							</tbody>
						</table>
					</div>
				</main>
			</section>
		</div>
	);
};

export default UpworkTest;
