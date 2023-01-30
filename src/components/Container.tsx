export const Container = ({ children, className }: { className?: any; children: React.ReactNode }) => {
	return <div className={`${className ? className : ''} container mx-auto`}>{children}</div>;
};
