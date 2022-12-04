import black from "../components/img/black.jpg"
import styled from 'styled-components'

const Img = styled.img`
    width: 100%;
`

export default () => {
    return (
        <>
        <h1>homePage</h1>
        <Img src={black}></Img>
        </>
    )
}