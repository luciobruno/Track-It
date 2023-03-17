import { useContext } from "react"
import UserContext from "../contexts/UserContext"
import styled from "styled-components"

export default function Topo() {

    const { dados } = useContext(UserContext)

    return (
        <TopoContainer data-test="header">
            <div>TrackIt</div>
            <img src={dados.image} alt={dados.image}></img>
        </TopoContainer>
    )
}

const TopoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 70px;
    background-color: #126ba5;
    font-family: 'Playball', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    color: #FFFFFF;
    position: fixed;
    top: 0;
    & img{
        width: 51px;
        height: 51px;
        border-radius: 98px;
        margin-right: 18px;
    }
    & div{
        margin-left: 18px;
    }
`