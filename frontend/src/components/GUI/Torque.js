import GUIstyle from "./GUIstyle"
import { useFrames } from "../../routes/hooks/useFrames"
import styled from 'styled-components'

const Indicator = styled.div`
    // background-color: green;
    padding: 0.3em;
    height: 1.3em;
    // width: 1em;
    // aspect-ratio: 1;
    // border-radius: 50%;
    width: 8em;

    background-color: ${({ state }) => state };
    margin: 0.1em;

    border-radius: 0.2em;

`

const StyledTorqe = styled.div`
    // background: black;
    height: inherit;
    display: flex;
    flex-direction: column;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items: center;
`

export default () => {

    const { frames } = useFrames();
    const dataRow = [
        "is_activated",
        "apps_error",
        "bse_error",
        "bppc_error",
        "inverter_enable",
        "direction_command",
        "torque_command",
    ]
    return (
        <GUIstyle title={"Torque"} frames={1} columns={1}>
            <StyledTorqe>

            <div>
                <Indicator state={frames.apps_error.value == 0 ? "green" : "red"}>
                    APPS: {frames.apps_error.value == 0 ? "OK" : "ERROR"}
                </Indicator>
            </div>
            <div>
                <Indicator state={frames.apps_error.value == 0 ? "green" : "red"}>
                    BSE: {frames.bse_error.value == 0 ? "OK" : "ERROR"}
                </Indicator>
            </div>
            <div>
                <Indicator state={frames.apps_error.value == 0 ? "green" : "red"}>
                    BPPC: {frames.bppc_error.value == 0 ? "OK" : "ERROR"}
                </Indicator>
            </div>
            <div>
                <Indicator state={frames.is_activated.value == 0 ? "red" : "green"}>
                    {frames.is_activated.value == 0 ? "not" : "is"} activated
                </Indicator>
            </div>
            <div>
                <Indicator state={frames.inverter_enable.value == 0 ? "red" : "green"}>
                    inverter: {frames.inverter_enable.value == 0 ? "disabled" : "enabled"}
                </Indicator>
            </div>
            <div>
                <Indicator state={frames.direction_command.value == 0 ? "red" : "green"}>
                    direction: {frames.direction_command.value == 0 ? "0" : "1"}
                </Indicator>
            </div>
            <div>
                    torque_command: {frames.torque_command.value}
            </div>

            </StyledTorqe>
        </GUIstyle>
    )
}


