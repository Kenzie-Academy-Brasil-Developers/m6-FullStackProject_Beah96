import { ButtonStyled } from "../../components/ButtonComponent/style"
import { StyledH1, StyledP } from "../../styles/typography"
import { StyledHome } from "./style"
import { useNavigate } from "react-router-dom"

export const Home = () => {

    const navigate = useNavigate()

    return (
        
            <StyledHome>
                <section className="logo_section">
                    <StyledH1 fontWeight="extrabold">Welcome to</StyledH1>
                    <img src="/empresa_transparencia.png" alt="logo" />
                </section>

                <section className="login_section">
                    <img className="logo" src="/logo.png" alt="logo"/>
                    <StyledH1 fontWeight="extrabold">Let's chat?</StyledH1>
                    <ButtonStyled onClick={() => navigate('/login')}>Sign in</ButtonStyled>
                    <StyledP fontSize="small" fontWeight="semibold"> — Don't have an account? —</StyledP>
                    <ButtonStyled onClick={() => navigate('/register')}>Sign up</ButtonStyled>
                </section>
            </StyledHome>
        
    )
}