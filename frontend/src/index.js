import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { WebSocketProvider } from './routes/hooks/useWebSocket';
import { FramesProvider } from './routes/hooks/useFrames';
import styled from "styled-components"

const StyledApp = styled(App)`
    font-family: 'Noto Sans TC', 'Syncopate', 'xscale' ;font-size: 10em;
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <React.StrictMode>
	<WebSocketProvider>
		<FramesProvider>
			<StyledApp />
		</FramesProvider>
	</WebSocketProvider>
	// </React.StrictMode>
);
	
