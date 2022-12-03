import React, { useState, useCallback, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';

export default WebSocketDemo = () => {
  //Public API that will echo messages sent to it back to the client
  const [socketUrl, setSocketUrl] = useState('ws://124.218.222.22:8080');
  const [messageHistory, setMessageHistory] = useState([]);

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  useEffect(() => {
    if (lastMessage !== null) {
      setMessageHistory((prev) => prev.concat(lastMessage));
    }
  }, [lastMessage, setMessageHistory]);

  const handleClickChangeSocketUrl = useCallback(
    () => setSocketUrl('ws://124.218.222.22:8080'),
    []
  );
  
  const initMessage = JSON.stringify({name: "accelerator_1", value: 127});
  const [message, setMessage] = useState(initMessage);

  const handleClickSendMessage = () => {console.log(message); sendMessage(message)};

  const handleInputOnKeyDown = (event) => {
    if (event.keyCode === 13) {
      handleClickSendMessage()
    }
  }

  const handleClickCheckState = useCallback(() => console.log(connectionStatus), [])

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];

  const handleInputChange = (event) =>  {
    console.log(event.target.value)
    setMessage(event.target.value)
  }

  return (
    <div>
      {/* <button onClick={handleClickChangeSocketUrl}>
        Click Me to change Socket Url
      </button> */}
      <input style={{ width:"300px" }} onChange={handleInputChange} value={message} onKeyDown={handleInputOnKeyDown}></input>
      <button
        onClick={handleClickSendMessage}
        disabled={readyState !== ReadyState.OPEN}
      >
        Click Me to send {message}
      </button>
      {/* <button
        onClick={handleClickCheckState}
      >
        Click Me check state
      </button> */}

      <span>The WebSocket is currently {connectionStatus}</span>
      {lastMessage ? <span>Last message: {lastMessage.data}</span> : null}
      {/* <ul>
        {messageHistory.map((message, idx) => (
          <span key={idx}>{message ? message.data : null}</span>
        ))}
      </ul> */}
    </div>
  );
};
