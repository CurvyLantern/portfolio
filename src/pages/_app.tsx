import 'animate.css';
import 'src/styles/tailwind.css';

import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import { ReactElement, ReactNode, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider attribute='class' enableSystem>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
