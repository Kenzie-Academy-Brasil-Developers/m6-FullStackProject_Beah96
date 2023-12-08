import { useContext } from "react"
import { UserContext } from "../../providers/UserContext/UserContext"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import { IContact } from "../../providers/GlobalContext/@types"
import { contactEditSchema, TContactEdit } from "./editContactSchema";
import { StyledH3 } from "../../styles/typography";
import { InputComponent } from "../InputComponent";
import { ButtonStyled } from "../ButtonComponent/style";



interface EditContactModalProps {
    contact : IContact
}
export const EditContactModal = ({contact}: EditContactModalProps) => {
    const { editContact, setIsEditContactOpen, isEditContactOpen, setContact } = useContext(UserContext)

    const { register, handleSubmit} = useForm({
        resolver: zodResolver(contactEditSchema)
    })

    const submit = (formData: TContactEdit ) => {
        editContact(formData, contact.id)
        setIsEditContactOpen(!isEditContactOpen)
        setContact(null)
    }
    
    return(
        <div className="modal_box">
            <div className="modal">
                <StyledH3 fontWeight="bold"> Edit Contact</StyledH3>
                <form onSubmit={handleSubmit(submit)}>
                    <InputComponent type="text" placeholder="Name" {...register('name')} defaultValue={contact.name}/>
                    <InputComponent type="email" placeholder="Email" {...register('email')} defaultValue={contact.email}/>
                    <InputComponent type="text" placeholder="Phone" {...register('phone')} defaultValue={contact.phone}/>
                    <InputComponent type="text" placeholder="Link to picture" {...register('picture')} defaultValue={contact.picture}/>

                    <ButtonStyled type="submit">Save</ButtonStyled>
                </form>
                <ButtonStyled onClick={() => setIsEditContactOpen(!isEditContactOpen)} className="delete">Cancelar</ButtonStyled>
            </div>
        
        </div>
    )
}

