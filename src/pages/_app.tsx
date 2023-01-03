import 'src/styles/tailwind.css';
import { AppProps } from 'next/app';

import { ReactElement, ReactNode, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default MyApp;
