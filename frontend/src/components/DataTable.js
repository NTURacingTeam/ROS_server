import React, { useState, useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import WebSocketState from './WebSocketState';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));
  
const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));

const DataTable = () => {
	let {socketUrl, sendMessage, connectionStatus, readyState, lastJsonMessage, lastMessage} = WebSocketState() ;

// front_box_1
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
	
	
	const rows = [
		// front_box_1
		{name: "front_left_wheel_speed", value: front_left_wheel_speed, update: setFront_left_wheel_speed},
		{name: "front_right_wheel_speed", value: front_right_wheel_speed, update: setFront_right_wheel_speed},
		{name: "front_left_tyre_temperature_1", value: front_left_tyre_temperature_1, update: setFront_left_tyre_temperature_1},
		{name: "front_left_tyre_temperature_2", value: front_left_tyre_temperature_2, update: setFront_left_tyre_temperature_2},
		{name: "front_right_tyre_temperature_1", value: front_right_tyre_temperature_1, update: setFront_right_tyre_temperature_1},
		{name: "front_right_tyre_temperature_2", value: front_right_tyre_temperature_2, update: setFront_right_tyre_temperature_2},
		// front_box_2
		{name: "brake", value: brake, update: setBrake},
		{name: "accelerator_1", value: accelerator_1, update: setAccelerator_1},
		{name: "accelerator_2", value: accelerator_2, update: setAccelerator_2},
		{name: "steer_angle", value: steer_angle, update: setSteer_angle},
		{name: "oil_pressure", value: oil_pressure, update: setOil_pressure},
		{name: "accelerator_micro", value: accelerator_micro, update: setAccelerator_micro},
		{name: "brake_micro", value: brake_micro, update: setBrake_micro},
		// imu_acceleration
		{name: "imu_acceleration_x", value: imu_acceleration_x, update: setImu_acceleration_x},
		{name: "imu_acceleration_y", value: imu_acceleration_y, update: setImu_acceleration_y},
		{name: "imu_acceleration_z", value: imu_acceleration_z, update: setImu_acceleration_z},
		// imu_gyro
		{name: "imu_gyro_x", value: imu_gyro_x, update: setImu_gyro_x},
		{name: "imu_gyro_y", value: imu_gyro_y, update: setImu_gyro_y},
		{name: "imu_gyro_z", value: imu_gyro_z, update: setImu_gyro_z},
		// imu_quaternion
		{name: "imu_quaternion_w", value: imu_quaternion_w, update: setImu_quaternion_w},
		{name: "imu_quaternion_x", value: imu_quaternion_x, update: setImu_quaternion_x},
		{name: "imu_quaternion_y", value: imu_quaternion_y, update: setImu_quaternion_y},
		{name: "imu_quaternion_z", value: imu_quaternion_z, update: setImu_quaternion_z},
		// muc_data
		{name: "control_board_temperature", value: control_board_temperature, update: setControl_board_temperature},
		{name: "motor_temperature", value: motor_temperature, update: setMotor_temperature},
		{name: "motor_speed", value: motor_speed, update: setMotor_speed},
		{name: "input_voltage", value: input_voltage, update: setInput_voltage},
		// rear_box_1
		{name: "rear_left_wheel_speed", value: rear_left_wheel_speed, update: setRear_left_wheel_speed},
		{name: "rear_right_wheel_speed", value: rear_right_wheel_speed, update: setRear_right_wheel_speed},
		{name: "rear_left_tyre_temperature_1", value: rear_left_tyre_temperature_1, update: setRear_left_tyre_temperature_1},
		{name: "rear_left_tyre_temperature_2", value: rear_left_tyre_temperature_2, update: setRear_left_tyre_temperature_2},
		{name: "rear_right_tyre_temperature_1", value: rear_right_tyre_temperature_1, update: setRear_right_tyre_temperature_1},
		{name: "rear_right_tyre_temperature_2", value: rear_right_tyre_temperature_2, update: setRear_right_tyre_temperature_2},
		{name: "GPS_lon", value: GPS_lon, update: setGPS_lon},
		{name: "GPS_lat", value: GPS_lat, update: setGPS_lat},
	];

	useEffect(() => {
		// console.log("use Effect")
		try {
			if (lastJsonMessage.hasOwnProperty("batch")) {
				console.log("recieve message: ", lastJsonMessage)
				rows.forEach((ele) => {
					if (lastJsonMessage.batch.hasOwnProperty(ele.name)) {
						ele.update(lastJsonMessage.batch[ele.name])
					}
				})
			} else {
				rows.forEach((ele) => {
					// console.log(ele.name)
					if (ele.name === lastJsonMessage.name) {
						// console.log("match: ", ele.name)
						// console.log()
						ele.update(lastJsonMessage.value)
					}
				})
			}
		} catch (error) {console.log(error)};
	}, [lastJsonMessage])
	
	// console.log("status: ", connectionStatus);
	return (
		<div>
			<span>The WebSocket is currently {connectionStatus}, websocket url is : {socketUrl}.  </span>
			{lastMessage ? <span>Last message: {lastMessage.data}</span> : null}

			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 400, maxWidth: 500 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Data Name</TableCell>
							<TableCell align="right">Data Value</TableCell>
							<TableCell align="right">Data Slide Bar</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => {
							return <StyledTableRow
								key={row.name}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<StyledTableCell component="th" scope="row">
									{row.name}
								</StyledTableCell>
								<StyledTableCell align="right">{row.value}</StyledTableCell>
								<StyledTableCell align="right">{row.value}</StyledTableCell>
							</StyledTableRow>
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	)
}

export default DataTable