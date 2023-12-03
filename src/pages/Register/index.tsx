import { useNavigate } from "react-router-dom";
import { RegisterForm } from "../../components/RegisterForm";
import { StyledRegister } from "./style";
import { ButtonStyled } from "../../components/ButtonComponent/style";
import { StyledP } from "../../styles/typography";

export const RegisterPage = () => {

    const navigate = useNavigate();

    return (
        <StyledRegister>
            <RegisterForm/>
            <div className="buttons">
                <img src="/logo.png" alt="logo" />
                <span>
                    <ButtonStyled onClick={() => navigate('/')}>Home</ButtonStyled>
                    <StyledP fontSize="small" fontWeight="normal"> — or —</StyledP>
                    <ButtonStyled onClick={() => navigate('/login')}>Sign in</ButtonStyled>
                </span>
            </div>
        </StyledRegister>
    )
}