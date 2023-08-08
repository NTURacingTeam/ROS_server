import GUIstyle from "./GUIstyle"
import { useFrames } from "../../routes/hooks/useFrames"

export default () => {

    const { frames } = useFrames();
    const dataRow = [
        "gps_fix_latitude",
        "gps_fix_longitude",
        "gps_fix_altitude",
        "gps_vel_linear_x",
        "gps_vel_linear_y",
    ]
    
    return (
        <GUIstyle title={"GPS"} frames={1} columns={1}>
            {dataRow.map( (ele) => (
                <div key={ele}>{ele}:{frames[ele].value}</div>
            ))}
        </GUIstyle>
    )
}