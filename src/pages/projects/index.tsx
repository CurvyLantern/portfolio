import Link from 'next/link';
import { useRouter } from 'next/router';

const ProjectsPage = () => {
	const router = useRouter();
	return (
		<div>
			Here You can see all the projects
			<div>
				<Link
					href={{
						pathname: router.pathname + '/grill-house',
					}}>
					Grill House
				</Link>
			</div>
		</div>
	);
};

export default ProjectsPage;
