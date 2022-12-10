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
    font-size: 4em;
`

const NumberContainer = styled.div`
    position: relative;
    width: inherit;
    height: inherit;
    // background-color: green;
`

export default () => {

    const { frames } = useFrames();
    const { oil_pressure } = frames ;
    const dataRow = [
        "oil_pressure"
    ]
    return (
        <GUIstyle title={"Other"} frames={1} columns={1}>
            <Tooltip title="brake oil pressure" >
                <NumberContainer>
                    <StyledNumber>
                        {oil_pressure.value}<U> bar</U>
                    </StyledNumber>
                </NumberContainer>
            </Tooltip>
        </GUIstyle>
    )
}
