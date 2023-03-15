import styled from "styled-components"
import logo from "../assets/logo-completa.svg"
import { Link } from "react-router-dom";

export default function HomePage() {

    function login(){

    }

    return (
        <PageContainer>
            <img src={logo} alt={logo}></img>
            <form onSubmit={login}>
                <input type="email" placeholder="email"></input>
                <input type="password" placeholder="senha"></input>
                <button type="submit"> Entrar</button>
            </form>
            <Link to="/cadastro">
                <Register>Não tem uma conta? Cadastre-se!</Register>
            </Link>
        </PageContainer>
    );
}

const PageContainer = styled.div`
    display: flex;
    height: 100vh;
    margin-top: 68px;
    align-items: center;
    text-align: center;
    flex-direction: column;
    background-color: #ffffff;
    & input{
        width: 303px;
        height: 45px;
        background-color: #FFFFFF;
        border: 1px solid #d5d5d5;
        border-radius: 5px;
        margin-bottom: 6px;        
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
    }
    & ::placeholder{
        color: #dbdbdb;
        padding-left: 11px;
    }
    & button{
        width: 303px;
        height: 45px;
        background-color: #52b6ff;
        border-radius: 4.6px;
        border: none;
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 21px;
        line-height: 26px;
        color: #ffffff;
    }
    & img{
        margin-bottom: 36px;
    }
`

const Register = styled.div`
    margin-top: 25px;
    font-family: 'Lexend Deca',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
`