import GUIstyle from "./GUIstyle"
import { useFrames } from "../../routes/hooks/useFrames"
import styled from "styled-components"
import {ReactComponent as SteerIcon} from "../img/steer.svg"

    //transform: rotate(${props => props.angle}}deg);
    //transform: rotate(180deg);
const StyledRotate = styled.div`
    transform: rotate(${
        props => {
            console.log('onStart:', props.angle);
            return props.angle;
        }
    }deg);
`
export default ({ baseCol}) => {

    const { rows } = useFrames();
    const Wheel = () => {  
        return (
            <div id="wheel">
            <div id="wheel_b">
                <div id="wheel_c">
                    <div id="wheel_d"></div>
                    <div id="beep"></div>
                </div>
            </div>
        </div>
        )
    }

    console.log("steer_angle: " + rows.steer_angle.value)

    const dataRow = [
        "steer_angle"
    ]
    return (
        <GUIstyle title={"Steer"} rows={1} columns={1} baseCol={baseCol}>
            {dataRow.map( (ele) => (
                <div key={ele}>{ele}:{rows[ele].value}</div>
            ))}
            <StyledRotate angle={rows.steer_angle.value}>
                <SteerIcon />
            </StyledRotate>
        </GUIstyle>
    )
}