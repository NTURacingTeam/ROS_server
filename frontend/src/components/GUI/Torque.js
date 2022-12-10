import GUIstyle from "./GUIstyle"
import { useFrames } from "../../routes/hooks/useFrames"
import styled from 'styled-components'
import {ReactComponent as GearShifter} from '../img/noun-car-gear-1265246.svg';

const StyledDiv = styled.div`
    width: 100%;
    height: ${({percent})=>percent}%;
    display: flex;
    // font-size:  1.8em;
`
const StyledSubDiv = styled.div`
    width: 50%;
    height: 100%;
	// align-content: right;

    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-between;
`

const StyledEle = styled.div`
	align-text: right;
`

const Indicator = styled.div`
    // background-color: green;
    padding: auto;
    height: 100%;

    display: flex;
    align-items:center;
    justify-content:center;

    width: inherit;
    vertical-align: middle;

    // aspect-ratio: 1;
    // border-radius: 50%;
    min-width: max-content;
    max-width: 7em;

    background-color: ${({ state }) => state };
    margin: 0.4em;
    padding: 0.3em;

    border-radius: 0.2em;

`

const StyledTorqe = styled.div`
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

export default () => {

    const { frames } = useFrames();
    const dataRow = [
        "is_activated",
        "apps_error",
        "bse_error",
        "bppc_error",
        "inverter_enable",
        "direction_command",
        "torque_command",
    ]
    return (
        <GUIstyle title={"Torque"} frames={1} columns={1}>
            <StyledTorqe>
            <StyledDiv percent="60">
                <StyledSubDiv>
                    <Indicator state={frames.apps_error.value == 0 ? "green" : "red"}>
                        APPS: {frames.apps_error.value == 0 ? "OK" : "ERROR"}
                    </Indicator>
                    <Indicator state={frames.apps_error.value == 0 ? "green" : "red"}>
                        BSE: {frames.bse_error.value == 0 ? "OK" : "ERROR"}
                    </Indicator>
                    <Indicator state={frames.apps_error.value == 0 ? "green" : "red"}>
                        BPPC: {frames.bppc_error.value == 0 ? "OK" : "ERROR"}
                    </Indicator>
                </StyledSubDiv>
                <StyledSubDiv>
                    <Indicator state={frames.is_activated.value == 0 ? "red" : "green"}>
                        {frames.is_activated.value == 0 ? "not RTD" : "RTD"}
                    </Indicator>
                    <Indicator state={frames.inverter_enable.value == 0 ? "red" : "green"}>
                        inverter {frames.inverter_enable.value == 0 ? "OFF" : "ON"}
                    </Indicator>
                    <Indicator state={frames.direction_command.value == 0 ? "white" : "white"} style={{color: "black", fontWeight: "bold"}}>
                        <GearShifter height={"1em"} width={"1em"}style={{fill: "black"}}/><span style={{width: "0.5em"}} /> {frames.direction_command.value == 0 ? "D" : "P"}
                    </Indicator>
                </StyledSubDiv>
            </StyledDiv>
            <StyledDiv percent="30" style={{display: "flex", alignItems:"center", justifyContent:"center"}}>
                <div>
                    <span style={{fontSize: "4em"}}>{frames.torque_command.value}</span><span> N/m</span>
                </div>
            </StyledDiv>


            </StyledTorqe>
        </GUIstyle>
    )
}


