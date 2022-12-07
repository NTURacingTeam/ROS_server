import GUIstyle from "./GUIstyle"
import { useFrames } from "../../routes/hooks/useFrames"

export default () => {

    const { frames } = useFrames();
    const dataRow = [
        "control_board_temperature",
        "motor_temperature",
        "motor_speed",
        "input_voltage",
    ]

    return (
        <GUIstyle title={"Motor"} frames={1} columns={1}>
            {dataRow.map( (ele) => (
                <div key={ele}>{ele}:{frames[ele].value}</div>
            ))}
        </GUIstyle>
    )
}
