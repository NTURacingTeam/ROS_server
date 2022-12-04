import GUIstyle from "./GUIstyle"
import { useFrames } from "../../routes/hooks/useFrames"

export default ({ baseCol }) => {

    const { rows } = useFrames();
    const dataRow = [
        "GPS_lon",
        "GPS_lat"
    ]
    
    return (
        <GUIstyle title={"GPS"} rows={1} columns={1} baseCol={baseCol}>
            {dataRow.map( (ele) => (
                <div key={ele}>{ele}:{rows[ele].value}</div>
            ))}
        </GUIstyle>
    )
}