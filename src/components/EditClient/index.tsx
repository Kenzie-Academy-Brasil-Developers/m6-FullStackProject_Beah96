import { useContext } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { IClient } from "../../providers/GlobalContext/@types";
import { clientEditSchema, TClientEdit } from "./editClientSchema";
import { StyledH3 } from "../../styles/typography";
import { InputComponent } from "../InputComponent";
import { ButtonStyled } from "../ButtonComponent/style";
import { StyledEditClient } from "./style";

interface EditClientModalProps {
    client: IClient
}

export const EditClientModal = ({client}: EditClientModalProps) => {

    const { editClient, isDeleteClientOpen, setIsDeleteClientOpen } = useContext(UserContext)

    const { register, handleSubmit} = useForm({
        resolver: zodResolver(clientEditSchema)
    })

    const submit = (formData: TClientEdit) => {
        editClient(formData)
    }

    return (
        
        <StyledEditClient className="modal">
            <StyledH3 fontWeight="bold"> Edit My Profile</StyledH3>
            <form onSubmit={handleSubmit(submit)}>
                <InputComponent type="text" placeholder="Name" {...register('name')} defaultValue={client.name} />
                <InputComponent type="email" placeholder="Email" {...register('email')} defaultValue={client.email} />
                <InputComponent type="text" placeholder="Phone" {...register('phone')} defaultValue={client.phone} />
                <InputComponent type="text" placeholder="Link to picture" {...register('picture')} defaultValue={client.picture} />


                    <ButtonStyled type="submit">Save</ButtonStyled>
            </form>
                    <button onClick={() => setIsDeleteClientOpen(!isDeleteClientOpen)} className="delete">Delete My Account</button>
            
        </StyledEditClient>
    )
}


