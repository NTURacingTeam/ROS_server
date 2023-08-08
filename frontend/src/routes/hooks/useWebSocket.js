import React, { useState, useCallback, createContext, useContext, useRef, useEffect } from 'react';
import useWebSocketOrigin, { ReadyState } from 'react-use-websocket';

const WebSocketContext = createContext({
	socketUrl: "",
	sendMessage: () => {},
	connectionStatus: "",
	readyState: 0,
	lastJsonMessage: {},
	lastMessage: "",
	sendMessage: () => {}, 
	sendJsonMessage: () => {},
	setSocketUrl: () => {},
})

const WebSocketProvider = (props) => {
	const [socketUrl, setSocketUrl] = useState('ws://140.112.14.14:21543');

	const { sendMessage,
			sendJsonMessage,
			lastMessage,
			lastJsonMessage,
			readyState,
			getWebSocket,
		  } = useWebSocketOrigin(
			socketUrl, 
			{
				shouldReconnect: (closeEvent) => {
				return didUnmount.current === false;
			},
			reconnectAttempts: 10000,
			reconnectInterval: 1000,
		  	});

	const didUnmount = useRef(false);

	useEffect(() => {
		return () => {
			didUnmount.current = true;
		};
	}, []);
		  

	const message = JSON.stringify({name: "acceleration_1", value: 127}) 

	const handleClickSendMessage = useCallback(() => sendMessage(message), []);
	
	const connectionStatus = {
			[ReadyState.CONNECTING]: 'Connecting',
			[ReadyState.OPEN]: 'Open',
			[ReadyState.CLOSING]: 'Closing',
			[ReadyState.CLOSED]: 'Closed',
			[ReadyState.UNINSTANTIATED]: 'Uninstantiated',
		}[readyState];
	

	return (
		<WebSocketContext.Provider
			value={{socketUrl, sendMessage, connectionStatus, 
			readyState, lastJsonMessage, lastMessage, sendMessage, sendJsonMessage,
			setSocketUrl}}
			{...props}
		/>
	);
};

const useWebSocket = () => useContext(WebSocketContext) ;

export { useWebSocket, WebSocketProvider}