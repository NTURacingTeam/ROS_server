import GUIstyle from "./GUIstyle"

import { Tree, Tooltip } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { useFrames } from "../../routes/hooks/useFrames"
import styled from "styled-components"

const StyledEggContainer = styled.div`
	position: absolute;
	height: inherit;
	aspect-ratio: 1;
`


const StyledEggCircle3 = styled.div`
	position: absolute;
	height: 90%;
	aspect-ratio: 1;
	border-radius: 50%;
	border: solid black;
	border-width: 0.5rem;

	transform: translate(50%, -50%);
    top: 50%;
    right: 50%;

`

const StyledEggCircle2 = styled.div`
	position: absolute;
	height: 60%;
	aspect-ratio: 1;
	border-radius: 50%;
	border: solid black;
	border-width: 0.5rem;

	transform: translate(50%, -50%);
    top: 50%;
    right: 50%;

`

const StyledEggCircle1 = styled.div`
	position: absolute;
	height: 30%;
	aspect-ratio: 1;
	border-radius: 50%;
	border: solid black;
	border-width: 0.5rem;

	transform: translate(50%, -50%);
    top: 50%;
    right: 50%;

`


const StyledEggX = styled.div`
	position: absolute;
	width: 90%;
	background-color: black;
	height: 0.5rem; 

	transform: translate(50%, -50%);
    top: 50%;
    right: 50%;

`

const StyledEggY = styled.div`
	position: absolute;
	height: 90%;
	background-color: black;
	width: 0.5rem; 

	transform: translate(50%, -50%);
    top: 50%;
    right: 50%;

`
const StyledEggDot = styled.div`
	position: absolute;
	background-color: red;
	height: 1.5rem; 
	aspect-ratio: 1;
	border-radius: 50%;


	transform: translate(50%, -50%);
    top: 50%;
    right: 50%;
`




export default () => {

    const { frames } = useFrames();
    const dataRow = [
        "imu_acceleration_x",
        "imu_acceleration_y",
        "imu_acceleration_z",
        // imu_gyro
        // "imu_gyro_x",
        // "imu_gyro_y",
        // "imu_gyro_z",
        // imu_quaternion
        // "imu_quaternion_w",
        // "imu_quaternion_x",
        // "imu_quaternion_y",
        // "imu_quaternion_z",
    ]

    const onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    };    
    return (
        <GUIstyle title={"IMU 1"} frames={1} columns={1}>
            <Tooltip title={`x: ${frames.imu_acceleration_x.value} G, y: ${frames.imu_acceleration_y.value}, max: 1.5G`} >
				<StyledEggContainer>
					<StyledEggCircle3 />
					<StyledEggCircle2 />
					<StyledEggCircle1 />
					<StyledEggX />
					<StyledEggY />
					<StyledEggDot style={{top: `${-frames.imu_acceleration_x.value * 50/1.5 + 50}%`, right: `${-frames.imu_acceleration_y.value * 50/1.5 + 50}%`}}/>
				</StyledEggContainer>
            </Tooltip>
        </GUIstyle>
    )
}


