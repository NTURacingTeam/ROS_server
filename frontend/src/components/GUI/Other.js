import GUIstyle from "./GUIstyle"
import { useFrames } from "../../routes/hooks/useFrames"

export default ({ baseCol }) => {

    const { rows } = useFrames();
    const dataRow = [
        "oil_pressure"
    ]
    return (
        <GUIstyle title={"Other"} rows={1} columns={1} baseCol={baseCol}>
            {dataRow.map( (ele) => (
                <div key={ele}>{ele}:{rows[ele].value}</div>
            ))}
        </GUIstyle>
    )
}
