import React, { useState, useCallback, useEffect, createContext, useContext } from 'react';
import useWebSocketOrigin, { ReadyState } from 'react-use-websocket';

const WebSocketContext = createContext({
	socketUrl: "",
	sendMessage: () => {},
	connectionStatus: "",
	readyState: 0,
	lastJsonMessage: {},
	lastMessage: "",
	sendMessage: () => {}, 
	sendJsonMessage: () => {}
})

const WebSocketProvider = (props) => {
	const [socketUrl, setSocketUrl] = useState('ws://124.218.222.22:8080');

	const { sendMessage,
			sendJsonMessage,
			lastMessage,
			lastJsonMessage,
			readyState,
			getWebSocket,
		  } = useWebSocketOrigin(socketUrl);

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
			readyState, lastJsonMessage, lastMessage, sendMessage, sendJsonMessage}}
			{...props}
		/>
	);
};

const useWebSocket = () => useContext(WebSocketContext) ;

export { useWebSocket, WebSocketProvider}