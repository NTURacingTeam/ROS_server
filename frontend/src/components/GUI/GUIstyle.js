import React, { useState, useRef, useEffect } from 'react';
import { Col, Row } from 'antd';
import styled from 'styled-components'

import { useGUI } from '../../routes/hooks/useGUI'


const StyledCol = styled(Col)`
    background: transparent;
    border: 0;
    padding: 0;

    > div {
        // height: 60px;
		font-size: 1.4rem;
		// line-height: 120px;
		background: #0092ff;
		border-radius: 1rem;
		color: white;
		text-align: center;
        margin: 0;
        padding: 0.1rem;
    } 
`

const StyledTitle = styled.h1`
    margin: 0;
    // padding: 0.1rem 0;
`

const StyledChildren = styled.div`

`

export default ({title, rows, columns, children}) => {

    const { makeSquare, updateSquare, baseCol} = useGUI();
    const divRef = useRef(null);
    const [height, setHeight] = useState(100);

	useEffect(() => {
        updateSquare(divRef, setHeight)
	}, [makeSquare]);
   

    return (

    <StyledCol span={baseCol} > 
        <div> 
            <StyledTitle>{title}</StyledTitle>
            <StyledChildren ref={divRef} style={{height: height}}>
                {children}
            </StyledChildren>
        </div> 
    </StyledCol>
)}