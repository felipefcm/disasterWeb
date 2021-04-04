
import React from 'react';

import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyle from '../styles/globals';

function DisasterWeb({ Component, pageProps }: AppProps) {

	return (
		<>
			<Head>
				<title>DisasterWeb</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			
			<GlobalStyle />

			<Component {...pageProps} />
		</>
	);
};

export default DisasterWeb;
