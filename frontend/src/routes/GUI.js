import { useFrames } from "./hooks/useFrames"


export default () => {
    const { GUI } = useFrames();
    const { GPS, IMU, Motor, Other, Pedal, Steer, Wheel } = GUI;
    
    return (
        <div>
            <h1>GUI page</h1>
            <IMU />
            <GUI.GPS />
        </div>
    )
}