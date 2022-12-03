import GUIstyle from "./GUIstyle"
import { useFrames } from "../../routes/hooks/useFrames"

export default ({ baseCol, lastJsonMessage}) => {

    const { rows } = useFrames();
    const dataRow = [
        "brake",
        "accelerator_1",
        "accelerator_2",
        "accelerator_micro",
        "brake_micro"
    ]
    return (
        <GUIstyle title={"Pedal"} rows={1} columns={1} baseCol={baseCol}>
            {dataRow.map( (ele) => (
                <div key={ele}>{ele}:{rows[ele].value}</div>
            ))}
        </GUIstyle>
    )
}