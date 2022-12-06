import GUIstyle from "./GUIstyle"
import { useFrames } from "../../routes/hooks/useFrames"

export default ({ baseCol }) => {

    const { frames } = useFrames();
    const dataRow = [
        "GPS_lon",
        "GPS_lat"
    ]
    
    return (
        <GUIstyle title={"GPS"} frames={1} columns={1} baseCol={baseCol}>
            {dataRow.map( (ele) => (
                <div key={ele}>{ele}:{frames[ele].value}</div>
            ))}
        </GUIstyle>
    )
}