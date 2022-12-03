import { useFrames } from "./hooks/useFrames"
import React, { useState, useEffect, createContent, useContext } from 'react';
import styled from 'styled-components'
import { Row } from 'antd';
import { useWebSocket } from './hooks/useWebSocket';


const StyledRow = styled(Row)`
	.ant-col {
		// padding: 1em;
	}
`

export default () => {
    const {socketUrl, connectionStatus, readyState, lastJsonMessage} = useWebSocket() ;

    const { GUI, batchUpdate } = useFrames();
    const { GPS, IMU, Motor, Other, Pedal, Steer, Wheel, Torque } = GUI;
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
                <Motor baseCol={baseCol} lastJsonMessage={lastJsonMessage}/>
                <Steer baseCol={baseCol} lastJsonMessage={lastJsonMessage}/>
                <Torque baseCol={baseCol} lastJsonMessage={lastJsonMessage}/>
                <Wheel baseCol={baseCol} lastJsonMessage={lastJsonMessage}/>
                <IMU baseCol={baseCol} lastJsonMessage={lastJsonMessage}/>
                <GPS baseCol={baseCol} lastJsonMessage={lastJsonMessage}/>
                <Other baseCol={baseCol} lastJsonMessage={lastJsonMessage}/>
            </StyledRow>
        </div>
    )
}