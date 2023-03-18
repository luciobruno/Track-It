import styled from "styled-components"
import logo from "../assets/logo-completa.svg"
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ThreeDots } from "react-loader-spinner"
import axios from "axios";
import UserContext from "../contexts/UserContext";

export default function HomePage() {

    const {setDados} = useContext(UserContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const [disabled, setDisabled] = useState(false)
    const [loading, setLoading] = useState("Login")

    function login(event) {
        event.preventDefault()

        const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",{
            email:email,
            password:password
        })

        setDisabled(true)
        setLoading(<ThreeDots
            height="45"
            width="80"
            radius="9"
            color="#FFFFFF"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />)

        requisicao.then((res) => {
            navigate("/hoje")
            setDados(res.data)
        })

        requisicao.catch((err) => {
            alert(err)
            setDisabled(false)
            setLoading("Login")
        })

    }

    return (
        <PageContainer>
            <img src={logo} alt={logo}></img>
            <form onSubmit={login}>
                <input data-test="email-input" disabled={disabled} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email"></input>
                <input data-test="password-input" disabled={disabled} type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="senha"></input>
                <button data-test="login-btn" disabled={disabled} type="submit">
                    <div>{loading}</div>
                </button>
            </form>
            <Link data-test="signup-link" to="/cadastro">
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
        padding-left: 11px;
    }
    & ::placeholder{
        color: #dbdbdb;
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
    & div{
        display: flex;
        justify-content: center;
        align-items: center;
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