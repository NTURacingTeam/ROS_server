import { useState, createContext, useContext } from 'react'

const FramesContext = createContext({
    rows: [],
    setRows: () => {},
    frames: {},
    batchUpdate: () => {}
});

const FramesProvider = (props) => {
    const [front_left_wheel_speed, setFront_left_wheel_speed] = useState(0)
	const [front_right_wheel_speed, setFront_right_wheel_speed] = useState(0)
	const [front_left_tyre_temperature_1, setFront_left_tyre_temperature_1] = useState(0)
	const [front_left_tyre_temperature_2, setFront_left_tyre_temperature_2] = useState(0)
	const [front_right_tyre_temperature_1, setFront_right_tyre_temperature_1] = useState(0)
	const [front_right_tyre_temperature_2, setFront_right_tyre_temperature_2] = useState(0)
	// front_box_2
	const [brake, setBrake] = useState(0)
	const [accelerator_1, setAccelerator_1] = useState(0)
	const [accelerator_2, setAccelerator_2] = useState(0)
	const [steer_angle, setSteer_angle] = useState(0)
	const [oil_pressure, setOil_pressure] = useState(0)
	const [accelerator_micro, setAccelerator_micro] = useState(0)
	const [brake_micro, setBrake_micro] = useState(0)
	// imu_acceleration
	const [imu_acceleration_x, setImu_acceleration_x] = useState(0)
	const [imu_acceleration_y, setImu_acceleration_y] = useState(0)
	const [imu_acceleration_z, setImu_acceleration_z] = useState(0)
	// imu_gyro
	const [imu_gyro_x, setImu_gyro_x] = useState(0)
	const [imu_gyro_y, setImu_gyro_y] = useState(0)
	const [imu_gyro_z, setImu_gyro_z] = useState(0)
	// imu_quaternion
	const [imu_quaternion_w, setImu_quaternion_w] = useState(0)
	const [imu_quaternion_x, setImu_quaternion_x] = useState(0)
	const [imu_quaternion_y, setImu_quaternion_y] = useState(0)
	const [imu_quaternion_z, setImu_quaternion_z] = useState(0)
	// muc_data
	const [control_board_temperature, setControl_board_temperature] = useState(0)
	const [motor_temperature, setMotor_temperature] = useState(0)
	const [motor_speed, setMotor_speed] = useState(0)
	const [input_voltage, setInput_voltage] = useState(0)
	// rear_box_1
	const [rear_left_wheel_speed, setRear_left_wheel_speed] = useState(0)
	const [rear_right_wheel_speed, setRear_right_wheel_speed] = useState(0)
	const [rear_left_tyre_temperature_1, setRear_left_tyre_temperature_1] = useState(0)
	const [rear_left_tyre_temperature_2, setRear_left_tyre_temperature_2] = useState(0)
	const [rear_right_tyre_temperature_1, setRear_right_tyre_temperature_1] = useState(0)
	const [rear_right_tyre_temperature_2, setRear_right_tyre_temperature_2] = useState(0)
	const [GPS_lon, setGPS_lon] = useState(0)
	const [GPS_lat, setGPS_lat] = useState(0)

    // torque controller
    const [is_activated, setIs_activated] = useState(0)
    const [apps_error, setApps_error] = useState(0)
    const [bse_error, setBse_error] = useState(0)
    const [bppc_error, setBppc_error] = useState(0)
    const [inverter_enable, setInverter_enable] = useState(0)
    const [direction_command, setDirection_command] = useState(0)
    const [torque_command, setTorque_command] = useState(0)


    const frames = {
        // front_box_1
        "front_left_wheel_speed": { 
            value: front_left_wheel_speed, 
            update: setFront_left_wheel_speed,
            min: 0, max: 110,
            catagory: "Wheel"
        },
        "front_right_wheel_speed": { 
            value: front_right_wheel_speed, 
            update: setFront_right_wheel_speed,
            min: 0, max: 110,
            catagory: "Wheel"
        },
        "front_left_tyre_temperature_1": { 
            value: front_left_tyre_temperature_1, 
            update: setFront_left_tyre_temperature_1,
            min: 0, max: 125,
            catagory: "Wheel"
        },
        "front_left_tyre_temperature_2": { 
            value: front_left_tyre_temperature_2, 
            update: setFront_left_tyre_temperature_2,
            min: 0, max: 125,
            catagory: "Wheel"
        },
        "front_right_tyre_temperature_1": { 
            value: front_right_tyre_temperature_1, 
            update: setFront_right_tyre_temperature_1,
            min: 0, max: 125,
            catagory: "Wheel"
        },
        "front_right_tyre_temperature_2": { 
            value: front_right_tyre_temperature_2, 
            update: setFront_right_tyre_temperature_2,
            min: 0, max: 125,
            catagory: "Wheel"
        },
        // front_box_2
        "brake": { 
            value: brake, 
            update: setBrake,
            min: 0, max: 255,
            catagory: "Pedal"
        },
        "accelerator_1": { 
            value: accelerator_1, 
            update: setAccelerator_1,
            min: 0, max: 255,
            catagory: "Pedal"
        },
        "accelerator_2": { 
            value: accelerator_2, 
            update: setAccelerator_2,
            min: 0, max: 255,
            catagory: "Pedal"
        },
        "steer_angle": { 
            value: steer_angle, 
            update: setSteer_angle,
            min: -90, max: 90,
            catagory: "Steer"
        },
        "oil_pressure": { 
            value: oil_pressure, 
            update: setOil_pressure,
            min: 0, max: 30,
            catagory: "Other"
        },
        "accelerator_micro": { 
            value: accelerator_micro, 
            update: setAccelerator_micro,
            min: 0, max: 1,
            catagory: "Pedal"
        },
        "brake_micro": { 
            value: brake_micro, 
            update: setBrake_micro,
            min: 0, max: 1,
            catagory: "Pedal"
        },
        // imu_acceleration
        "imu_acceleration_x": { 
            value: imu_acceleration_x, 
            update: setImu_acceleration_x,
            min: -10, max: 10,
            catagory: "IMU"
        },
        "imu_acceleration_y": { 
            value: imu_acceleration_y, 
            update: setImu_acceleration_y,
            min: -10, max: 10,
            catagory: "IMU"
        },
        "imu_acceleration_z": { 
            value: imu_acceleration_z, 
            update: setImu_acceleration_z,
            min: -10, max: 10,
            catagory: "IMU"
        },
        // imu_gyro
        "imu_gyro_x": { 
            value: imu_gyro_x, 
            update: setImu_gyro_x,
            min: -4, max: 4,
            catagory: "IMU"
        },
        "imu_gyro_y": { 
            value: imu_gyro_y, 
            update: setImu_gyro_y,
            min: -4, max: 4,
            catagory: "IMU"
        },
        "imu_gyro_z": { 
            value: imu_gyro_z, 
            update: setImu_gyro_z,
            min: -4, max: 4,
            catagory: "IMU"
        },
        // imu_quaternion
        "imu_quaternion_w": { 
            value: imu_quaternion_w, 
            update: setImu_quaternion_w,
            min: -1, max: 1,
            catagory: "IMU"
        },
        "imu_quaternion_x": { 
            value: imu_quaternion_x, 
            update: setImu_quaternion_x,
            min: -1, max: 1,
            catagory: "IMU"
        },
        "imu_quaternion_y": { 
            value: imu_quaternion_y, 
            update: setImu_quaternion_y,
            min: -1, max: 1,
            catagory: "IMU"
        },
        "imu_quaternion_z": { 
            value: imu_quaternion_z, 
            update: setImu_quaternion_z,
            min: -1, max: 1,
            catagory: "IMU"
        },
        // muc_data
        "control_board_temperature": { 
            value: control_board_temperature, 
            update: setControl_board_temperature,
            min: 0, max: 100,
            catagory: "Motor"
        },
        "motor_temperature": { 
            value: motor_temperature, 
            update: setMotor_temperature,
            min: 0, max: 100,
            catagory: "Motor"
        },
        "motor_speed": { 
            value: motor_speed, 
            update: setMotor_speed,
            min: 0, max: 500,
            catagory: "Motor"
        },
        "input_voltage": { 
            value: input_voltage, 
            update: setInput_voltage,
            min: 0, max: 600,
            catagory: "Motor"
        },
        // rear_box_1
        "rear_left_wheel_speed": { 
            value: rear_left_wheel_speed, 
            update: setRear_left_wheel_speed,
            min: 0, max: 110,
            catagory: "Wheel"
        },
        "rear_right_wheel_speed": { 
            value: rear_right_wheel_speed, 
            update: setRear_right_wheel_speed,
            min: 0, max: 110,
            catagory: "Wheel"
        },
        "rear_left_tyre_temperature_1": { 
            value: rear_left_tyre_temperature_1, 
            update: setRear_left_tyre_temperature_1,
            min: 0, max: 125,
            catagory: "Wheel"
        },
        "rear_left_tyre_temperature_2": { 
            value: rear_left_tyre_temperature_2, 
            update: setRear_left_tyre_temperature_2,
            min: 0, max: 125,
            catagory: "Wheel"
        },
        "rear_right_tyre_temperature_1": { 
            value: rear_right_tyre_temperature_1, 
            update: setRear_right_tyre_temperature_1,
            min: 0, max: 125,
            catagory: "Wheel"
        },
        "rear_right_tyre_temperature_2": { 
            value: rear_right_tyre_temperature_2, 
            update: setRear_right_tyre_temperature_2,
            min: 0, max: 125,
            catagory: "Wheel"
        },
        "GPS_lon": { 
            value: GPS_lon, 
            update: setGPS_lon,
            min: -180, max: 180,
            catagory: "GPS"
        },
        "GPS_lat": { 
            value: GPS_lat, 
            update: setGPS_lat,
            min: -180, max: 180,
            catagory: "GPS"
        },
        "is_activated":{
            value: is_activated,
            update: setIs_activated,
            min:0, max: 1,
            catagory: "Torque"
        },
        "apps_error":{
            value: apps_error,
            update: setApps_error,
            min:0, max: 1,
            catagory: "Torque"
        },
        "bse_error":{
            value: bse_error,
            update: setBse_error,
            min:0, max: 1,
            catagory: "Torque"
        },
        "bppc_error":{
            value: bppc_error,
            update: setBppc_error,
            min:0, max: 1,
            catagory: "Torque"
        },
        "inverter_enable":{
            value: inverter_enable,
            update: setInverter_enable,
            min:0, max: 1,
            catagory: "Torque"
        },
        "direction_command":{
            value: direction_command,
            update: setDirection_command,
            min:0, max: 1,
            catagory: "Torque"
        },
        "torque_command":{
            value: torque_command,
            update: setTorque_command,
            min:0, max: 134,
            catagory: "Torque"
        },
    }

    const initRows = [
        // front_box_1
        "front_left_wheel_speed",
        "front_right_wheel_speed",
        "front_left_tyre_temperature_1",
        "front_left_tyre_temperature_2",
        "front_right_tyre_temperature_1",
        "front_right_tyre_temperature_2",
        // front_box_2
        "brake",
        "accelerator_1",
        "accelerator_2",
        "steer_angle",
        "oil_pressure",
        "accelerator_micro",
        "brake_micro",
        // imu_acceleration
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
        // muc_data
        "control_board_temperature",
        "motor_temperature",
        "motor_speed",
        "input_voltage",
        // rear_box_1
        "rear_left_wheel_speed",
        "rear_right_wheel_speed",
        "rear_left_tyre_temperature_1",
        "rear_left_tyre_temperature_2",
        "rear_right_tyre_temperature_1",
        "rear_right_tyre_temperature_2",
        // GPS
        "GPS_lon",
        "GPS_lat",
        // torque
        "is_activated",
        "apps_error",
        "bse_error",  
        "bppc_error",  
        "inverter_enable",  
        "direction_command",  
        "torque_command" 
    ]

    // const initRows = Object.values(frames);

    // let rows = initRows;
    const [rows, setRows] = useState(initRows)

    const batchUpdate = (batch) => {
        Object.entries(frames).forEach(([key, ele]) => {
            if (batch.hasOwnProperty(key)) {
                ele.update(batch[key])
            }
        })
    }

    return (
        <FramesContext.Provider
			value={{frames, batchUpdate, rows, setRows}}
			{...props}
		/>
    )
}

const useFrames = () => useContext(FramesContext);

export { useFrames, FramesProvider }