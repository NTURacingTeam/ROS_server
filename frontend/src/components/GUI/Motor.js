import GUIstyle from "./GUIstyle"
import { useFrames } from "../../routes/hooks/useFrames"

import { ControlOutlined } from '@ant-design/icons'
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import BoltIcon from '@mui/icons-material/Bolt';
import SpeedIcon from '@mui/icons-material/Speed';
import { TbTemperatureCelsius } from 'react-icons/tb'

import styled from "styled-components";
import { Tooltip } from 'antd';

const StyledDiv = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    font-size:  2em;
`
const StyledSubDiv = styled.div`
    width: 50%;
    height: 100%;
`

const StyledNumber = styled.div`
    // font-size: 1em;
`

const U = styled.span`
    font-size: 0.3em;
`

export default () => {

    const { frames } = useFrames();
    const dataRow = [
        "inverter_control_board_temperature",
        "motor_temperature",
        "motor_speed",
        "inverter_dc_bus_voltage",
        "inverter_dc_bus_current",
    ]

    return (
        <GUIstyle title={"Motor"} frames={1} columns={1}>
            <StyledDiv>
                <Tooltip title="control board temperature" >
                    <StyledSubDiv>
                        <ControlOutlined /><DeviceThermostatIcon fontSize="inherit"/>
                        <StyledNumber>{frames.inverter_control_board_temperature.value.toFixed(2)}<U> °C</U></StyledNumber>
                    </StyledSubDiv>
                </Tooltip>
                <Tooltip title="motor temperature" >
                    <StyledSubDiv>
                            <DeviceThermostatIcon fontSize="inherit"/>
                            <StyledNumber>{frames.motor_temperature.value.toFixed(2)}<U> °C</U></StyledNumber>
                    </StyledSubDiv>
                </Tooltip>

            </StyledDiv>
            <StyledDiv>
                <Tooltip title="motor speed" >
                    <StyledSubDiv>
                        <SpeedIcon fontSize="inherit"/>
                        <StyledNumber>{(frames.motor_speed.value).toFixed(0)} <U>rpm</U></StyledNumber>
                    </StyledSubDiv>
                </Tooltip>
                <Tooltip title="input voltage" >
                    <StyledSubDiv>
                        <BoltIcon fontSize="inherit"/>
                        <StyledNumber>{frames.inverter_dc_bus_voltage.value.toFixed(2)} <U>V</U></StyledNumber>
                    </StyledSubDiv>
                </Tooltip>
            </StyledDiv>
        </GUIstyle>
    )
}
