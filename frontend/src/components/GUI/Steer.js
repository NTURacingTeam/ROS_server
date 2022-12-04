import GUIstyle from "./GUIstyle"
import { useFrames } from "../../routes/hooks/useFrames"
import styled from "styled-components"
import {ReactComponent as SteerIcon} from "../img/steer.svg"

    //transform: rotate(${props => props.angle}}deg);
    //transform: rotate(180deg);
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
    width: 4em;
    padding: 1em;
    font-size: 1.4em;
`
export default ({ baseCol}) => {

    const { rows } = useFrames();

    const dataRow = [
        "steer_angle"
    ]
    return (
        <GUIstyle title={"Steer"} rows={1} columns={1} baseCol={baseCol}>
            <StyledRotate angle={rows.steer_angle.value}>
                <SteerIcon />
            </StyledRotate>
            <Description>
                {rows.steer_angle.value}
            </Description>
        </GUIstyle>
    )
}