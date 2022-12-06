import GUIstyle from "./GUIstyle"
import { useFrames } from "../../routes/hooks/useFrames"

export default ({ baseCol }) => {

    const { frames } = useFrames();
    const dataRow = [
        "oil_pressure"
    ]
    return (
        <GUIstyle title={"Other"} frames={1} columns={1} baseCol={baseCol}>
            {dataRow.map( (ele) => (
                <div key={ele}>{ele}:{frames[ele].value}</div>
            ))}
        </GUIstyle>
    )
}
