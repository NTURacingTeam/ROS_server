import React, { useState, useCallback, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';

const WebSocketState = () => {
	const [socketUrl, setSocketUrl] = useState('ws://124.218.222.22:8080');

	const { sendMessage,
			sendJsonMessage,
			lastMessage,
			lastJsonMessage,
			readyState,
			getWebSocket,
		  } = useWebSocket(socketUrl);

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
		<div>
			<button onClick={handleClickSendMessage} disabled={readyState !== ReadyState.OPEN} >
				Click Me to send {message}
			</button>
			<span>The WebSocket is currently {connectionStatus}</span>
			{lastMessage ? <span>Last message: {lastMessage.data}</span> : null}
		</div>
	)
}

export default WebSocketState