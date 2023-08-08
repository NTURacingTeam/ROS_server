import { useState, createContext, useContext } from 'react'

const FramesContext = createContext({
    rows: [],
    setRows: () => {},
    frames: {},
    batchUpdate: () => {},
    accumulatorUpdate: () => {},
    accumulator_voltage: [[]],
    accumulator_temperature: [[]],
});

const accumulator_voltage_valid = [
    [ true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true], 
    [ true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true], 
    [ true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true], 
    [ true,  true,  true,  true,  true,  true,  true,  true,  true,  true, false, false], 
    [ true,  true,  true,  true,  true,  true,  true,  true,  true,  true, false, false], 
    [ true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true, false], 
    [ true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true, false]
]
  
const accumulator_temperature_valid = [
    [ true,  true,  true,  true,  true,  true,  true,  true, false, false,  true,  true], 
    [ true,  true,  true,  true,  true,  true,  true,  true,  true, false,  true,  true], 
    [ true, false,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true], 
    [ true,  true,  true,  true,  true,  true,  true, false,  true,  true,  true,  true], 
    [ true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true], 
    [false,  true, false,  true,  true,  true,  true,  true,  true, false,  true,  true], 
    [ true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true, false], 
]

const array7 = [ ...Array(7)]
const array12 = [ ...Array(12)]

const FramesProvider = (props) => {
    const [brake, setBrake] = useState(0) ;
    const [accelerator_1, setAccelerator_1] = useState(0) ;
    const [accelerator_2, setAccelerator_2] = useState(0) ;
    const [steer_angle, setsteer_angle] = useState(0) ;
    const [brake_micro, setBrake_micro] = useState(0) ;
    const [accelerator_micro, setAccelerator_micro] = useState(0) ;
    const [front_left_wheel_speed, setFront_left_wheel_speed] = useState(0) ;
    const [front_right_wheel_speed, setFront_right_wheel_speed] = useState(0) ;
    const [front_brake_pressure, setFront_brake_pressure] = useState(0) ;
    const [front_left_suspension, setFront_left_suspension] = useState(0) ;
    const [front_right_suspension, setFront_right_suspension] = useState(0) ;
    const [front_left_tire_temperature_1, setFront_left_tire_temperature_1] = useState(0) ;
    const [front_left_tire_temperature_2, setFront_left_tire_temperature_2] = useState(0) ;
    const [front_left_tire_temperature_3, setFront_left_tire_temperature_3] = useState(0) ;
    const [front_left_tire_temperature_4, setFront_left_tire_temperature_4] = useState(0) ;
    const [front_right_tire_temperature_1, setFront_right_tire_temperature_1] = useState(0) ;
    const [front_right_tire_temperature_2, setFront_right_tire_temperature_2] = useState(0) ;
    const [front_right_tire_temperature_3, setFront_right_tire_temperature_3] = useState(0) ;
    const [front_right_tire_temperature_4, setFront_right_tire_temperature_4] = useState(0) ;
    const [rear_left_wheel_speed, setRear_left_wheel_speed] = useState(0) ;
    const [rear_right_wheel_speed, setRear_right_wheel_speed] = useState(0) ;
    const [rear_left_suspension, setRear_left_suspension] = useState(0) ;
    const [rear_right_suspension, setRear_right_suspension] = useState(0) ;
    const [inverter_control_board_temperature, setInverter_control_board_temperature] = useState(0) ;
    const [motor_temperature, setMotor_temperature] = useState(0) ;
    const [motor_speed, setMotor_speed] = useState(0) ;
    const [imu_acceleration_x, setImu_acceleration_x] = useState(0) ;
    const [imu_acceleration_y, setImu_acceleration_y] = useState(0) ;
    const [imu_acceleration_z, setImu_acceleration_z] = useState(0) ;
    const [imu_angular_velocity_x, setImu_angular_velocity_x] = useState(0) ;
    const [imu_angular_velocity_y, setImu_angular_velocity_y] = useState(0) ;
    const [imu_angular_velocity_z, setImu_angular_velocity_z] = useState(0) ;
    const [imu_quaternion_w, setImu_quaternion_w] = useState(0) ;
    const [imu_quaternion_x, setImu_quaternion_x] = useState(0) ;
    const [imu_quaternion_y, setImu_quaternion_y] = useState(0) ;
    const [imu_quaternion_z, setImu_quaternion_z] = useState(0) ;
    const [gps_fix_latitude, setGps_fix_latitude] = useState(0) ;
    const [gps_fix_longitude, setGps_fix_longitude] = useState(0) ;
    const [gps_fix_altitude, setGps_fix_altitude] = useState(0) ;
    const [gps_vel_linear_x, setGps_vel_linear_x] = useState(0) ;
    const [gps_vel_linear_y, setGps_vel_linear_y] = useState(0) ;
    const [rear_brake_pressure, setRear_brake_pressure] = useState(0) 
    const [rear_left_tire_temperature_1, setRear_left_tire_temperature_1] = useState(0)
    const [rear_left_tire_temperature_2, setRear_left_tire_temperature_2] = useState(0)
    const [rear_left_tire_temperature_3, setRear_left_tire_temperature_3] = useState(0)
    const [rear_left_tire_temperature_4, setRear_left_tire_temperature_4] = useState(0)
    const [rear_right_tire_temperature_1, setRear_right_tire_temperature_1] = useState(0)
    const [rear_right_tire_temperature_2, setRear_right_tire_temperature_2] = useState(0)
    const [rear_right_tire_temperature_3, setRear_right_tire_temperature_3] = useState(0)
    const [rear_right_tire_temperature_4, setRear_right_tire_temperature_4] = useState(0)
   
    const [vcu_status, setVcu_status] = useState(null)
    const [vcu_error_code, setVcu_error_code] = useState(null)
    const [rear_sensor_status, setRear_sensor_status] = useState(null)
    const [rear_sensor_error_code, setRear_sensor_error_code] = useState(null)
    

    const [inverter_post_fault_lo, setInverter_post_fault_lo] = useState(0)
    const [inverter_post_fault_hi, setInverter_post_fault_hi] = useState(0)
    const [inverter_run_fault_lo, setInverter_run_fault_lo] = useState(0)
    const [inverter_run_fault_hi, setInverter_run_fault_hi] = useState(0)
    
    const [torque_command, setTorque_command] = useState(0)
    const [torque_feedback, setTorque_feedback] = useState(0)
    const [inverter_dc_bus_voltage, setInverter_dc_bus_voltage] = useState(0)
    const [inverter_hot_spot_temperature, setInverter_hot_spot_temperature] = useState(0)
    const [inverter_dc_bus_current, setInverter_dc_bus_current] = useState(0)

    const [cpu_usage, setCpu_usage] = useState(null) ; 
    const [cpu_temperature, setCpu_temperature] = useState(null) ; 
    const [memory_usage, setMemory_usage] = useState(null) ; 
    const [swap_usage, setSwap_usage] = useState(null) ; 
    const [disk_usage, setDisk_usage] = useState(null) ;
    
    const [bms_error_code, setBms_error_code] = useState(null);
    const [can_rx_timeout, setCan_rx_timeout] = useState(null);
    const [gps_fix_status, setGps_fix_status] = useState(null);
    const [inverter_state, setInverter_state] = useState(null);
    const [inverter_vsm_state, setInverter_vsm_state] = useState(null);
    const [state_of_charge, setState_of_charge] = useState(null);
    
    const [accumulator_voltage, setAccumulator_voltage] = useState([]) ; 
    const [accumulator_temperature, setAccumulator_temperature] = useState([]) ; 


    const frames = {
        "brake": {
            value: brake,
            update: setBrake, 
            min: 0, max: 1,
            catagory: "Pedal"
        },
        "accelerator_1": {
            value: accelerator_1, 
            update: setAccelerator_1, 
            min: 0, max: 1,
            catagory: "Pedal"
        },
        "accelerator_2": {
            value: accelerator_2, 
            update: setAccelerator_2, 
            min: 0, max: 1,
            catagory: "Pedal"
        },
        "steer_angle": {
            value: steer_angle, 
            update: setsteer_angle, 
            min: 0, max: 110,
            catagory: "Steer"
        },
        "brake_micro": {
            value: brake_micro, 
            update: setBrake_micro, 
            min: 0, max: 1,
            catagory: "Pedal"
        },
        "accelerator_micro": {
            value: accelerator_micro, 
            update: setAccelerator_micro, 
            min: 0, max: 1,
            catagory: "Pedal"
        },
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
        "front_brake_pressure": {
            value: front_brake_pressure, 
            update: setFront_brake_pressure, 
            min: 0, max: 110,
            catagory: "Brake"
        },
        "front_left_suspension": {
            value: front_left_suspension, 
            update: setFront_left_suspension, 
            min: 0, max: 110,
            catagory: "Wheel"
        },
        "front_right_suspension": {
            value: front_right_suspension, 
            update: setFront_right_suspension, 
            min: 0, max: 110,
            catagory: "Wheel"
        },
        "front_left_tire_temperature_1": {
            value: front_left_tire_temperature_1, 
            update: setFront_left_tire_temperature_1, 
            min: 0, max: 110,
            catagory: "Wheel"
        },
        "front_left_tire_temperature_2": {
            value: front_left_tire_temperature_2, 
            update: setFront_left_tire_temperature_2, 
            min: 0, max: 110,
            catagory: "Wheel"
        },
        "front_left_tire_temperature_3": {
            value: front_left_tire_temperature_3, 
            update: setFront_left_tire_temperature_3, 
            min: 0, max: 110,
            catagory: "Wheel"
        },
        "front_left_tire_temperature_4": {
            value: front_left_tire_temperature_4, 
            update: setFront_left_tire_temperature_4, 
            min: 0, max: 110,
            catagory: "Wheel"
        },
        "front_right_tire_temperature_1": {
            value: front_right_tire_temperature_1, 
            update: setFront_right_tire_temperature_1, 
            min: 0, max: 110,
            catagory: "Wheel"
        },
        "front_right_tire_temperature_2": {
            value: front_right_tire_temperature_2, 
            update: setFront_right_tire_temperature_2, 
            min: 0, max: 110,
            catagory: "Wheel"
        },
        "front_right_tire_temperature_3": {
            value: front_right_tire_temperature_3, 
            update: setFront_right_tire_temperature_3, 
            min: 0, max: 110,
            catagory: "Wheel"
        },
        "front_right_tire_temperature_4": {
            value: front_right_tire_temperature_4, 
            update: setFront_right_tire_temperature_4, 
            min: 0, max: 110,
            catagory: "Wheel"
        },
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
        "rear_left_suspension": {
            value: rear_left_suspension, 
            update: setRear_left_suspension, 
            min: 0, max: 110,
            catagory: "Wheel"
        },
        "rear_right_suspension": {
            value: rear_right_suspension, 
            update: setRear_right_suspension, 
            min: 0, max: 110,
            catagory: "Wheel"
        },
        "inverter_control_board_temperature": {
            value: inverter_control_board_temperature, 
            update: setInverter_control_board_temperature, 
            min: 0, max: 110,
            catagory: "Motor"
        },
        "motor_temperature": {
            value: motor_temperature, 
            update: setMotor_temperature, 
            min: 0, max: 110,
            catagory: "Motor"
        },
        "motor_speed": {
            value: motor_speed, 
            update: setMotor_speed, 
            min: 0, max: 110,
            catagory: "Motor"
        },
        "imu_acceleration_x": {
            value: imu_acceleration_x, 
            update: setImu_acceleration_x, 
            min: 0, max: 110,
            catagory: "IMU"
        },
        "imu_acceleration_y": {
            value: imu_acceleration_y, 
            update: setImu_acceleration_y, 
            min: 0, max: 110,
            catagory: "IMU"
        },
        "imu_acceleration_z": {
            value: imu_acceleration_z, 
            update: setImu_acceleration_z, 
            min: 0, max: 110,
            catagory: "IMU"
        },
        "imu_angular_velocity_x": {
            value: imu_angular_velocity_x, 
            update: setImu_angular_velocity_x, 
            min: 0, max: 110,
            catagory: "IMU"
        },
        "imu_angular_velocity_y": {
            value: imu_angular_velocity_y, 
            update: setImu_angular_velocity_y, 
            min: 0, max: 110,
            catagory: "IMU"
        },
        "imu_angular_velocity_z": {
            value: imu_angular_velocity_z, 
            update: setImu_angular_velocity_z, 
            min: 0, max: 110,
            catagory: "IMU"
        },
        "imu_quaternion_w": {
            value: imu_quaternion_w, 
            update: setImu_quaternion_w, 
            min: 0, max: 110,
            catagory: "IMU"
        },
        "imu_quaternion_x": {
            value: imu_quaternion_x, 
            update: setImu_quaternion_x, 
            min: 0, max: 110,
            catagory: "IMU"
        },
        "imu_quaternion_y": {
            value: imu_quaternion_y, 
            update: setImu_quaternion_y, 
            min: 0, max: 110,
            catagory: "IMU"
        },
        "imu_quaternion_z": {
            value: imu_quaternion_z, 
            update: setImu_quaternion_z, 
            min: 0, max: 110,
            catagory: "IMU"
        },
        "gps_fix_latitude": {
            value: gps_fix_latitude, 
            update: setGps_fix_latitude, 
            min: 0, max: 110,
            catagory: "GPS"
        },
        "gps_fix_longitude": {
            value: gps_fix_longitude, 
            update: setGps_fix_longitude, 
            min: 0, max: 110,
            catagory: "GPS"
        },
        "gps_fix_altitude": {
            value: gps_fix_altitude, 
            update: setGps_fix_altitude, 
            min: 0, max: 110,
            catagory: "GPS"
        },
        "gps_vel_linear_x": {
            value: gps_vel_linear_x, 
            update: setGps_vel_linear_x, 
            min: 0, max: 110,
            catagory: "GPS"
        },
        "gps_vel_linear_y": {
            value: gps_vel_linear_y, 
            update: setGps_vel_linear_y, 
            min: 0, max: 110,
            catagory: "GPS"
        },
        "rear_brake_pressure": {
            value: rear_brake_pressure,
            update: setRear_brake_pressure,
            min: 0, max: 110,
            catagory: "GPS"
        },  
        "rear_left_tire_temperature_1": {
            value: rear_left_tire_temperature_1,
            update: setRear_left_tire_temperature_1,
            min: 0, max: 110,
            catagory: "Wheel"
        }, 
        "rear_left_tire_temperature_2": {
            value: rear_left_tire_temperature_2,
            update: setRear_left_tire_temperature_2,
            min: 0, max: 110,
            catagory: "Wheel"
        }, 
        "rear_left_tire_temperature_3": {
            value: rear_left_tire_temperature_3,
            update: setRear_left_tire_temperature_3,
            min: 0, max: 110,
            catagory: "Wheel"
        }, 
        "rear_left_tire_temperature_4": {
            value: rear_left_tire_temperature_4,
            update: setRear_left_tire_temperature_4,
            min: 0, max: 110,
            catagory: "Wheel"
        }, 
        "rear_right_tire_temperature_1": {
            value: rear_right_tire_temperature_1,
            update: setRear_right_tire_temperature_1,
            min: 0, max: 110,
            catagory: "Wheel"
        }, 
        "rear_right_tire_temperature_2": {
            value: rear_right_tire_temperature_2,
            update: setRear_right_tire_temperature_2,
            min: 0, max: 110,
            catagory: "Wheel"
        }, 
        "rear_right_tire_temperature_3": {
            value: rear_right_tire_temperature_3,
            update: setRear_right_tire_temperature_3,
            min: 0, max: 110,
            catagory: "Wheel"
        }, 
        "rear_right_tire_temperature_4": {
            value: rear_right_tire_temperature_4,
            update: setRear_right_tire_temperature_4,
            min: 0, max: 110,
            catagory: "Wheel"
        }, 
        "vcu_status": {
            value: vcu_status,
            update: setVcu_status,
            min: 0, max: 110,
            catagory: "Status"
        }, 
        "vcu_error_code": {
            value: vcu_error_code,
            update: setVcu_error_code,
            min: 0, max: 110,
            catagory: "Status"
        }, 
        "rear_sensor_status": {
            value: rear_sensor_status,
            update: setRear_sensor_status,
            min: 0, max: 110,
            catagory: "Status"
        }, 
        "rear_sensor_error_code": {
            value: rear_sensor_error_code,
            update: setRear_sensor_error_code,
            min: 0, max: 110,
            catagory: "Status"
        }, 
        "inverter_post_fault_lo": {
            value: inverter_post_fault_lo,
            update: setInverter_post_fault_lo,
            min: 0, max: 110,
            catagory: "Status"
        }, 
        "inverter_post_fault_hi": {
            value: inverter_post_fault_hi,
            update: setInverter_post_fault_hi,
            min: 0, max: 110,
            catagory: "Status"
        }, 
        "inverter_run_fault_lo": {
            value: inverter_run_fault_lo,
            update: setInverter_run_fault_lo,
            min: 0, max: 110,
            catagory: "Status"
        }, 
        "inverter_run_fault_hi": {
            value: inverter_run_fault_hi,
            update: setInverter_run_fault_hi,
            min: 0, max: 110,
            catagory: "Status"
        }, 
        "torque_command": {
            value: torque_command,
            update: setTorque_command,
            min: 0, max: 110,
            catagory: "Status"
        }, 
        "torque_feedback": {
            value: torque_feedback,
            update: setTorque_feedback,
            min: 0, max: 110,
            catagory: "Status"
        }, 
        "inverter_dc_bus_voltage": {
            value: inverter_dc_bus_voltage,
            update: setInverter_dc_bus_voltage,
            min: 0, max: 110,
            catagory: "Status"
        }, 
        "inverter_hot_spot_temperature": {
            value: inverter_hot_spot_temperature,
            update: setInverter_hot_spot_temperature,
            min: 0, max: 110,
            catagory: "Status"
        }, 
        "inverter_dc_bus_current": {
            value: inverter_dc_bus_current,
            update: setInverter_dc_bus_current,
            min: 0, max: 110,
            catagory: "Status"
        }, 
        "cpu_usage": {
            value: cpu_usage,
            update: setCpu_usage,
            min: 0, max: 110,
            catagory: "Rpi"
        }, 
        "cpu_temperature": {
            value: cpu_temperature,
            update: setCpu_temperature,
            min: 0, max: 110,
            catagory: "Rpi"
        }, 
        "memory_usage": {
            value: memory_usage,
            update: setMemory_usage,
            min: 0, max: 110,
            catagory: "Rpi"
        }, 
        "swap_usage": {
            value: swap_usage,
            update: setSwap_usage,
            min: 0, max: 110,
            catagory: "Rpi"
        }, 
        "disk_usage": {
            value: disk_usage,
            update: setDisk_usage,
            min: 0, max: 110,
            catagory: "Rpi"
        },
        "bms_error_code":
        {
            value: bms_error_code,
            update: setBms_error_code,
            min: 0, max: 110,
            category: null
        },
        "can_rx_timeout":
        {
            value: can_rx_timeout,
            update: setCan_rx_timeout,
            min: 0, max: 110,
            category: null
        },
        "gps_fix_status":
        {
            value: gps_fix_status,
            update: setGps_fix_status,
            min: 0, max: 110,
            category: null
        },
        "inverter_state":
        {
            value: inverter_state,
            update: setInverter_state,
            min: 0, max: 110,
            category: null
        },
        "inverter_vsm_state":
        {
            value: inverter_vsm_state,
            update: setInverter_vsm_state,
            min: 0, max: 110,
            category: null
        },
        "state_of_charge":
        {
            value: state_of_charge,
            update: setState_of_charge,
            min: 0, max: 110,
            category: null
        },
    
    }

    const initRows = [
        "brake", //
        "accelerator_1", //
        "accelerator_2", //
        "steer_angle", 
        "brake_micro", //
        "accelerator_micro", //
        "front_left_wheel_speed", //
        "front_right_wheel_speed", //
        "front_brake_pressure", 
        "front_left_suspension",
        "front_right_suspension",
        "front_left_tire_temperature_1",
        "front_left_tire_temperature_2",
        "front_left_tire_temperature_3",
        "front_left_tire_temperature_4",
        "front_right_tire_temperature_1",
        "front_right_tire_temperature_2",
        "front_right_tire_temperature_3",
        "front_right_tire_temperature_4",
        "rear_left_wheel_speed", //
        "rear_right_wheel_speed", //
        "rear_left_suspension",
        "rear_right_suspension",
        "inverter_control_board_temperature", //
        "motor_temperature", //
        "motor_speed", //
        "imu_acceleration_x", //
        "imu_acceleration_y", //
        "imu_acceleration_z", //
        "imu_angular_velocity_x",
        "imu_angular_velocity_y",
        "imu_angular_velocity_z",
        "imu_quaternion_w", //
        "imu_quaternion_x", //
        "imu_quaternion_y", //
        "imu_quaternion_z", //
        "gps_fix_latitude",
        "gps_fix_longitude",
        "gps_fix_altitude",
        "gps_vel_linear_x",
        "gps_vel_linear_y",
        
        "rear_brake_pressure", 
        "rear_left_tire_temperature_1",
        "rear_left_tire_temperature_2",
        "rear_left_tire_temperature_3",
        "rear_left_tire_temperature_4",
        "rear_right_tire_temperature_1",
        "rear_right_tire_temperature_2",
        "rear_right_tire_temperature_3",
        "rear_right_tire_temperature_4",
        "vcu_status", // statusInit, StutusReady, StatusRTD, StatusRUnning, StatusError (0,1,2,3,4)
        "vcu_error_code",
        "rear_sensor_status",
        "rear_sensor_error_code",
        "inverter_post_fault_lo",
        "inverter_post_fault_hi",
        "inverter_run_fault_lo",
        "inverter_run_fault_hi",
        "torque_command",
        "torque_feedback",
        "inverter_dc_bus_voltage",
        "inverter_hot_spot_temperature",
        "inverter_dc_bus_current",

        "cpu_usage", 
        "cpu_temperature", 
        "memory_usage", 
        "swap_usage", 
        "disk_usage",

        "bms_error_code",
        "can_rx_timeout",
        "gps_fix_status",
        "inverter_state",
        "inverter_vsm_state",
        "state_of_charge",
    
    ]


    
    const [rows, setRows] = useState(initRows)

    const batchUpdate = (batch) => {
        Object.entries(frames).forEach(([key, ele]) => {
            if (batch.hasOwnProperty(key)) {
                ele.update(batch[key])
            }
        })
    }

    const accumulatorUpdate = (batch) => {
        if (batch.hasOwnProperty("state_of_charge")) {
            setState_of_charge(batch.state_of_charge)
        } else {

            let temp_accumulator_voltage = array7.map((e, i) => {
                return array12.map((ee, j) => {
                    return accumulator_voltage_valid.at(i).at(j) ? batch.accumulator_voltage.at(i).at(j) : null
                })
        })
        let temp_accumulator_temperature = array7.map((e, i) => {
            return array12.map((ee, j) => {
                return accumulator_temperature_valid.at(i).at(j) ? batch.accumulator_temperature.at(i).at(j) : null
            })
        })
        setAccumulator_voltage(temp_accumulator_voltage)
        setAccumulator_temperature(temp_accumulator_temperature)
        }
    }


    return (
        <FramesContext.Provider
			value={{frames, batchUpdate, rows, setRows, accumulatorUpdate, accumulator_voltage, 
                accumulator_temperature}}
			{...props}
		/>
    )
}

const useFrames = () => useContext(FramesContext);

export { useFrames, FramesProvider }