import React, { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import { useWebSocket } from './hooks/useWebSocket';
import { useFrames } from './hooks/useFrames';
// reorder by drag and drop
import {useState} from 'react'

import { Badge, Card, Space, Input } from 'antd';

const StyledLED = styled("div")`
	height: 1em;
	aspect-ratio: 1;
	background: ${props => props.lightUp ? "green" : "transparent"};
	border-width: 0.1em;
	border-color: black;
	border-radius: 50%;
	border-style: solid;
`

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.white,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));
  
const StyledTableRow = styled(TableRow)(({ theme }) => ({
	// '&:nth-of-type(odd)': {
	// 	backgroundColor: theme.palette.action.hover,
	// },
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));

const DataTable = () => {
	const { setSocketUrl, socketUrl, sendMessage, connectionStatus, readyState, lastJsonMessage, lastMessage} = useWebSocket() ;
	const { frames, accumulatorUpdate, accumulator_temperature, accumulator_voltage } = useFrames();
	const { state_of_charge } = frames
	const [ recievedMessage, setRecievedMessage ] = useState(false)
	const [ lightUp , setLightUp ] = useState(false)

	const [ voltageMax , setVoltageMax ] = useState(0)
	const [ voltageMin , setVoltageMin ] = useState(0)
	const [ voltageAvg , setVoltageAvg ] = useState(0)
	const [ voltageTotal , setVoltageTotal ] = useState(0)
	const [ voltageCount , setVoltageCount ] = useState(0)

	const [ temperatureMax , setTemperatureMax ] = useState(0)
	const [ temperatureMin , setTemperatureMin ] = useState(0)
	const [ temperatureAvg , setTemperatureAvg ] = useState(0)

	useEffect(() => {
		setLightUp(true);
	}, [accumulator_voltage, accumulator_temperature])
	
	useEffect(() => {
		
		setTimeout(setLightUp, 500, false);
		
		setRecievedMessage(false)
	}, [accumulator_voltage, accumulator_temperature])
	
	const handleWebsocketInputOnChange = (e) => {
		setSocketUrl(e.target.value)
	};

	useEffect(() => {
		// console.log("use Effect")
		try {
			accumulatorUpdate(lastJsonMessage.batch)
		} catch (error) {};
	}, [lastJsonMessage])
	
	useEffect(() => {
		let max = null;
		let min = null;
		let total = 0;
		let count = 0;
		accumulator_voltage.forEach((seg) => {
			seg.forEach((cell) => {
				if (cell != null ) {
					if (cell>max || max == null) {max=cell}
					if (cell<min || min == null) {min=cell}
					total += cell;
					count += 1;
				}
			})
		})
		setVoltageAvg(total/count);
		setVoltageMin(min);
		setVoltageMax(max);
		setVoltageTotal(total);
		setVoltageCount(count);
	}, [accumulator_voltage])

	useEffect(() => {
		let max = null;
		let min = null;
		let total = 0;
		let count = 0;
		accumulator_temperature.forEach((seg, i) => {
			seg.forEach((cell, j) => {
				if (cell != null) {
					if (cell>max || max == null) {max=cell}
					if (cell<min || min == null) {min=cell}
					total += cell;
					count += 1;
				}
			})
		})
		setTemperatureAvg(total/count);
		setTemperatureMin(min);
		setTemperatureMax(max);
	}, [accumulator_temperature])

	const voltageCellColor = (value) => {
		if (value == null) return {fontWeight: "bold",backgroundColor: "gray", color: "white"}
		else if (value < 2.7) return {fontWeight: "bold",backgroundColor: "yellow"}
		else if (value < 3.0) return {fontWeight: "bold",backgroundColor: "blue", color: "white"}
		else if (value < 3.7) return {fontWeight: "bold",backgroundColor: "lightGreen"}
		else if (value < 4.0) return {fontWeight: "bold",backgroundColor: "aqua"}
		else if (value < 4.2) return {fontWeight: "bold",backgroundColor: "orange"}
		else return {fontWeight: "bold",backgroundColor: "red", color: "white"}
		
	}

	const legendStyleAdd = {marginRight: 0, marginLeft: 10, padding: 10}
	const voltageColorLegend = (
		<span>
			<span style={{...voltageCellColor(null), ...legendStyleAdd}}> null </span>
			<span style={{...voltageCellColor(0.0), ...legendStyleAdd}}> ~2.7 </span>
			<span style={{...voltageCellColor(2.7), ...legendStyleAdd}}> 2.7~3.0 </span>
			<span style={{...voltageCellColor(3.0), ...legendStyleAdd}}> 3.0~3.7 </span>
			<span style={{...voltageCellColor(3.7), ...legendStyleAdd}}> 3.7~4.0 </span>
			<span style={{...voltageCellColor(4.0), ...legendStyleAdd}}> 4.0~4.2 </span>
			<span style={{...voltageCellColor(4.3), ...legendStyleAdd}}> 4.2~ </span>
		</span>
	)

	const tempCellColor = (value) => {
		if (value == null) return {fontWeight: "bold",backgroundColor: "gray"}
		else if (value < -20) return {fontWeight: "bold",backgroundColor: "white"}
		else if (value < 40) return {fontWeight: "bold",backgroundColor: "yellow"}
		else if (value < 60) return {fontWeight: "bold",backgroundColor: "orange"}
		else return {fontWeight: "bold",backgroundColor: "red", color: "white"}
		
	}

	return (
		<Space
			direction="vertical"
			size="middle"
			style={{
				minWidth: 800, maxWidth: 1200,
			}}
		>	
			<Space
				direction="horizontal"
				>
				<Badge.Ribbon text={connectionStatus} color={connectionStatus === "Open" ? "green" : connectionStatus === "Connecting" ? "pink" : "red"}>
					<Card title={<span style={{display: "flex"}}>new websocket msg update&nbsp;  <StyledLED lightUp={lightUp} /></span>} size="small">
						<Input
							addonBefore="url : " 
							style={{ width: "100%" }}
							
							defaultValue={socketUrl}
							onChange={handleWebsocketInputOnChange}
							/>
						
					</Card>
				</Badge.Ribbon>
				<Card style={{fontSize: "2rem"}}>
				<img src="https://www.svgrepo.com/show/46911/battery.svg" alt="battery svg" style={{maxHeight: "2rem"}} />
				{state_of_charge.value == null ? "null" : state_of_charge.value == -1 ? "error(-1)" : (state_of_charge.value * 100).toFixed(1)} %
				</Card>
			</Space>

			<Card title={<span style={{display: "flex", fontWeight: "bold"}}>cell voltage {voltageColorLegend}</span>} size="small">
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 800, maxWidth: 1200 }} aria-label="simple table">
					<TableHead>
						<TableRow >
							<TableCell>seg/cell</TableCell>
							<>
							{[1,2,3,4,5,6,7,8,9,10,11,12].map((key, index) => {
								return <TableCell align="right" key={index}>cell {key}</TableCell>
							})}
							</>
						</TableRow>
					</TableHead>
					<TableBody>
							<>
							{accumulator_voltage.map((array, segIndex) => {
								return (
								<StyledTableRow
									key={segIndex}
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<StyledTableCell component="th" scope="seg" > seg {segIndex + 1} </StyledTableCell>
									{array.map((cell, cellIndex) => {
										return <StyledTableCell align="right" sx={voltageCellColor(cell)} key={cellIndex}>
											{cell}
										</StyledTableCell>
									})}
								</StyledTableRow>
								)
								})
							}

							</>
						</TableBody>
				</Table>
		</TableContainer>
		<span>
			<span style={{fonSize: 2}}>avg: </span> 
			<span style={{fonSize: 3, fontWeight: "bold"}}>{voltageAvg.toFixed(2)} V,</span>

			<span style={{fonSize: 2}}>max: </span> 
			<span style={{fonSize: 3, fontWeight: "bold"}}>{voltageMax == null ? "": voltageMax.toFixed(2)} V, </span>
			
			<span style={{fonSize: 2}}>min: </span> 
			<span style={{fonSize: 3, fontWeight: "bold"}}>{voltageMax == null ? "": voltageMin.toFixed(2)} V, </span>
			
			<span style={{fonSize: 2}}>total: </span> 
			<span style={{fonSize: 3, fontWeight: "bold"}}>{voltageTotal.toFixed(2)} V, </span>

			<span style={{fonSize: 2}}>count: </span> 
			<span style={{fonSize: 3, fontWeight: "bold"}}>{voltageCount}</span>
		</span>
		</Card>

		<Card title={<span style={{display: "flex"}}>cell temperature (degree celcius)</span>} size="small">
		<TableContainer component={Paper}>
				<Table sx={{ minWidth: 800, maxWidth: 1200 }} aria-label="simple table">
					<TableHead>
						<TableRow >
							<TableCell>seg/cell</TableCell>
							<>
							{[1,2,3,4,5,6,7,8,9,0,11,12].map((key, index) => {
								return <TableCell align="right">cell {key}</TableCell>
							})}
							</>
						</TableRow>
					</TableHead>
					<TableBody>
							<>
							{accumulator_temperature.map((array, segIndex) => {
								return (
								<StyledTableRow
									key={segIndex}
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<StyledTableCell component="th" scope="seg" > seg {segIndex+1} </StyledTableCell>
									{array.map((cell, cellIndex) => {
										return <StyledTableCell align="right" sx={tempCellColor(cell)} key={cellIndex}>
											{cell == null ? null : cell.toFixed(2)}
										</StyledTableCell>
									})}
								</StyledTableRow>
								)
								})
							}

							</>
						</TableBody>
				</Table>
		</TableContainer>
		<span>
			<span style={{fonSize: 2}}>avg: </span> 
			<span style={{fonSize: 3, fontWeight: "bold"}}>{temperatureAvg.toFixed(2)} °C,</span>

			<span style={{fonSize: 2}}>max: </span> 
			<span style={{fonSize: 3, fontWeight: "bold"}}>{temperatureMax == null ? "": temperatureMax.toFixed(2)} °C, </span>
			
			<span style={{fonSize: 2}}>min: </span> 
			<span style={{fonSize: 3, fontWeight: "bold"}}>{temperatureMax == null ? "": temperatureMin.toFixed(2)} °C, </span>
		</span>
		</Card>		

		</Space>
	)
}

export default DataTable


// sate of charge, 