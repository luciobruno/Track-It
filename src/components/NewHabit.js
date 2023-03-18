import { useContext, useState } from "react"
import styled from "styled-components"
import UserContext from "../contexts/UserContext"
import axios from "axios"
import { ThreeDots } from "react-loader-spinner"

export default function NewHabit() {

    const { setNewHabit, dias, setDias, habito, setHabito, dados } = useContext(UserContext)
    
    const [loading,setLoading] = useState("Salvar")
    const [ disabled,setDisabled] = useState(false)

    function cancelar() {
        setNewHabit("");
    }

    function acrescentarDia(dia) {
        if (dias.includes(dia)) {
            let novaLista = [...dias]
            novaLista.splice(novaLista.indexOf(dia), 1)
            novaLista.sort((a, b) => a - b)
            setDias(novaLista)
        } else {
            let novaLista = [...dias]
            novaLista.push(dia)
            novaLista.sort((a, b) => a - b)
            setDias(novaLista)
        }
    }

    function salvar(){
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        const body ={
            name : habito,
            days : dias
        }
        const config = {
            headers: {
                "Authorization": `Bearer ${dados.token}`
            }  
        }

        const promise = axios.post(url,body,config)

        setLoading(<ThreeDots
            height="35"     
            width="54"
            radius="5"
            color="#FFFFFF"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />)
        setDisabled(true)

        promise.then(()=>{setDisabled(false)
            setLoading("Salvar")
            setDias([])
            setHabito("")
        })

        promise.catch((err)=>{alert("Corrija os dados")
            setDisabled(false)
            setLoading("Salvar")
        })
    }

    return (
        <HabitCard data-test="habit-create-container" disabled={disabled}>
            <input data-test="habit-name-input" value={habito} onChange={(e) => setHabito(e.target.value)} type="text" placeholder="nome do hábito"></input>
            <Weekdays>
                <Weekday data-test="habit-day" dias={dias} dia={7} onClick={() => acrescentarDia(7)}>D</Weekday>
                <Weekday data-test="habit-day" dias={dias} dia={1} onClick={() => acrescentarDia(1)}>S</Weekday>
                <Weekday data-test="habit-day" dias={dias} dia={2} onClick={() => acrescentarDia(2)}>T</Weekday>
                <Weekday data-test="habit-day" dias={dias} dia={3} onClick={() => acrescentarDia(3)}>Q</Weekday>
                <Weekday data-test="habit-day" dias={dias} dia={4} onClick={() => acrescentarDia(4)}>Q</Weekday>
                <Weekday data-test="habit-day" dias={dias} dia={5} onClick={() => acrescentarDia(5)}>S</Weekday>
                <Weekday data-test="habit-day" dias={dias} dia={6} onClick={() => acrescentarDia(6)}>S</Weekday>
            </Weekdays>
            <Buttons>
                <button data-test="habit-create-cancel-btn" onClick={() => cancelar()}>Cancelar</button>
                <button data-test="habit-create-save-btn" onClick={()=> salvar()}>{loading}</button>
            </Buttons>
        </HabitCard>
    )
}

const HabitCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 354px;
    height: 180px;
    background-color: #ffffff;
    margin-top: 25px;
    border-radius: 5px;
    & input{
        margin-left: 18px;
        width: 303px;
        height: 45px;
        background-color: #FFFFFF;
        border: 1px solid #d5d5d5;
        border-radius: 5px;
        margin-bottom: 10px;        
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        margin-top: 18px;
        padding-left: 11px
    }
    & ::placeholder{
        color: #dbdbdb;
    }
`

const Weekdays = styled.div`
    display: flex;
    margin-left: 19px;
`

const Weekday = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    color: ${props => props.dias.includes(props.dia) ? "#ffffff" : "#dbdbdb"};
    border: 1px solid #d5d5d5;
    background-color: ${props => props.dias.includes(props.dia) ? "#dbdbdb" : "#ffffff"};
    border-radius: 5px;
    margin-right: 4px;
`

const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;
    margin-top: 19px;
    padding-bottom: 15px;
    & button:nth-child(1){
        width: 84px;
        height: 35px;
        background-color: #ffffff;
        border-radius: 4.7px;
        color: #52b6ff;
        border: none;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;
    }
    & button:nth-child(2){
        width: 84px;
        height: 35px;
        background-color: #52b6ff;
        border-radius: 4.7px;
        border: none;
        color: #ffffff;
        margin-left: 18px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;
        text-align: center;
    }
`