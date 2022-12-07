import { useFrames } from "./hooks/useFrames"
import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { Row, Select } from 'antd';
import { useWebSocket } from './hooks/useWebSocket';
import { GUIProvider } from './hooks/useGUI'

import GPS from "../components/GUI/GPS"
import IMU from "../components/GUI/IMU"
import Motor from "../components/GUI/Motor"
import Other from "../components/GUI/Other"
import Pedal from "../components/GUI/Pedal"
import Steer from "../components/GUI/Steer"
import Wheel from "../components/GUI/Wheel"
import Torque from "../components/GUI/Torque"


const StyledRow = styled(Row)`
	.ant-col {
		// padding: 1em;
	}
`

export default () => {
    const {socketUrl, connectionStatus, readyState, lastJsonMessage} = useWebSocket() ;

    const { batchUpdate } = useFrames();
    const [baseCol, setBaseCol] = useState(8);
    
    useEffect(() => {
		// console.log("use Effect")
		try {
			if (lastJsonMessage.hasOwnProperty("batch")) {
				batchUpdate(lastJsonMessage.batch);
			}
		} catch (error) {console.log(error)};
	}, [lastJsonMessage])

    const handleChangeSelect = (value) => {
        setBaseCol( 24 / value)
      };

    return (
        <GUIProvider>
            <h1>GUI page</h1>
            <p>base column: {baseCol}/24, card in a row: <Select
            defaultValue={3}
            style={{
                width: 150,
            }}
            onChange={handleChangeSelect}
            options={[
                { value: 1, label: "1", },
                { value: 2, label: "2", },
                { value: 3, label: "3", },
                { value: 4, label: "4", },
                { value: 6, label: "6", },
                
            ]}
            /></p>
            <StyledRow gutter={[24, 24]}>
                <Pedal baseCol={baseCol} />
                <Motor baseCol={baseCol} />
                <Steer baseCol={baseCol} />
                <Torque baseCol={baseCol} />
                <Wheel baseCol={baseCol} />
                <IMU baseCol={baseCol} />
                <GPS baseCol={baseCol} />
                <Other baseCol={baseCol} />
            </StyledRow>
        </GUIProvider>
    )
}