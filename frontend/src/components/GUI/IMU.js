import GUIstyle from "./GUIstyle"
import { useFrames } from "../../routes/hooks/useFrames"

export default ({ baseCol }) => {

    const { frames } = useFrames();
    const dataRow = [
        "imu_acceleration_x",
        "imu_acceleration_y",
        "imu_acceleration_z",
        // imu_gyro
        "imu_gyro_x",
        "imu_gyro_y",
        "imu_gyro_z",
        // imu_quaternion
        "imu_quaternion_w",
        "imu_quaternion_x",
        "imu_quaternion_y",
        "imu_quaternion_z",
    ]
    return (
        <GUIstyle title={"IMU"} frames={1} columns={1} baseCol={baseCol}>
            {dataRow.map( (ele) => (
                <div key={ele}>{ele}:{frames[ele].value}</div>
            ))}
        </GUIstyle>
    )
}


