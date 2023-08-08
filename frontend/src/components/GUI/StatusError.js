import GUIstyle from "./GUIstyle"
import { useFrames } from "../../routes/hooks/useFrames"
import styled from 'styled-components'
import {ReactComponent as GearShifter} from '../img/noun-car-gear-1265246.svg';

import { Tooltip } from 'antd';


const StyledDiv = styled.div`
    width: 100%;
    height: ${({percent})=>percent}%;
    display: flex;
    // font-size:  1.8em;
    flex-direction: column;
`
const StyledSubDiv = styled.div`
    width: 100%;
    height: 100%;
	// align-content: right;

    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: space-between;
`

const StyledEle = styled.div`
	align-text: right;
`

const Indicator = styled.div`
    // background-color: green;
    padding: auto;
    height: 85%;

    display: flex;
    align-items:center;
    justify-content:center;

    width: inherit;
    vertical-align: middle;

    // aspect-ratio: 1;
    // border-radius: 50%;
    width: ${({ factor }) => 100/factor }%;

    background-color: ${({ state }) => state };
    margin: 0.1em;
    padding: 0.1em;

    border-radius: 0.2em;
    font-size:  1rem;


`

const StyledStatusError = styled.div`
    // background: black;
    height: inherit;
    display: flex;
    flex-direction: column;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items: center;
`

const vcu_status_map = {
    0 : "StatusInit" ,
    1 : "StatusReady" ,
    2 : "StatusRTD" ,
    3 : "StatusRunning" ,
    4 : "StatusError" ,
}

const get_vcu_status_string = (n) => {
    if (vcu_status_map.hasOwnProperty(n)) {
        return vcu_status_map[n]
    } else return "not recognized"

}

const rear_sensor_status_map = vcu_status_map

const get_rear_sensor_status_string = (n) => {
    if (rear_sensor_status_map.hasOwnProperty(n)) {
        return rear_sensor_status_map[n]
    } else return "not recognized"

}


const vcu_error_map = {
    1 : "ERROR_CODE_CAN_TX",
    2 : "ERROR_CODE_CAN_RX_CRITICAL",
    4 : "ERROR_CODE_CAN_RX_OPTIONAL",

    16 : "ERROR_CODE_APPS_LOW",
    32 : "ERROR_CODE_APPS_HIGH",
    64 : "ERROR_CODE_APPS_DIVERGE",
    128 : "ERROR_CODE_BSE_LOW",
    256 : "ERROR_CODE_BSE_HIGH",
    512 : "ERROR_CODE_PEDAL_IMPLAUSIBILITY",
}

const get_vcu_error_string = (n) => {
    let str = ""
    for (const [key, value] of Object.entries(vcu_error_map)) {
        if (n & key) {
            str += value + "\n"
        }
    }
    return str
}

const rear_error_map = vcu_error_map

const get_rear_error_string = (n) => {
    let str = ""
    for (const [key, value] of Object.entries(rear_error_map)) {
        if (n & key) {
            str += value + "\n"
        }
    }
    return str
}

const can_rx_timeout_map = {
    1 : "VCU",
    2 : "rear_sensor",
    4 : "BMS",
    8 : "inverter",
}

const get_can_rx_timeout_string = (n) => {
    if (can_rx_timeout_map.hasOwnProperty(n)) {
        return can_rx_timeout_map[n] + " error"
    } else return "not recognized"
}

const inverter_state_map = {
    0 : "Power on",
    1 : "Stop",
    2 : "Open Loop",
    3 : "Closed Loop",
    4 : "Wait",
    5 : "Internal",
    6 : "Internal",
    7 : "Internal",
    8 : "Idle Run",
    9 : "Idle Stop",
    10 : "Internal",
    11 : "Internal",
    12 : "Internal",
}

const get_inverter_state_string = (n) => {
    if (inverter_state_map.hasOwnProperty(n)) {
        return inverter_state_map[n]
    } else return "not recognized state"
}

const inverter_vsm_state_map = {
    0 : "VSM Start",
    1 : "Pre-charge Init",
    2 : "Pre-charge Active",
    3 : "Pre-charge Complete",
    4 : "VSM Wait",
    5 : "VSM Ready",
    6 : "Motor Running",
    7 : "Blink Fault Code",
    14 : "Shutdown in Process - in key switch mode 1, user has turned the key switch to off position.",
    15 : "Recycle Power State - user must recycle power when the unit is in this state.",
}

const get_inverter_vsm_state_string = (n) => {
    if (inverter_vsm_state_map.hasOwnProperty(n)) {
        return inverter_vsm_state_map[n]
    } else return "not recognized state"

}

export default () => {

    const { frames } = useFrames();
    const dataRow = [
        "vcu_status",
        "vcu_error_code", // -> multiple 11
        
        "rear_sensor_status",
        "rear_sensor_error_code", // -> multiple 11

        "can_rx_timeout", // -> multiple 4

        "torque_feedback",
        "torque_command",

        "inverter_state",
        "inverter_post_fault_lo","inverter_post_fault_hi",
        "inverter_run_fault_lo","inverter_run_fault_hi",
        
    ]
    return (
        <GUIstyle title={"S & E"} frames={1} columns={1}>
            <StyledStatusError>
            <StyledDiv percent="95">
                <StyledSubDiv>
                    <Tooltip title={get_vcu_status_string(frames.vcu_status.value)} >
                        <Indicator factor={2} state={"white"} style={{color: "black"}} >
                            vcu {frames.vcu_status.value} {get_vcu_status_string(frames.vcu_status.value)}
                        </Indicator>
                    </Tooltip>
                    <Tooltip title={get_vcu_error_string(frames.vcu_error_code.value)} >
                        <Indicator factor={2} state={frames.vcu_error_code.value ? "red" : "green" } style={{color: "white", fontWeight: "bold"}} >
                            vcu error {frames.vcu_error_code.value}
                        </Indicator>
                    </Tooltip>
                </StyledSubDiv>
                <StyledSubDiv>
                    <Tooltip title={get_rear_sensor_status_string(frames.rear_sensor_status.value)}>
                        <Indicator factor={2} state={"white"} style={{color: "black"}} >
                            rear {frames.rear_sensor_status.value} {get_rear_sensor_status_string(frames.rear_sensor_status.value)}
                        </Indicator>
                    </Tooltip>
                    <Tooltip title={get_rear_error_string(frames.rear_sensor_error_code.value)} >
                        <Indicator factor={2} state={frames.rear_sensor_error_code.value ? "red" : "green"} style={{color: "white", fontWeight: "bold"}} >
                            rear error {frames.rear_sensor_error_code.value}
                        </Indicator>
                    </Tooltip>
                </StyledSubDiv>
                <StyledSubDiv>
                    <Tooltip title={get_can_rx_timeout_string(frames.can_rx_timeout.value)} >
                        <Indicator factor={1} state={frames.can_rx_timeout.value ? "red" : "green"} style={{color: "white", fontWeight: "bold"}} >
                            {frames.can_rx_timeout.value ? "" : "can rx timeout no error"} {frames.can_rx_timeout.value} {frames.can_rx_timeout.value ? get_can_rx_timeout_string(frames.can_rx_timeout.value) : ""}
                        </Indicator>
                    </Tooltip>
                </StyledSubDiv>
                <StyledSubDiv>
                    <Tooltip title={'torque command'}>
                        <Indicator factor={2} state={"white"} style={{color: "black", fontWeight:"bold"}} >
                            cmd {frames.torque_command.value} N
                        </Indicator>
                    </Tooltip>
                    <Tooltip title={'torque feedback'}>
                        <Indicator factor={2} state={"white"} style={{color: "black", fontWeight:"bold"}} >
                            feedback {frames.torque_feedback.value} N 
                        </Indicator>
                    </Tooltip>
                </StyledSubDiv>
                <StyledSubDiv>
                    <Tooltip title={`inverter state: ${get_inverter_state_string(frames.inverter_state.value)}`}>
                        <Indicator factor={2} state={"white"} style={{color: "black"}} >
                            inv {frames.inverter_state.value} {get_inverter_state_string(frames.inverter_state.value)}
                        </Indicator>
                    </Tooltip>
                    <Tooltip title={`inverter vsm state: ${get_inverter_vsm_state_string(frames.inverter_vsm_state.value)}`}>
                        <Indicator factor={2} state={"white"} style={{color: "black"}} >
                            vsm {frames.inverter_vsm_state.value} {get_inverter_vsm_state_string(frames.inverter_vsm_state.value)}
                        </Indicator>
                    </Tooltip>
                </StyledSubDiv>
                <StyledSubDiv>
                    <Tooltip title={() => {return frames.inverter_post_fault_hi.value.toString(16).toUpperCase() + " " + frames.inverter_post_fault_lo.value.toString(16).toUpperCase()}}>
                        <Indicator factor={2} state={frames.inverter_post_fault_hi.value == 0 && frames.inverter_post_fault_lo.value == 0 ? "green" : "red"} style={{color: "white", fontWeight: "bold"}} >
                            inv post fault {frames.inverter_post_fault_hi.value == 0 && frames.inverter_post_fault_lo.value == 0 ? "OK" : "ERROR" }
                        </Indicator>
                    </Tooltip>
                    <Tooltip title={() => {return frames.inverter_run_fault_hi.value.toString(16).toUpperCase() + " " + frames.inverter_run_fault_lo.value.toString(16).toUpperCase()}}>
                        <Indicator factor={2} state={frames.inverter_run_fault_hi.value == 0 && frames.inverter_run_fault_lo.value == 0 ? "green" : "red"} style={{color: "white", fontWeight: "bold"}}>
                            inv run fault {frames.inverter_run_fault_hi.value == 0 && frames.inverter_run_fault_lo.value == 0 ? "OK" : "ERROR"}
                        </Indicator>
                    </Tooltip>
                </StyledSubDiv>
            </StyledDiv>


            </StyledStatusError>
        </GUIstyle>
    )
}


