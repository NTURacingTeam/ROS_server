import  { useState } from 'react'

const useFrames = () => {
    let [front_left_wheel_speed, setFront_left_wheel_speed] = useState(0)
	let [front_right_wheel_speed, setFront_right_wheel_speed] = useState(0)
	let [front_left_tyre_temperature_1, setFront_left_tyre_temperature_1] = useState(0)
	let [front_left_tyre_temperature_2, setFront_left_tyre_temperature_2] = useState(0)
	let [front_right_tyre_temperature_1, setFront_right_tyre_temperature_1] = useState(0)
	let [front_right_tyre_temperature_2, setFront_right_tyre_temperature_2] = useState(0)
	// front_box_2
	let [brake, setBrake] = useState(0)
	let [accelerator_1, setAccelerator_1] = useState(0)
	let [accelerator_2, setAccelerator_2] = useState(0)
	let [steer_angle, setSteer_angle] = useState(0)
	let [oil_pressure, setOil_pressure] = useState(0)
	let [accelerator_micro, setAccelerator_micro] = useState(0)
	let [brake_micro, setBrake_micro] = useState(0)
	// imu_acceleration
	let [imu_acceleration_x, setImu_acceleration_x] = useState(0)
	let [imu_acceleration_y, setImu_acceleration_y] = useState(0)
	let [imu_acceleration_z, setImu_acceleration_z] = useState(0)
	// imu_gyro
	let [imu_gyro_x, setImu_gyro_x] = useState(0)
	let [imu_gyro_y, setImu_gyro_y] = useState(0)
	let [imu_gyro_z, setImu_gyro_z] = useState(0)
	// imu_quaternion
	let [imu_quaternion_w, setImu_quaternion_w] = useState(0)
	let [imu_quaternion_x, setImu_quaternion_x] = useState(0)
	let [imu_quaternion_y, setImu_quaternion_y] = useState(0)
	let [imu_quaternion_z, setImu_quaternion_z] = useState(0)
	// muc_data
	let [control_board_temperature, setControl_board_temperature] = useState(0)
	let [motor_temperature, setMotor_temperature] = useState(0)
	let [motor_speed, setMotor_speed] = useState(0)
	let [input_voltage, setInput_voltage] = useState(0)
	// rear_box_1
	let [rear_left_wheel_speed, setRear_left_wheel_speed] = useState(0)
	let [rear_right_wheel_speed, setRear_right_wheel_speed] = useState(0)
	let [rear_left_tyre_temperature_1, setRear_left_tyre_temperature_1] = useState(0)
	let [rear_left_tyre_temperature_2, setRear_left_tyre_temperature_2] = useState(0)
	let [rear_right_tyre_temperature_1, setRear_right_tyre_temperature_1] = useState(0)
	let [rear_right_tyre_temperature_2, setRear_right_tyre_temperature_2] = useState(0)
	let [GPS_lon, setGPS_lon] = useState(0)
	let [GPS_lat, setGPS_lat] = useState(0)
	
	const rows = {
		// front_box_1
		"front_left_wheel_speed": { 
            value: front_left_wheel_speed, 
            update: setFront_left_wheel_speed,
            min: 0, max: 1,
        },
		"front_right_wheel_speed": { 
            value: front_right_wheel_speed, 
            update: setFront_right_wheel_speed,
            min: 0, max: 1,
        },
		"front_left_tyre_temperature_1": { 
            value: front_left_tyre_temperature_1, 
            update: setFront_left_tyre_temperature_1,
            min: 0, max: 125,
        },
		"front_left_tyre_temperature_2": { 
            value: front_left_tyre_temperature_2, 
            update: setFront_left_tyre_temperature_2,
            min: 0, max: 125,
        },
		"front_right_tyre_temperature_1": { 
            value: front_right_tyre_temperature_1, 
            update: setFront_right_tyre_temperature_1,
            min: 0, max: 125,
        },
		"front_right_tyre_temperature_2": { 
            value: front_right_tyre_temperature_2, 
            update: setFront_right_tyre_temperature_2,
            min: 0, max: 125,
        },
		// front_box_2
		"brake": { 
            value: brake, 
            update: setBrake,
            min: 0, max: 256,
        },
		"accelerator_1": { 
            value: accelerator_1, 
            update: setAccelerator_1,
            min: 0, max: 256,
        },
		"accelerator_2": { 
            value: accelerator_2, 
            update: setAccelerator_2,
            min: 0, max: 256,
        },
		"steer_angle": { 
            value: steer_angle, 
            update: setSteer_angle,
            min: 0, max: 512,
        },
		"oil_pressure": { 
            value: oil_pressure, 
            update: setOil_pressure,
            min: 0, max: 4086,
        },
		"accelerator_micro": { 
            value: accelerator_micro, 
            update: setAccelerator_micro,
            min: 0, max: 1,
        },
		"brake_micro": { 
            value: brake_micro, 
            update: setBrake_micro,
            min: 0, max: 1,
        },
		// imu_acceleration
		"imu_acceleration_x": { 
            value: imu_acceleration_x, 
            update: setImu_acceleration_x,
            min: 0, max: 2.5,
        },
		"imu_acceleration_y": { 
            value: imu_acceleration_y, 
            update: setImu_acceleration_y,
            min: 0, max: 2.5,
        },
		"imu_acceleration_z": { 
            value: imu_acceleration_z, 
            update: setImu_acceleration_z,
            min: 0, max: 2.5,
        },
		// imu_gyro
		"imu_gyro_x": { 
            value: imu_gyro_x, 
            update: setImu_gyro_x,
            min: 0, max: 0.5,
        },
		"imu_gyro_y": { 
            value: imu_gyro_y, 
            update: setImu_gyro_y,
            min: 0, max: 0.5,
        },
		"imu_gyro_z": { 
            value: imu_gyro_z, 
            update: setImu_gyro_z,
            min: 0, max: 0.5,
        },
		// imu_quaternion
		"imu_quaternion_w": { 
            value: imu_quaternion_w, 
            update: setImu_quaternion_w,
            min: 0, max: 0.00256,
        },
		"imu_quaternion_x": { 
            value: imu_quaternion_x, 
            update: setImu_quaternion_x,
            min: 0, max: 0.00256,
        },
		"imu_quaternion_y": { 
            value: imu_quaternion_y, 
            update: setImu_quaternion_y,
            min: 0, max: 0.00256,
        },
		"imu_quaternion_z": { 
            value: imu_quaternion_z, 
            update: setImu_quaternion_z,
            min: 0, max: 100,
        },
		// muc_data
		"control_board_temperature": { 
            value: control_board_temperature, 
            update: setControl_board_temperature,
            min: 0, max: 25.6,
        },
		"motor_temperature": { 
            value: motor_temperature, 
            update: setMotor_temperature,
            min: 0, max: 25.6,
        },
		"motor_speed": { 
            value: motor_speed, 
            update: setMotor_speed,
            min: 0, max: 256,
        },
		"input_voltage": { 
            value: input_voltage, 
            update: setInput_voltage,
            min: 0, max: 25.6,
        },
		// rear_box_1
		"rear_left_wheel_speed": { 
            value: rear_left_wheel_speed, 
            update: setRear_left_wheel_speed,
            min: 0, max: 1,
        },
		"rear_right_wheel_speed": { 
            value: rear_right_wheel_speed, 
            update: setRear_right_wheel_speed,
            min: 0, max: 1,
        },
		"rear_left_tyre_temperature_1": { 
            value: rear_left_tyre_temperature_1, 
            update: setRear_left_tyre_temperature_1,
            min: 0, max: 125,
        },
		"rear_left_tyre_temperature_2": { 
            value: rear_left_tyre_temperature_2, 
            update: setRear_left_tyre_temperature_2,
            min: 0, max: 125,
        },
		"rear_right_tyre_temperature_1": { 
            value: rear_right_tyre_temperature_1, 
            update: setRear_right_tyre_temperature_1,
            min: 0, max: 125,
        },
		"rear_right_tyre_temperature_2": { 
            value: rear_right_tyre_temperature_2, 
            update: setRear_right_tyre_temperature_2,
            min: 0, max: 125,
        },
		"GPS_lon": { 
            value: GPS_lon, 
            update: setGPS_lon,
            min: -180, max: 180,
        },
		"GPS_lat": { 
            value: GPS_lat, 
            update: setGPS_lat,
            min: -180, max: 180,
        },
	};

    return {
        rows
    }
}

export { useFrames }