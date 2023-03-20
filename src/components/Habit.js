import { useContext } from "react"
import styled from "styled-components"
import UserContext from "../contexts/UserContext"
import axios from "axios"

export default function Habit({ id, name, days }) {

    const { dados } = useContext(UserContext)

    function apagar() {
        const confirmar = window.confirm("Deseja apagar o hábito?")
        if ( confirmar === true) {
            const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`
            const config = {
                headers: {
                    "Authorization": `Bearer ${dados.token}`
                }
            }
            const promise = axios.delete(url, config)

            promise.catch((err)=> alert(err.response.data))
        }
    }

    return (
        <HabitCard data-test="habit-container">
            <Title>
                <div data-test="habit-name">{name}</div>
                <ion-icon data-test="habit-delete-btn" onClick={() => apagar()} name="trash-outline"></ion-icon>
            </Title>
            <Weekdays>
                <Weekday data-test="habit-day" days={days} day={0}>D</Weekday>
                <Weekday data-test="habit-day" days={days} day={1}>S</Weekday>
                <Weekday data-test="habit-day" days={days} day={2}>T</Weekday>
                <Weekday data-test="habit-day" days={days} day={3}>Q</Weekday>
                <Weekday data-test="habit-day" days={days} day={4}>Q</Weekday>
                <Weekday data-test="habit-day" days={days} day={5}>S</Weekday>
                <Weekday data-test="habit-day" days={days} day={6}>S</Weekday>
            </Weekdays>
        </HabitCard>
    )
}

const HabitCard = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 354px;
    height: auto;
    background-color: #ffffff;
    margin-top: 25px;
    border-radius: 5px;
    & ion-icon{
        width: 28px;
        height: 28px;
    }
`

const Weekdays = styled.div`
    display: flex;
    margin-top: 8px;
    margin-left: 19px;
    margin-bottom: 15px;
`

const Weekday = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    color: ${props => props.days.includes(props.day) ? "#ffffff" : "#dbdbdb"};
    border: 1px solid ${props => props.days.includes(props.day) ? "#cfcfcf" : "#d5d5d5"};
    background-color: ${props => props.days.includes(props.day) ? "#cfcfcf" : "#ffffff"};
    margin-right: 4px;
`

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    width: 320px;
    height: auto;
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color:#666666;
    margin-left: 19px;
    margin-top: 13px;
`
