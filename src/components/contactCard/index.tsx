import { useContext } from "react"
import { UserContext } from "../../providers/UserContext/UserContext"
import {  StyledP } from "../../styles/typography";
import { IContact } from "../../providers/GlobalContext/@types";
import { FaTrashAlt } from "react-icons/fa";
import { IoPencilSharp } from "react-icons/io5";
import { StyledContactCard } from "./style";
import { FaCircleUser } from "react-icons/fa6";


interface ContactCardProps {
    contacts: IContact
}
export const ContactCard = ({contacts}: ContactCardProps) => {
    const { isEditContactOpen, setIsEditContactOpen, isDeleteContactOpen, setIsDeleteContactOpen, setContact } = useContext(UserContext)

    return (
        <StyledContactCard key={contacts.id}> 
            <div className="profile">
                {contacts.picture ? <img src={contacts.picture} alt="Profile Picture" /> : <FaCircleUser id="profile-icon"/>}
                
                <StyledP fontSize="big" fontWeight="bold">{contacts.name}</StyledP>
            </div>

            <div className="info">
                <span>
                    <StyledP fontWeight="bold" fontSize="small">{contacts.email}</StyledP>
                    <StyledP fontSize="small" fontWeight="bold">{contacts.phone}</StyledP>
                </span>

                <span>
                    <button onClick={() =>{
                        setContact(contacts)
                       setIsEditContactOpen(!isEditContactOpen)
                    }}
                    ><IoPencilSharp width={70} height={70} /></button>

                    <button onClick={() => {setIsDeleteContactOpen(!isDeleteContactOpen)
                    setContact(contacts)}
                    }><FaTrashAlt width={70} height={70}/></button>
                </span>
            </div>
                 
        </StyledContactCard>
    )
}