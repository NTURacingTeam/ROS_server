import GUIstyle from "./GUIstyle"
import { useFrames } from "../../routes/hooks/useFrames"
import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined';
import styled from "styled-components"
import { useRef, useEffect, useState } from "react"

const StyledPedal = styled.div`
    display: flex;
    align-itmes: stretch;
    flex-direction: row;
    height: inherit;
`

const PedalBarContainer = styled.div`
    height: inherit;
    width: 100%;
    alignContent: center;
    alignItems: center;
    text-align: center;
  

    span {
        font-weight: bold;
        marigin: 5em 0;
    }
`
const PedalSlider = styled.div`


    background-color: rgba(255, 179, 102, 0.8);;
    height: calc(100% - 3em);
    margin: 0 auto 0.4em auto;
    width: 60%;
    border-radius: 0.3em;
    position: relative;
`
const PedalBar = styled.div`
    position: absolute;
    background-color: gray;
    // padding: 0.2em;
    width: 100%;
    aspect-ratio: 1;
    bottom: ${props => props.distance2Bottom}px;
    border-radius: 0.3em;
    
    svg {
        position: absolute;
        transform: translate(50%, -50%);
        top: 50%;
        right: 50%;

    }
`

const MicroContainer = styled.div`
    height: inherit;
    width: 100%;
    display: flex;
    alignContent: center;
    alignItems: center;
    text-align: center;
    justify-content: space-evenly;
    flex-direction: column;

    span {
        font-weight: bold;
        marigin: 5em 0;
    }
`

const MicroIndicator = styled.div`
    background-color: rgba(0, 255, 0, 1);;
    margin: 0 auto 0.4em auto;
    width: 50%;
    aspect-ratio: 1;
    border-radius: 50%;
    position: relative;
    text-align: center;
    display: flex;
    justify-content: center;
    align-itmes: center; 

    span {
        position: absolute;
        top: 100%;
    }
    ${({ state }) => state && 'background-color:  rgba(255, 0, 0, 1);'};

`

export default () => {

    const { frames } = useFrames();
    const breakRef = useRef(null);
    const acc1Ref = useRef(null);
    const acc2Ref = useRef(null);
    const [distance2Bottom_break, setDistance2Bottom_break] = useState(0);
    const [distance2Bottom_acc1, setDistance2Bottom_acc1] = useState(0);
    const [distance2Bottom_acc2, setDistance2Bottom_acc2] = useState(0);
    const [fullHeight, setFullHeight] = useState(0);
    const { brake, accelerator_1, accelerator_2 , accelerator_micro, brake_micro} = frames;
    

    useEffect(() => {
       console.log("effect") 
       console.log(breakRef.current.offsetHeight)
       console.log(breakRef.current.offsetWidth)
       setFullHeight(breakRef.current.offsetHeight - breakRef.current.offsetWidth)
       console.log(fullHeight)
    }, [breakRef.current, acc1Ref.current, acc2Ref.current])

    const dataRow = [
        "brake",
        "accelerator_1",
        "accelerator_2",
        "accelerator_micro",
        "brake_micro"
    ]
    return (
        <GUIstyle title={"Pedal"} frames={1} columns={1}>
            <StyledPedal>
                <PedalBarContainer>
                    <PedalSlider ref={breakRef} style={{background: "rgba(255, 255, 0, 0.6)"}}>
                        <PedalBar distance2Bottom={brake.value/brake.max * fullHeight}><DehazeOutlinedIcon /></PedalBar>
                    </PedalSlider>
                    <span>brake</span>
                </PedalBarContainer>
                <PedalBarContainer>
                    <PedalSlider ref={acc1Ref}>
                        <PedalBar distance2Bottom={accelerator_1.value/accelerator_1.max * fullHeight}><DehazeOutlinedIcon /></PedalBar>
                    </PedalSlider>
                    <span>acc 1</span>
                </PedalBarContainer>
                <PedalBarContainer>
                    <PedalSlider ref={acc2Ref}>
                        <PedalBar distance2Bottom={accelerator_2.value/accelerator_2.max * fullHeight}><DehazeOutlinedIcon /></PedalBar>
                    </PedalSlider>
                    <span>acc 2</span>
                </PedalBarContainer>
                <MicroContainer>
                    <MicroIndicator state={ frames.accelerator_micro.value == 1 }><span>Acc:{frames.accelerator_micro.value}</span></MicroIndicator>
                    <MicroIndicator state={ frames.brake_micro.value == 1 }><span>Brake:{frames.brake_micro.value}</span></MicroIndicator> 
                </MicroContainer>
            </StyledPedal>
        </GUIstyle>
    )
}