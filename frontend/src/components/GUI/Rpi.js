import GUIstyle from "./GUIstyle"
import { useFrames } from "../../routes/hooks/useFrames"
import styled from 'styled-components'
import {ReactComponent as GearShifter} from '../img/noun-car-gear-1265246.svg';

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
    height: 90%;

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

`

const StyledRpi = styled.div`
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
        
    ]
    return (
        <GUIstyle title={"Rpi"} frames={1} columns={1}>
            <StyledRpi>
            <StyledDiv percent="95">
                <StyledSubDiv>
                    <Indicator factor={2} state={"white"} style={{color: "black", fontWeight: "bold"}} >
                        cpu: {frames.cpu_usage.value} %
                    </Indicator>
                    <Indicator factor={2} state={"white"} style={{color: "black", fontWeight: "bold"}} >
                        cpu: {frames.cpu_temperature.value} °C
                    </Indicator>
                </StyledSubDiv>
                <StyledSubDiv>
                    <Indicator factor={1} state={"white"} style={{color: "black", fontWeight: "bold"}} >
                        memory: {frames.memory_usage.value} %
                    </Indicator>
                </StyledSubDiv>
                <StyledSubDiv>
                    <Indicator factor={1} state={"white"} style={{color: "black", fontWeight: "bold"}} >
                        swap usage {frames.swap_usage.value} %
                    </Indicator>
                </StyledSubDiv>
                <StyledSubDiv>
                    <Indicator factor={1} state={"white"} style={{color: "black", fontWeight: "bold"}} >
                        disk usage {frames.disk_usage.value} %
                    </Indicator>
                </StyledSubDiv>
            </StyledDiv>


            </StyledRpi>
        </GUIstyle>
    )
}


