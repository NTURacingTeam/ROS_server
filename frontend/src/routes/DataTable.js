import React, { Fragment, useEffect } from 'react'
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
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

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
	const { rows, batchUpdate } = useFrames();
	const [cell, updateCell] = useState();
	const [orderedRows, updateOrderRows] = useState(rows)

	useEffect(() => {
		// console.log("use Effect")
		try {
			if (lastJsonMessage.hasOwnProperty("batch")) {
				// console.log("recieve message: ", lastJsonMessage)
				// Object.entries(rows).forEach(([key, ele]) => {
				// 	if (lastJsonMessage.batch.hasOwnProperty(key)) {
				// 		ele.update(lastJsonMessage.batch[key])
				// 	}
				// })
				//console.log(lastJsonMessage.batch)
				batchUpdate(lastJsonMessage.batch);
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
	
	const handleOnDragEnd = (result) => {
		const items = Object.entries(rows);
		const [reorderedItem] = items.splice(result.source.index, 1);
		items.splice(result.destination.index, 0, reorderedItem);
		let itemsObj = {}
		for (let i=0; i<items.length; i++) {
			itemsObj[items[i][0]] = items[i][1].value
		}
		batchUpdate(itemsObj)

	}
	// console.log("status: ", connectionStatus);
	return (
		<div>
			<br></br>
			<br></br>
			<span>The WebSocket is currently {connectionStatus}, websocket url is : {socketUrl}.  </span>
			{/* {lastMessage ? <span>Last message: {lastMessage.data}</span> : null} */}

			<TableContainer component={Paper}>
				<DragDropContext onDragEnd={(result) => handleOnDragEnd(result)}>
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
				<Droppable droppableId='drap-1'>
				{(provided, snapshot) => (
					<TableBody ref={provided.innerRef} {...provided.droppableProps}>
						{provided.placeholder}
						{Object.entries(rows).map(([key, row], index) => {
							return (
								<Draggable key={key} draggableId={key} index={index}>
								{(provided) => (
								<StyledTableRow
									key={key}
									ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<StyledTableCell component="th" scope="row"
									>
										{key}
									</StyledTableCell>
										<>
										<StyledTableCell align="right" >{row.value}</StyledTableCell>
										<StyledTableCell align="right" >{row.catagory}</StyledTableCell>
										<StyledTableCell align="right" >{row.min}</StyledTableCell>
										<StyledTableCell align="right" >{row.max}</StyledTableCell>
										</>
								</StyledTableRow>
								)}
								</Draggable>
							)
						})}
					</TableBody>
					)}
				</Droppable>
				</Table>
		</DragDropContext>
		</TableContainer>
		</div>
	)
}

export default DataTable