import React, { useState, useRef, useEffect } from 'react';
import { Col, Row } from 'antd';
import styled from 'styled-components'


const StyledCol = styled(Col)`
    background: transparent;
    border: 0;

    div {
        // height: 60px;
		font-size: 14px;
		// line-height: 120px;
		background: #0092ff;
		border-radius: 4px;
		color: white;
		text-align: center;

    }
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
        <div ref={divRef} style={{height: height}}> 
            <h1>{title}</h1>
            {children}
        </div> 
    </StyledCol>
)}