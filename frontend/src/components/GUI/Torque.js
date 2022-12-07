import GUIstyle from "./GUIstyle"
import { useFrames } from "../../routes/hooks/useFrames"

export default () => {

    const { frames } = useFrames();
    const dataRow = [
        "is_activated",
        "apps_error",
        "bse_error",
        "bppc_error",
        "inverter_enable",
        "direction_command",
        "torque_command",
    ]
    return (
        <GUIstyle title={"Torque"} frames={1} columns={1}>
            {dataRow.map( (ele) => (
                <div key={ele}>{ele}:{frames[ele].value}</div>
            ))}
        </GUIstyle>
    )
}


