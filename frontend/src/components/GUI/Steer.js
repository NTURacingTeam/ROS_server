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
    border-radius: 0.3rem;
    width: min-content;
    width: 3rem;
    padding: 0.1rem;
    font-size: 1.4rem;
`
export default () => {

    const { frames } = useFrames();

    const dataRow = [
        "steer_angle"
    ]
    return (
        <GUIstyle title={"Steer"} rows={1} columns={1}>
            <StyledRotate angle={frames.steer_angle.value}>
                <SteerIcon />
            </StyledRotate>
        </GUIstyle>
    )
}