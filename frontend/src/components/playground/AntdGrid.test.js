import React, { useState, useRef, useEffect } from 'react';
import { Col, Row, Slider } from 'antd';
import styled from 'styled-components'

const StyledCol = styled(Col)`
	background: red;
`

const StyledRow = styled(Row)`
	[class~='ant-col'] {
		background: transparent;
		border: 0;
	}
	[class~='ant-col'] > div {
		// height: 60px;
		font-size: 14px;
		// line-height: 120px;
		background: #0092ff;
		border-radius: 4px;
		color: white;
		text-align: center;
	}
	.ant-col {
		padding: 0;
	}
`

const App = () => {
	const ColRef1 = useRef(null);

	const [height, setHeight] = useState(100);

	useEffect(() => {
		try {
			console.log("width", ColRef1.current ? ColRef1.current.offsetWidth : null);
			const h = ColRef1.current.offsetWidth;
			setHeight(h);
		} catch (error) { console.log(error)}
	}, [ColRef1.current]);
	
	return (
		<>
		<StyledRow gutter={[24, 24]}>
			{[1,2,3,4,5,6,7,8,9,10,11,12].map( (ele, i) => (
				<>
				<StyledCol span={ele}> 
					<div> {ele} </div>
				</StyledCol>
				<StyledCol span={24-ele}> 
					<div> {24-ele} </div>
				</StyledCol>
				</>
			))}
		</StyledRow>
		<div>----</div>
		<StyledRow gutter={[24, 24]}>
			<StyledCol span={8} > 
				<div ref={ColRef1} style={{height: height}}> 
					8 {height} 
				</div> 
			</StyledCol>

		</StyledRow>
		</>
	)
};
export default App;