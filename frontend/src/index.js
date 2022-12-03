import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { WebSocketProvider } from './container/hooks/WebSocketState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <React.StrictMode>
	<WebSocketProvider><App /></WebSocketProvider>
	// </React.StrictMode>
);
	
