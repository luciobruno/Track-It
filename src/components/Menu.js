import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function Menu() {

    const navigate = useNavigate()
    const { concluidos, habitsToday } = useContext(UserContext)

    function pagina(page) {
        navigate(`/${page}`)
    }

    return (
        <MenuContainer data-test="menu">
            <div data-test="habit-link" onClick={() => pagina("habitos")}>Hábitos</div>
            <span onClick={() => pagina("hoje")} data-test="today-link" style={{ width: 100, height: 100 }}>
                <CircularProgressbar
                    value={ concluidos === 0 ? 0 : concluidos/habitsToday.length}
                    maxValue={1}
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
            <div data-test="history-link" onClick={() => pagina("historico")}>Histórico</div>
        </MenuContainer>
    )
}

const MenuContainer = styled.div`
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