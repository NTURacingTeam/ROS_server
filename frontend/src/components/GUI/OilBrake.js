import GUIstyle from "./GUIstyle"
import { useFrames } from "../../routes/hooks/useFrames"
import styled from 'styled-components'
import { Tooltip } from 'antd'

const U = styled.span`
    font-size: 0.2em;
`

const StyledNumber = styled.div`
    position: absolute;
    transform: translate(50%, -50%);
    top: 40%;
    // right: 0;
    right: 50%;
    // padding: auto;
    padding-top: 0;
    padding-bottom: 0;
    // top: auto;
    // bottom: auto;
    // background-color: red;
    font-size: 3em;
`

const NumberContainer = styled.div`
    position: relative;
    width: inherit;
    height: 50%;
    // background-color: green;
`

export default () => {

    const { frames } = useFrames();
    const { front_brake_pressure, reer_brake_pressure} = frames ;
    const dataRow = [
        "front_brake_pressure",
        "reer_brake_pressure",
    ]
    return (
        <GUIstyle title={"Oil Brake"} frames={1} columns={1}>
            <Tooltip title="front brake oil pressure" >
                <NumberContainer>
                    <StyledNumber>
                        {front_brake_pressure.value.toFixed(2)}<U> bar</U>
                    </StyledNumber>
                </NumberContainer>
            </Tooltip>
            <Tooltip title="rear brake oil pressure" >
                <NumberContainer>
                    <StyledNumber>
                        {front_brake_pressure.value.toFixed(2)}<U> bar</U>
                    </StyledNumber>
                </NumberContainer>
            </Tooltip>
        </GUIstyle>
    )
}


