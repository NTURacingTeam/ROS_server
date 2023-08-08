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
	const { setSocketUrl, socketUrl, sendMessage, connectionStatus, readyState, lastJsonMessage, lastMessage} = useWebSocket() ;
	const { rows, setRows, batchUpdate, frames } = useFrames();
	const [cell, updateCell] = useState();
	const [orderedRows, updateOrderRows] = useState(rows)

	const [ recievedMessage, setRecievedMessage ] = useState(false)
	const [ lightUp , setLightUp ] = useState(false)

	useEffect(() => {
		setLightUp(true);
	}, [lastJsonMessage])

	useEffect(() => {
		  
		  setTimeout(setLightUp, 500, false);
		  
		setRecievedMessage(false)
	}, [lastJsonMessage])

	useEffect(() => {
		// console.log("use Effect")
		try {
			batchUpdate(lastJsonMessage.batch);
		} catch (error) {console.log(error)};
	}, [lastJsonMessage])
	
	const handleWebsocketInputOnChange = (e) => {
		setSocketUrl(e.target.value)
	};
	return (
		<Space
			direction="vertical"
			size="middle"
			style={{
				minWidth: 400, maxWidth: 700,
			}}
		>	
			<Badge.Ribbon text={connectionStatus} color={connectionStatus === "Open" ? "green" : connectionStatus === "Connecting" ? "pink" : "red"}>
				<Card title={<span style={{display: "flex"}}>new websocket msg update&nbsp;  <StyledLED lightUp={lightUp} /></span>} size="small">
					<Input
						addonBefore="url : " 
						style={{
						width: 'calc(100% - 200px)',
						}}
						
						defaultValue={socketUrl}
						onChange={handleWebsocketInputOnChange}
						/>
					
				</Card>
			</Badge.Ribbon>
			
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 400, maxWidth: 700 }} aria-label="simple table">
					<TableHead>
						<TableRow >
							<TableCell>Data Name</TableCell>
							<TableCell align="right">Data Value</TableCell>
							<TableCell align="right">GUI catagory</TableCell>
							<TableCell align="right">min</TableCell>
							<TableCell align="right">max</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row, index) => {
							return (
								<StyledTableRow
									key={row}
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<StyledTableCell component="th" scope="row"
									>
										{row}
									</StyledTableCell>
										<>
										<StyledTableCell align="right" >{frames[row].value == null ? <div style={{color: "gray"}}>null</div> : frames[row].value.toFixed(2)}</StyledTableCell>
										<StyledTableCell align="right" >{frames[row].catagory}</StyledTableCell>
										<StyledTableCell align="right" >{frames[row].min}</StyledTableCell>
										<StyledTableCell align="right" >{frames[row].max}</StyledTableCell>
										</>
								</StyledTableRow>
							)
						})}
					</TableBody>
				</Table>
		</TableContainer>
		</Space>
	)
}

export default DataTable