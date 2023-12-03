import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { GlobalContext } from "../../providers/GlobalContext/GlobalContext";
import { TClientRegister, clientRegisterSchema } from "./RegisterFormSchema";
import { StyledH3 } from "../../styles/typography";
import { InputComponent } from "../InputComponent";
import { ButtonStyled } from "../ButtonComponent/style";
import { StyledRegisterForm } from "./style";
export const RegisterForm= () => {

    const { register, handleSubmit, formState: { errors } } = useForm<TClientRegister>({
        resolver: zodResolver(clientRegisterSchema)
    })

    const { registerClient } = useContext(GlobalContext)

    const submit = (formData: TClientRegister) => {

        registerClient(formData)
       
    }

    return (
        <>
            <StyledH3 fontWeight="extrabold">Join Us</StyledH3>

            <StyledRegisterForm onSubmit={handleSubmit(submit)}>
                <InputComponent type="text" placeholder="Name" {...register('name')} />
                <InputComponent type="email" placeholder="Email" {...register('email')} />
                {errors.email?.message}
                <InputComponent type="text" placeholder="Phone" {...register('phone')} />
                <InputComponent type="text" placeholder="Link to picture" {...register('picture')} />
                <InputComponent type="password" placeholder="Password" {...register('password')} />
                {errors.password?.message}
                <InputComponent type="password" placeholder="Confirm password" {...register('confirmPassword')} />
                {errors.confirmPassword?.message}

                <ButtonStyled type="submit">Sign up</ButtonStyled>

            </StyledRegisterForm>


            
        </>
    )
}