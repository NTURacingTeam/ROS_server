import AntdGrid from "../components/playground/AntdGrid"
import AntdGridTest from "../components/playground/AntdGrid.test"
import Rotate from "../components/playground/Rotate"

export default () => {
    return (
        <>
            <h1>Playground</h1>
            <Rotate />
            <h3>antd grid</h3>
            <AntdGridTest />
            <AntdGrid />
        </>
    )
}