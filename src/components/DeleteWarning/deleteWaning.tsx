import { IClient, IContact } from "../../providers/GlobalContext/@types"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext/UserContext"
import { StyledH1 } from "../../styles/typography"
import { StyledDeleteWarning } from "./style"
import { ButtonStyled } from "../ButtonComponent/style"
import { useNavigate } from "react-router-dom"


interface IDeleteWarningClientProps {
    client: IClient
}
export const DeleteWarningClient = ( {client}: IDeleteWarningClientProps) => {
    const { deleteClient, isDeleteClientOpen, setIsDeleteClientOpen } = useContext(UserContext)
    const navigate = useNavigate()
    return(
        <div className="modal_box">
            <StyledDeleteWarning className="modal">
                <StyledH1 fontWeight="bold">{`Are you sure you want to delete your account, ${client.name}?`}</StyledH1>

                <span>
                    <button className="delete" onClick={() =>{
                        deleteClient()
                        localStorage.clear()
                        navigate('/')
                        setIsDeleteClientOpen(!isDeleteClientOpen)
                    }}>Delete My Account</button>
                    <ButtonStyled onClick={() => setIsDeleteClientOpen(!isDeleteClientOpen)}>Cancel</ButtonStyled>
                </span>

            </StyledDeleteWarning>
        </div>
    )
}

interface IDeleteWarningProps {
    contact: IContact
}
export const DeleteWarningContact = ({contact}: IDeleteWarningProps) => {

    const { deleteContact, isDeleteContactOpen, setIsDeleteContactOpen } = useContext(UserContext)

    return(
        <div className="modal_box">
            <StyledDeleteWarning className="modal">
                <StyledH1 fontWeight="bold">{`Are you sure you want to delete your contact, ${contact.name}?`}</StyledH1>

                <span>
                    <button className="delete" onClick={() => {deleteContact(contact.id)
                    setIsDeleteContactOpen(!isDeleteContactOpen)}}>Delete My Contact</button>
                    <ButtonStyled onClick={() => setIsDeleteContactOpen(!isDeleteContactOpen)}>Cancel</ButtonStyled>
                </span>
            </StyledDeleteWarning>
        </div>
    )
}