import axios from "axios"
import { useContext } from "react"
import styled from "styled-components"
import UserContext from "../contexts/UserContext"

export default function HabitToday({ id, name, current, highest, done }) {

    const {dados} = useContext(UserContext)

    function checkar() {
        if (done === false){
            const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`
            
            const body = {}
            
            const config = {
                headers: {
                    "Authorization": `Bearer ${dados.token}`
                }
            }
            const promise = axios.post(url,body,config)
            promise.then(()=>{})
        }else{
            const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`
            
            const body = {}

            const config = {
                headers: {
                    "Authorization": `Bearer ${dados.token}`
                }
            }
            const promise = axios.post(url,body,config)
            promise.then(()=>{})
        }
    }

    return (
        <HabitCard data-test="today-habit-container">
            <ContentPage>
                <Title data-test="today-habit-name">{name}</Title>
                <Subtitle>
                    <div data-test="today-habit-sequence" >Sequência atual: <Current done={done}>{current} dias</Current></div>
                    <div data-test="today-habit-record">Seu recorde: <Sequency highest={highest} current={current}>{highest} dias</Sequency></div>
                </Subtitle>
            </ContentPage>
            <Check data-test="today-habit-check-btn" done={done} onClick={() => checkar()}><ion-icon name="checkbox"></ion-icon></Check>
        </HabitCard>
    )
}

const ContentPage = styled.div`
    width: 240px;
    height: auto;
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    margin-top: 13px;
`

const Title = styled.div`
    font-family: 'Lexend Deca',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
`

const Subtitle = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
    margin-top: 7px;
    padding-bottom: 17px;
`

const Sequency = styled.span`
    color: ${(props => props.current !== props.highest || props.highest === 0 ? "#666666":"#8FC549")};
`

const Current = styled.span`
    color: ${(props => props.done === true ? "#8FC549":"#666666")};
`

const Check = styled.div`
    margin-right: 8px;
    & ion-icon{
        width: 88px;
        height: 88px;
        color: ${(props => props.done === true ? "#8FC549":"#EBEBEB")};
        border-radius: 5px;
    }
`

const HabitCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 354px;
    height: auto;
    background-color: #ffffff;
    margin-top: 25px;
    border-radius: 5px;
`

