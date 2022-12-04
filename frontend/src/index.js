import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { WebSocketProvider } from './routes/hooks/useWebSocket';
import { FramesProvider } from './routes/hooks/useFrames';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <React.StrictMode>
	<WebSocketProvider>
		<FramesProvider>
			<App />
		</FramesProvider>
	</WebSocketProvider>
	// </React.StrictMode>
);
	
