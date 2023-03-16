import styled from "styled-components"
import { CircularProgressbar, buildStyles, } from 'react-circular-progressbar';
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";

export default function HabitsPage() {

    const { dados,concluidos } = useContext(UserContext)
    const navigate = useNavigate()

    function pagina(page){
        navigate(`/${page}`)
    }

    return (
        <>
            <Topo>
                <div>TrackIt</div>
                <img src={dados.image} alt={dados.image}></img>
            </Topo>
            <PageContainer>
                <TitlePage>
                    <div>Meus hábitos</div>
                    <button>+</button>
                </TitlePage>
                <HabitCard>
                    <input type="text" placeholder="nome do hábito"></input>
                    <Weekday>
                        <div>D</div>
                        <div>S</div>
                        <div>T</div>
                        <div>Q</div>
                        <div>Q</div>
                        <div>S</div>
                        <div>S</div>
                    </Weekday>
                    <Buttons>
                        <button>Cancelar</button>
                        <button>Salvar</button>
                    </Buttons>
                </HabitCard>
                <ContentPage>
                    <div>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</div>
                </ContentPage>
            </PageContainer>
            <Menu>
                <div onClick={()=>pagina("habitos")}>Hábitos</div>
                <span style={{width: 100,height: 100}}>
                    <CircularProgressbar
                        value={concluidos}
                        text={"Hoje"}
                        background
                        backgroundPadding={5}
                        strokeWidth={8}
                        styles={buildStyles({
                            backgroundColor: "#52B6FF",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent"
                        })}
                    />
                </span>
                <div onClick={()=>pagina("historico")}>Histórico</div>
            </Menu>
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
    margin-top: 28px;
    width: 338px;
    height: 74px;
    margin-right: 10px;
    font-family: 'Lexend Deca',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
`

const HabitCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 354px;
    height: 180px;
    background-color: #ffffff;
    margin-top: 25px;
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

const Weekday = styled.div`
    display: flex;
    margin-left: 19px;
    & div{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        color: #dbdbdb;
        border: 1px solid #d5d5d5;
        border-radius: 5px;
        margin-right: 4px;
    }
`
const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;
    margin-top: 19px;
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
    }
`

const Topo = styled.div`
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
const Menu = styled.div`
    width: 100vw;
    height: 70px;
    background-color: #ffffff;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: 'Lexend Deca',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52B6FF;
    & span{
        margin-bottom: 50px;
        .CircularProgressbar-text{
            text-anchor: middle;
            alignment-baseline: middle;
        }
    }
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