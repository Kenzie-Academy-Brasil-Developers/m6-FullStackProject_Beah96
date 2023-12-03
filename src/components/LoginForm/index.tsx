import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { GlobalContext } from "../../providers/GlobalContext/GlobalContext";
import { loginSchema, TLoginData } from "./LoginSchema";
import { StyledInput } from "../InputComponent/style";
import { StyledH3, StyledP } from "../../styles/typography";
import { ButtonStyled } from "../ButtonComponent/style";
import { StyledLoginForm } from "./style";

export const LoginForm = () => {
    const { login } = useContext(GlobalContext)
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm<TLoginData>({
        resolver: zodResolver(loginSchema)
    })

    const submit = (formData: TLoginData) => {
        login(formData)
        navigate('/dashboard')
    }

    return(
        <>
            
            <StyledH3 fontWeight="extrabold">Login</StyledH3>

            <StyledLoginForm onSubmit={handleSubmit(submit)}>
                <StyledInput type="email" placeholder="Email" {...register('email')} />
                <StyledP fontSize="small" fontWeight="normal">{errors.email?.message}</StyledP>
                <StyledInput type="password" placeholder="Password" {...register('password')}/>
                <StyledP fontSize="small" fontWeight="normal">{errors.password?.message}</StyledP>
                <ButtonStyled type="submit">Sign in</ButtonStyled>
            </StyledLoginForm>                
                
        </>
    )
}