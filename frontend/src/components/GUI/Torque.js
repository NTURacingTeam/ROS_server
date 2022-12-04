import GUIstyle from "./GUIstyle"
import { useFrames } from "../../routes/hooks/useFrames"

export default ({ baseCol }) => {

    const { rows } = useFrames();
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
        <GUIstyle title={"Torque"} rows={1} columns={1} baseCol={baseCol}>
            {dataRow.map( (ele) => (
                <div key={ele}>{ele}:{rows[ele].value}</div>
            ))}
        </GUIstyle>
    )
}


