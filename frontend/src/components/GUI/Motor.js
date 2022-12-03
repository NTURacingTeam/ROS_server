import GUIstyle from "./GUIstyle"
import { useFrames } from "../../routes/hooks/useFrames"

export default ({ baseCol, lastJsonMessage}) => {

    const { rows } = useFrames();
    const dataRow = [
        "control_board_temperature",
        "motor_temperature",
        "motor_speed",
        "input_voltage",
    ]

    return (
        <GUIstyle title={"Motor"} rows={1} columns={1} baseCol={baseCol}>
            {dataRow.map( (ele) => (
                <div key={ele}>{ele}:{rows[ele].value}</div>
            ))}
        </GUIstyle>
    )
}
