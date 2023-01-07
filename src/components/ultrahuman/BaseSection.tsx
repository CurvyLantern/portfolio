import { ReactNode } from 'react';

interface BaseSectionProps {
	children: ReactNode;
}
const BaseSection = ({ children }: BaseSectionProps) => {
	return <section className='px-10'>{children}</section>;
};

export default BaseSection;
