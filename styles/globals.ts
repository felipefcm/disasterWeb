
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		
		font-family: 'Roboto', sans-serif;
	}

	html, body {
		height: 100%;
		background: var(--darker);
	}

	:root {
		--royal-blue-dark: #0a2463ff;
		--red-salsa: #fb3640ff;
		--davys-grey: #605f5eff;
		--celadon-blue: #247ba0ff;
		--platinum: #e2e2e2ff;
		--darker: #353535ff;
	}
`;
