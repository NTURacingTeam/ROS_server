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
import { Slider } from 'antd'

import { useWebSocket } from './hooks/useWebSocket';
import { useFrames } from './hooks/useFrames';

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
	const {socketUrl, sendMessage, connectionStatus, readyState, lastJsonMessage, lastMessage} = useWebSocket() ;
	const { rows } = useFrames();


	useEffect(() => {
		// console.log("use Effect")
		try {
			if (lastJsonMessage.hasOwnProperty("batch")) {
				// console.log("recieve message: ", lastJsonMessage)
				Object.entries(rows).forEach(([key, ele]) => {
					if (lastJsonMessage.batch.hasOwnProperty(key)) {
						ele.update(lastJsonMessage.batch[key])
					}
				})
			} else { // the old way of tranfering datas
				Object.entries(rows).forEach(([key, ele]) => {
					// console.log(ele.name)
					if (key === lastJsonMessage.name) {
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
			{/* {lastMessage ? <span>Last message: {lastMessage.data}</span> : null} */}

			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 400 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Data Name</TableCell>
							<TableCell align="right">Data Value</TableCell>
							<TableCell align="right">Data Slide Bar</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
					
						{Object.entries(rows).map(([key, row]) => {
							return <StyledTableRow
								key={key}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<StyledTableCell component="th" scope="row">
									{key}
								</StyledTableCell>
								<StyledTableCell align="right">{row.value}</StyledTableCell>
								<StyledTableCell align="right" sx={{ minWidth: 100}}>
									<Slider 
										value={row.value} 
										defaultValue={0} 
										disabled={true} 
										min={row.min}
										max={row.max}
									/> 
								</StyledTableCell>
							</StyledTableRow>
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	)
}

export default DataTable