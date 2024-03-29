const keys = [
    {key: 'timestamp', as: 'timestamp'},
    {key: 'can_rx_timeout', as: 'can_rx_timeout'},
    {key: 'vcu_status', as: 'vcu_status'},
    {key: 'vcu_error_code', as: 'vcu_error_code'},
    {key: 'brake', as: 'brake'},
    {key: 'accelerator_1', as: 'accelerator_1'},
    {key: 'accelerator_2', as: 'accelerator_2'},
    {key: 'steer_angle', as: 'steer_angle'},
    {key: 'brake_micro', as: 'brake_micro'},
    {key: 'accelerator_micro', as: 'accelerator_micro'},
    {key: 'front_left_wheel_speed', as: 'front_left_wheel_speed'},
    {key: 'front_right_wheel_speed', as: 'front_right_wheel_speed'},
    {key: 'front_brake_pressure', as: 'front_brake_pressure'},
    {key: 'rear_brake_pressure', as: 'rear_brake_pressure'},
    {key: 'front_left_suspension', as: 'front_left_suspension'},
    {key: 'front_right_suspension', as: 'front_right_suspension'},
    {key: 'front_left_tire_temperature_1', as: 'front_left_tire_temperature_1'},
    {key: 'front_left_tire_temperature_2', as: 'front_left_tire_temperature_2'},
    {key: 'front_left_tire_temperature_3', as: 'front_left_tire_temperature_3'},
    {key: 'front_left_tire_temperature_4', as: 'front_left_tire_temperature_4'},
    {key: 'front_right_tire_temperature_1', as: 'front_right_tire_temperature_1'},
    {key: 'front_right_tire_temperature_2', as: 'front_right_tire_temperature_2'},
    {key: 'front_right_tire_temperature_3', as: 'front_right_tire_temperature_3'},
    {key: 'front_right_tire_temperature_4', as: 'front_right_tire_temperature_4'},
    {key: 'rear_left_wheel_speed', as: 'rear_left_wheel_speed'},
    {key: 'rear_right_wheel_speed', as: 'rear_right_wheel_speed'},
    {key: 'rear_left_suspension', as: 'rear_left_suspension'},
    {key: 'rear_right_suspension', as: 'rear_right_suspension'},
    {key: 'rear_left_tire_temperature_1', as: 'rear_left_tire_temperature_1'},
    {key: 'rear_left_tire_temperature_2', as: 'rear_left_tire_temperature_2'},
    {key: 'rear_left_tire_temperature_3', as: 'rear_left_tire_temperature_3'},
    {key: 'rear_left_tire_temperature_4', as: 'rear_left_tire_temperature_4'},
    {key: 'rear_right_tire_temperature_1', as: 'rear_right_tire_temperature_1'},
    {key: 'rear_right_tire_temperature_2', as: 'rear_right_tire_temperature_2'},
    {key: 'rear_right_tire_temperature_3', as: 'rear_right_tire_temperature_3'},
    {key: 'rear_right_tire_temperature_4', as: 'rear_right_tire_temperature_4'},
    {key: 'rear_sensor_status', as: 'rear_sensor_status'},
    {key: 'rear_sensor_error_code', as: 'rear_sensor_error_code'},
    {key: 'bms_error_code', as: 'bms_error_code'},
    {key: 'state_of_charge', as: 'state_of_charge'},
    {key: 'state_of_charge', as: 'state_of_charge'},
    {key: 'inverter_control_board_temperature', as: 'inverter_control_board_temperature'},
    {key: 'inverter_hot_spot_temperature', as: 'inverter_hot_spot_temperature'},
    {key: 'motor_temperature', as: 'motor_temperature'},
    {key: 'inverter_post_fault_lo', as: 'inverter_post_fault_lo'},
    {key: 'inverter_post_fault_hi', as: 'inverter_post_fault_hi'},
    {key: 'inverter_run_fault_lo', as: 'inverter_run_fault_lo'},
    {key: 'inverter_run_fault_hi', as: 'inverter_run_fault_hi'},
    {key: 'torque_command', as: 'torque_command'},
    {key: 'torque_feedback', as: 'torque_feedback'},
    {key: 'motor_speed', as: 'motor_speed'},
    {key: 'inverter_dc_bus_voltage', as: 'inverter_dc_bus_voltage'},
    {key: 'inverter_vsm_state', as: 'inverter_vsm_state'},
    {key: 'inverter_dc_bus_voltage', as: 'inverter_dc_bus_voltage'},
    {key: 'inverter_vsm_state', as: 'inverter_vsm_state'},
    {key: 'inverter_state', as: 'inverter_state'},
    {key: 'inverter_dc_bus_current', as: 'inverter_dc_bus_current'},
    {key: 'imu_acceleration_x', as: 'imu_acceleration_x'},
    {key: 'imu_acceleration_y', as: 'imu_acceleration_y'},
    {key: 'imu_acceleration_z', as: 'imu_acceleration_z'},
    {key: 'imu_angular_velocity_x', as: 'imu_angular_velocity_x'},
    {key: 'imu_angular_velocity_y', as: 'imu_angular_velocity_y'},
    {key: 'imu_angular_velocity_z', as: 'imu_angular_velocity_z'},
    {key: 'imu_quaternion_w', as: 'imu_quaternion_w'},
    {key: 'imu_quaternion_x', as: 'imu_quaternion_x'},
    {key: 'imu_quaternion_y', as: 'imu_quaternion_y'},
    {key: 'imu_quaternion_z', as: 'imu_quaternion_z'},
    {key: 'gps_fix_longitude', as: 'gps_fix_longitude'},
    {key: 'gps_fix_latitude', as: 'gps_fix_latitude'},
    {key: 'gps_vel_linear_x', as: 'gps_vel_linear_x'},
    {key: 'gps_vel_linear_y', as: 'gps_vel_linear_y'},
    {key: 'cpu_usage', as: 'cpu_usage'},
    {key: 'memory_usage', as: 'memory_usage'},
    {key: 'swap_usage', as: 'swap_usage'},
    {key: 'disk_usage', as: 'disk_usage'},
    {key: 'cpu_temperature', as: 'cpu_temperature'},
 ];

 export default keys;