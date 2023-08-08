import AntdGrid from "../components/playground/AntdGrid"
import AntdGridTest from "../components/playground/AntdGrid.test"
import Rotate from "../components/playground/Rotate"
import MapTest from "../components/playground/MapTest"
import IMGTest from "../components/playground/IMGTest"
import WebSocketDemo from "../components/playground/WebSocketDemo"

export default () => {
    return (
        <>
            <h1>Playground</h1>
            <IMGTest />
            {/* <MapTest /> */}
            {/* <Rotate /> */}
            <h3>antd grid</h3>
            {/* <AntdGridTest /> */}
            {/* <AntdGrid /> */}
            <WebSocketDemo />
        </>
    )
}