import { useFrames } from "./hooks/useFrames"
import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { Row, Slider } from 'antd';
import { useWebSocket } from './hooks/useWebSocket';


const StyledRow = styled(Row)`
	.ant-col {
		// padding: 0;
	}
`

export default () => {
    const {socketUrl, sendMessage, connectionStatus, readyState, lastJsonMessage, lastMessage} = useWebSocket() ;

    const { GUI, batchUpdate } = useFrames();
    const { GPS, IMU, Motor, Other, Pedal, Steer, Wheel } = GUI;
    const [baseCol, setbaseCol] = useState(8);
    
    useEffect(() => {
		// console.log("use Effect")
		try {
			if (lastJsonMessage.hasOwnProperty("batch")) {
				batchUpdate(lastJsonMessage.batch);
			}
		} catch (error) {console.log(error)};
	}, [lastJsonMessage])


    return (
        <div>
            <h1>GUI page</h1><p>base column: {baseCol}/24</p>
            <StyledRow gutter={[24, 24]}>
                <Pedal baseCol={baseCol} lastJsonMessage={lastJsonMessage}/>
            </StyledRow>
        </div>
    )
}