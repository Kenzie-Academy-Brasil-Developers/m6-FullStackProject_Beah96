import { useNavigate } from "react-router-dom";
import { LoginForm } from "../../components/LoginForm";
import { ButtonStyled } from "../../components/ButtonComponent/style";
import { StyledP } from "../../styles/typography";
import { StyledLogin } from "./style";

export const LoginPage = () => {
    
    const navigate = useNavigate();

    return (
        <StyledLogin>
            <div className="login">
                <LoginForm/>
            </div>
            
            <div className="buttons" >
                <img src="/logo.png" alt="logo" />
                <span>

                    <ButtonStyled onClick={() => navigate('/')}>Home</ButtonStyled>
                    <StyledP fontSize="small" fontWeight="normal">— or —  </StyledP>
                    <ButtonStyled onClick={() => navigate('/register')}>Register</ButtonStyled>
                </span>
            </div>
        </StyledLogin>
    )
}
