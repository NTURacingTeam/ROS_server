import GUIstyle from "./GUIstyle"
import { useFrames } from "../../routes/hooks/useFrames"

import styled from "styled-components";
import { Tooltip } from 'antd';

import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import { GiStoneWheel } from 'react-icons/gi'

const StyledDiv = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    font-size:  1.8em;
`
const StyledSubDiv = styled.div`
    width: 50%;
    height: 100%;
	align-content: right;
`

const StyledEle = styled.div`
	align-text: right;
`

const StyledNumber = styled.div`
    // font-size: 1em;
`

const U = styled.span`
    font-size: 0.3em;
`
const FloatMiddle = styled.div`
	position: absolute;
	// background: red;

	transform: translate(50%, -50%);
	top: 50%;
	right: 50%;

`

export default () => {

	
	const { frames } = useFrames();
	const getStr = (key) => (frames[key].value.toFixed(1))
    const dataRow = [
		// rear_box_1
		"rear_left_wheel_speed",
		"rear_right_wheel_speed",
		"rear_left_tyre_temperature_1",
		"rear_left_tyre_temperature_2",
		"rear_right_tyre_temperature_1",
		"rear_right_tyre_temperature_2",
        // front_box_1
		"front_left_wheel_speed",
		"front_right_wheel_speed",
		"front_left_tyre_temperature_1",
		"front_left_tyre_temperature_2",
		"front_right_tyre_temperature_1",
		"front_right_tyre_temperature_2",
    ]
    return (
        <GUIstyle title={"Wheel"} frames={1} columns={1}>
            <StyledDiv>
                <Tooltip title="left Front" >
                    <StyledSubDiv>
                        <StyledEle><DeviceThermostatIcon fontSize="inherit"/>{getStr("front_left_tyre_temperature_1")}</StyledEle>
                        <StyledEle><DeviceThermostatIcon fontSize="inherit"/>{getStr("front_left_tyre_temperature_2")}</StyledEle>
						<StyledEle><GiStoneWheel />{getStr("front_left_wheel_speed")}</StyledEle>
                    </StyledSubDiv>
                </Tooltip>
				<Tooltip title="right Front" >
                    <StyledSubDiv>
						<StyledEle><DeviceThermostatIcon fontSize="inherit"/>{getStr("front_right_tyre_temperature_1")}</StyledEle>
                        <StyledEle><DeviceThermostatIcon fontSize="inherit"/>{getStr("front_right_tyre_temperature_2")}</StyledEle>
						<StyledEle><GiStoneWheel />{getStr("front_right_wheel_speed")}</StyledEle>
                    </StyledSubDiv>
                </Tooltip>
			</StyledDiv>
			<StyledDiv>
                <Tooltip title="left rear" >
                    <StyledSubDiv>
                        <StyledEle><DeviceThermostatIcon fontSize="inherit"/>{getStr("rear_left_tyre_temperature_1")}</StyledEle>
                        <StyledEle><DeviceThermostatIcon fontSize="inherit"/>{getStr("rear_left_tyre_temperature_2")}</StyledEle>
						<StyledEle><GiStoneWheel />{getStr("rear_left_wheel_speed")}</StyledEle>
                    </StyledSubDiv>
                </Tooltip>
				<Tooltip title="right rear" >
                    <StyledSubDiv>
						<StyledEle><DeviceThermostatIcon fontSize="inherit"/>{getStr("rear_right_tyre_temperature_1")}</StyledEle>
                        <StyledEle><DeviceThermostatIcon fontSize="inherit"/>{getStr("rear_right_tyre_temperature_2")}</StyledEle>
						<StyledEle><GiStoneWheel />{getStr("rear_right_wheel_speed")}</StyledEle>
                    </StyledSubDiv>
                </Tooltip>
			</StyledDiv>
			<FloatMiddle>
				<img style={{transform: "rotate(-90deg)"}} src="https://img.icons8.com/ios/100/null/f1-race-car-top-veiw.png"/>
			</FloatMiddle>

        </GUIstyle>
    )
}

