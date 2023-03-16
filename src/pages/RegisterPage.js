import { useState } from "react"
import styled from "styled-components"
import logo from "../assets/logo-completa.svg"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { ThreeDots } from "react-loader-spinner"

export default function RegisterPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nome, setNome] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate()
    const [disabled, setDisabled] = useState(false)
    const [loading,setLoading] = useState("Cadastrar")

    function cadastrar(event) {
        event.preventDefault()

        const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", {
            email: email,
            name: nome,
            image: image,
            password: password
        }
        )

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

        requisicao.then((res) => {navigate("/")
            
        })

        requisicao.catch((err) => {
            if(err.response.data.details.length > 0){
                alert("Por favor, preencha todos os campos")
            }
            setDisabled(false)
            setLoading("Cadastrar")
        })

    }

    return (
        <PageContainer>
            <img src={logo} alt={logo}></img>
            <form onSubmit={cadastrar}>
                <input data-test="email-input" disabled={disabled} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email"></input>
                <input data-test="password-input" disabled={disabled} type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="senha"></input>
                <input data-test="user-name-input" disabled={disabled} type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="nome"></input>
                <input data-test="user-image-input" disabled={disabled} type="url" value={image} onChange={(e) => setImage(e.target.value)} placeholder="foto"></input>
                <button data-test="signup-btn" disabled={disabled} type="submit">
                    <div>{loading}</div>  
                </button>
            </form>
            <Link data-test="login-link" to="/">
                <Login>Já tem uma conta? Faça login!</Login>
            </Link>
        </PageContainer>
    )
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

const Login = styled.div`
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