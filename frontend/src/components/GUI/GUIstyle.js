import React, { useState, useRef, useEffect } from 'react';
import { Col, Row } from 'antd';
import styled from 'styled-components'


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
    padding: 0.25em 0;
`

const StyledChildren = styled.div`

`

export default ({title, rows, columns, baseCol, children}) => {
    const divRef = useRef(null);
    const [height, setHeight] = useState(100);
    const [makeSquare, setMakeSquare] = useState(false)

	useEffect(() => {
        if (!makeSquare) {
            try {
                const h = divRef.current.offsetWidth;
                setHeight(h);
                setMakeSquare(true);
            } catch (error) { console.log(error)}
        }
	}, [divRef.current, makeSquare]);
   

    return (

    <StyledCol span={baseCol * rows} > 
        <div> 
            <StyledTitle>{title}</StyledTitle>
            <StyledChildren ref={divRef} style={{height: height}}>
                {children}
            </StyledChildren>
        </div> 
    </StyledCol>
)}