import GUIstyle from "./GUIstyle"
import { useFrames } from "../../routes/hooks/useFrames"
import styled from "styled-components"
import {ReactComponent as SteerIcon} from "../img/steer.svg"

const StyledRotate = styled.div`
    padding: 5rem;
    transform: rotate(${
        props => {
            return props.angle;
        }
    }deg);
`
const Description = styled.div`
    position: absolute;
    transform: translate(50%, 0);
    top: 50%;
    right: 50%;
    background: rgba(255, 0, 0, 0.7);
    border-radius: 0.3em;
    width: min-content;
    width: 3em;
    padding: 0.1em;
    font-size: 1.4em;
`
export default () => {

    const { frames } = useFrames();

    const dataRow = [
        "steer_angle"
    ]
    return (
        <GUIstyle title={"Steer"} rows={1} columns={1}>
            <StyledRotate angle={frames.steer_angle.value*180/3.1415926}>
                <SteerIcon />
            </StyledRotate>
            <Description>
                {(frames.steer_angle.value*180/3.1415926).toFixed(2)}
            </Description>
        </GUIstyle>
    )
}