import GUIstyle from "./GUIstyle"

import { Tree } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { useFrames } from "../../routes/hooks/useFrames"

export default () => {

    const { frames } = useFrames();
    const dataRow = [
        "imu_acceleration_x",
        "imu_acceleration_y",
        "imu_acceleration_z",
        // imu_gyro
        "imu_gyro_x",
        "imu_gyro_y",
        "imu_gyro_z",
        // imu_quaternion
        "imu_quaternion_w",
        "imu_quaternion_x",
        "imu_quaternion_y",
        "imu_quaternion_z",
    ]

    const onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    };

    const treeData =[
            {
              title: 'acceleration',
              key: 'acceleration',
              children: [
                {
                  title: 'X: ' + frames.imu_acceleration_x.value,
                  key: 'a_x',
                },
                {
                  title: 'Y: ' + frames.imu_acceleration_y.value,
                  key: 'a_y',
                },
                {
                  title: 'Z: ' + frames.imu_acceleration_z.value,
                  key: 'a_z',
                },
              ],
            },
            {
              title: 'gyro',
              key: 'gyro',
              children: [
                {
                  title: 'X: ' + frames.imu_gyro_x.value,
                  key: 'gyro-x',
                },
                {
                    title: 'Y: ' + frames.imu_gyro_y.value,
                    key: 'gyro-y',
                },
                {
                    title: 'Z: ' + frames.imu_gyro_z.value,
                    key: 'gyro-z',
                },
              ],
            },
            {
              title: 'quaternion',
              key: 'quaternion',
              children: [
                {
                  title: 'X: ' + frames.imu_quaternion_x.value,
                  key: 'quaternion-x',
                },
                {
                    title: 'Y: ' + frames.imu_quaternion_y.value,
                    key: 'quaternion-y',
                },
                {
                    title: 'Z: ' + frames.imu_quaternion_z.value,
                    key: 'quaternion-z',
                },
                {
                  title: 'W: ' + frames.imu_quaternion_w.value,
                  key: 'quaternion-w',
              },
              ],
            },
      ];
    
    return (
        <GUIstyle title={"IMU 1"} frames={1} columns={1}>
            <div style={{padding: "0 3em", }}>
                <Tree
                    showLine
                    switcherIcon={<DownOutlined />}
                    defaultExpandedKeys={["acceleration", "gyro"]}
                    onSelect={onSelect}
                    treeData={treeData}
                />
            </div>
        </GUIstyle>
    )
}


