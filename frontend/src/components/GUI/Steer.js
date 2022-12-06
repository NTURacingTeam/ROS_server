import GUIstyle from "./GUIstyle"
import { useFrames } from "../../routes/hooks/useFrames"

export default ({ baseCol, lastJsonMessage}) => {

    const { frames: frames } = useFrames();
    const dataRow = [
        "steer_angle"
    ]
    return (
        <GUIstyle title={"Steer"} frames={1} columns={1} baseCol={baseCol}>
            {dataRow.map( (ele) => (
                <div key={ele}>{ele}:{frames[ele].value}</div>
            ))}
        </GUIstyle>
    )
}