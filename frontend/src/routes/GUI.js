import { useFrames } from "./hooks/useFrames"
import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { Row, Select } from 'antd';
import { Badge, Card, Space, Input, Checkbox, Divider} from 'antd';
import { useWebSocket } from './hooks/useWebSocket';
import { useGUI } from './hooks/useGUI'


import GPS from "../components/GUI/GPS"
import IMU from "../components/GUI/IMU"
import Motor from "../components/GUI/Motor"
import OilBrake from "../components/GUI/OilBrake"
import Pedal from "../components/GUI/Pedal"
import Steer from "../components/GUI/Steer"
import Wheel from "../components/GUI/Wheel"
import StatusError from "../components/GUI/StatusError"
import Rpi from "../components/GUI/Rpi";

const CheckboxGroup = Checkbox.Group;
const plainOptions = [
    "Pedal",
    "Motor",
    "Steer",
    "Wheel",
    "Status & Error",
    "IMU",
    "GPS",
    "Oil Brake", 
    "Rpi", 
];
const defaultCheckedList = [
    "Pedal",
    "Motor",
    "Wheel",
    "Status & Error",
    "IMU",
    "Oil Brake", 
    "Rpi",
];


const StyledRow = styled(Row)`
	.ant-col {
		// padding: 1em;
	}
`

export default () => {
    const { setSocketUrl, socketUrl, connectionStatus, lastJsonMessage} = useWebSocket() ;

    const { batchUpdate } = useFrames();
    const { baseCol, handleChangeSelect } = useGUI();
    
    useEffect(() => {
		// console.log("use Effect")
		try {
			if (lastJsonMessage.hasOwnProperty("batch")) {
				batchUpdate(lastJsonMessage.batch);
			}
		} catch (error) {console.log(error)};
	}, [lastJsonMessage])

    function isValidUrl(string) {
        try {
          new URL(string);
          return true;
        } catch (err) {
          return false;
        }
      }      

    const handleWebsocketInputOnChange = (e) => {
        console.log(e.target.value)
        if (isValidUrl(e.target.value)) setSocketUrl(e.target.value);
	};


    const [checkedList, setCheckedList] = useState(defaultCheckedList);
    const [indeterminate, setIndeterminate] = useState(true);
    const [checkAll, setCheckAll] = useState(false);
    const onChange = (list) => {
      setCheckedList(list);
      setIndeterminate(!!list.length && list.length < plainOptions.length);
      setCheckAll(list.length === plainOptions.length);
    };
    const onCheckAllChange = (e) => {
      setCheckedList(e.target.checked ? plainOptions : []);
      setIndeterminate(false);
      setCheckAll(e.target.checked);
    };
  

    return (
        <>
            {/* <h1>GUI page</h1> */}
            <Space style={{ maxWidth: 700, }}>
                <Badge.Ribbon text={connectionStatus} color={connectionStatus === "Open" ? "green" : connectionStatus === "Connecting" ? "pink" : "red"}>
                    <Card title="websocket" size="small">
                        <Input
                            addonBefore="url : " 
                            style={{
                                // width: 'calc(100% - 200px)',
                            }}  
                            defaultValue={socketUrl}
                            onChange={handleWebsocketInputOnChange}
                        />
                    </Card>
                </Badge.Ribbon>
                <Card>
                    base column: {baseCol}/24, cards in a row:
                    <Select
                        defaultValue={3}
                        style={{
                            width: 50,
                        }}
                        onChange={handleChangeSelect}
                        options={[
                            { value: 1, label: "1", },
                            { value: 2, label: "2", },
                            { value: 3, label: "3", },
                            { value: 4, label: "4", },
                            { value: 6, label: "6", },
                            
                        ]}
                    />
                </Card>
            </Space>
            <StyledRow gutter={[24, 24]}>
                {checkedList.includes("Pedal") && <Pedal />}
                {checkedList.includes("Motor") && <Motor />}
                {checkedList.includes("Steer") && <Steer />}
                {checkedList.includes("Wheel") && <Wheel />}
                {checkedList.includes("Status & Error") && <StatusError />}
                {checkedList.includes("IMU") && <IMU />}
                {checkedList.includes("GPS") && <GPS />}
                {checkedList.includes("Oil Brake") && <OilBrake />}
                {checkedList.includes("Rpi") && <Rpi />}
            </StyledRow>
            <Card>
                <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}> Check all </Checkbox> <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
            </Card>
        </>
    )
}

// inverter
// 

// other state/ status
// vcu_status, rear_sensor_status, 