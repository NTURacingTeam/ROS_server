import GUIstyle from "./GUIstyle"
import { useFrames } from "../../routes/hooks/useFrames"

export default ({ baseCol, lastJsonMessage}) => {

    const { rows } = useFrames();
    const dataRow = [
		// rear_box_1
		"rear_left_wheel_speed",
		"rear_right_wheel_speed",
		"rear_left_tyre_temperature_1",
		"rear_left_tyre_temperature_2",
		"rear_right_tyre_temperature_1",
		"rear_right_tyre_temperature_2",
        // front_box_1
		"front_left_wheel_speed",
		"front_right_wheel_speed",
		"front_left_tyre_temperature_1",
		"front_left_tyre_temperature_2",
		"front_right_tyre_temperature_1",
		"front_right_tyre_temperature_2",
    ]
    return (
        <GUIstyle title={"Wheel"} rows={1} columns={1} baseCol={baseCol}>
            {dataRow.map( (ele) => (
                <div key={ele}>{ele}:{rows[ele].value}</div>
            ))}
        </GUIstyle>
    )
}

