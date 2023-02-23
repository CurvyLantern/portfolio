import 'animate.css';
import 'src/styles/tailwind.css';

import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { RootLayout } from 'src/layouts/RootLayout';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider attribute='class' enableSystem>
			<RootLayout>
				<Component {...pageProps} />
			</RootLayout>
		</ThemeProvider>
	);
}

export default MyApp;
