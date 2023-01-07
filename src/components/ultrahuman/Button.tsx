interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
	children: React.ReactNode;
}
const Button = ({ children, ...props }: ButtonProps) => {
	return (
		<button {...props} className='px-10 py-3 text-2xl text-white border-2 border-white rounded-full'>
			{children}
		</button>
	);
};

export { Button };
