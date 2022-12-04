
import { useState } from "react"
import styled from "styled-components"

const StyledDiv = styled.div`
    background: red;
    width: 100px;
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    content-align: center;
    transform: rotate(${props => props.angle}deg);
`

export default () => {
    const [angle, setAngle] = useState(0);
    
    const handleRotate = () => {
        const newAngle = (angle + 60) % 360;
        setAngle(newAngle);
    }

    return (
        <>
            <StyledDiv angle={angle}>test rotate</StyledDiv>
            <button onClick={handleRotate}>rotate</button>
        </>
    )
}