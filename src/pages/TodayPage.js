import styled from "styled-components"
import UserContext from "../contexts/UserContext";
import { useContext, useEffect } from "react";
import Topo from "../components/Topo";
import Menu from "../components/Menu";
import dayjs from "dayjs";
import HabitToday from "../components/HabitToday";
import axios from "axios";

export default function TodayPage() {

    const { dados, habitsToday, setHabitsToday, concluidos } = useContext(UserContext)

    const updateLocale = require('dayjs/plugin/updateLocale')
    dayjs.extend(updateLocale)

    dayjs.updateLocale('en',{
        weekdays : ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado']
    })

    const date = dayjs().format('dddd, DD/MM')

    useEffect(()=>{
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"

        const config = {
            headers: {
                "Authorization": `Bearer ${dados.token}`
            }
        }

        const promise = axios.get(url,config)

        promise.then((res)=> {setHabitsToday(res.data)
        })

    },[habitsToday])

    return (
        <>
            <Topo></Topo> 
            <PageContainer>
                <TitlePage>
                    <div data-test="today">{date}</div>
                </TitlePage>
                <ContentPage data-test="today-counter">
                    <Text concluidos={concluidos}>Nenhum hábito concluído ainda</Text>
                    <TextPercent concluidos={concluidos}>{(concluidos/habitsToday.length)*100}% dos hábitos concluídos</TextPercent>
                </ContentPage>
                {habitsToday.map((habit)=><HabitToday key={habit.id} id={habit.id} name={habit.name} current={habit.currentSequence} highest={habit.highestSequence} done={habit.done}></HabitToday>)}
            </PageContainer>
            <Menu></Menu>
        </>

    )
}

const PageContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #f2f2f2;
    height: 100vh;
    margin-top: 70px;
    flex-direction: column;
`

const ContentPage = styled.div`
    display: flex;
    width: 338px;
    height: auto;
    margin-top: 5px;
    margin-right: 18px;
    font-family: 'Lexend Deca',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #BABABA;
`
const TitlePage = styled.div`
    display: flex;
    margin-top: 28px;
    justify-content: space-between;
    width: 100vw;
    height: 20px;
    align-items: center;
    & button{
        width: 40px;
        height: 35px;
        border-radius: 4.6px;
        background-color: #52b6ff;
        border: none;
        font-family: 'Lexend Deca',sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 26.976px;
        line-height: 34px;
        color: #FFFFFF;
        margin-right: 18px;
    }
    & div{
        font-family: 'Lexend Deca',sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
        margin-left: 17px;
    }
`

const Text = styled.div`
    display: ${props => props.concluidos === 0 ? "flex" : "none"};
`

const TextPercent = styled.div`
    display: ${props => props.concluidos === 0 ? "none" : "flex"};
    color: #8FC549;
`