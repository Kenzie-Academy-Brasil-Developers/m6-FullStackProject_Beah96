import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { StyledH3 } from "../../styles/typography";
import { InputComponent } from "../InputComponent";
import { ButtonStyled } from "../ButtonComponent/style";
import { UserContext } from "../../providers/UserContext/UserContext";
import { TContactCreate, contactCreateSchema } from "./createContactSchema";
import { StyledContainter } from "./style";

export const CreateContactForm = () => { 
    const { registerContact } = useContext(UserContext)
    const { register, handleSubmit} = useForm<TContactCreate>({
        resolver: zodResolver(contactCreateSchema)
    })

    const submit = (formData: TContactCreate) => {
        registerContact(formData)
    }

    return (
        <StyledContainter>
            <StyledH3 fontWeight="extrabold">Register Contact</StyledH3>
            <form onSubmit={handleSubmit(submit)}>
                <InputComponent type="text" placeholder="Name" {...register('name')} />
                <InputComponent type="email" placeholder="Email" {...register('email')} />
                <InputComponent type="text" placeholder="Phone" {...register('phone')} />
                <InputComponent type="text" placeholder="Link to picture" {...register('picture')} />

                <span>
                    <ButtonStyled type="submit">Register</ButtonStyled>
                </span>
            </form>
        </StyledContainter>
    )
}