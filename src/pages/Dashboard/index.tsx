import { StyledH2 } from "../../styles/typography"
import { useContext, useState } from "react"
import { UserContext } from "../../providers/UserContext/UserContext"
import { GlobalContext } from "../../providers/GlobalContext/GlobalContext";
import { FaCircleUser } from "react-icons/fa6";
import { StyledDashboard, StyledHeader } from "./style";
import { MenuButton } from "../../components/ButtonComponent/style";
import { CreateContactForm } from "../../components/createContactForm";
import { ContactCard } from "../../components/contactCard";
import { EditClientModal } from "../../components/EditClient";
import { EditContactModal } from "../../components/EditContact";
import { DeleteWarningClient, DeleteWarningContact } from "../../components/DeleteWarning/deleteWaning";

export const Dashboard = () => {
    const { user, contactsList, isEditContactOpen, contact, isDeleteClientOpen, isDeleteContactOpen } = useContext(UserContext)
    const { logout } = useContext(GlobalContext)
    const [userOptions, setUserOptions] =  useState<'myContacts' | 'createContact' | 'editClient'>('myContacts')
    


    return (
        <>
            <StyledDashboard>
                <StyledHeader>
                    <img src="/logo_transparencia.png" alt="Chat logo" />

                    <StyledH2 fontWeight="extrabold"> Welcome, {user?.name}!</StyledH2>

                    {user && user.picture ? <img id="profile" src={user.picture}alt="Profile picture" /> : <FaCircleUser id="profile-icon" />}
                </StyledHeader>

                <section className="buttons">

                    <MenuButton onClick={() => setUserOptions('myContacts')}>My contacts</MenuButton>

                    <MenuButton onClick={() => setUserOptions('createContact')}>Create New Contact</MenuButton>

                    <MenuButton onClick={() => setUserOptions('editClient')}> Edit My Profile</MenuButton>

                    <MenuButton onClick={logout}>Log Out</MenuButton>

                </section>

                <section>
                    {userOptions === 'myContacts' && contactsList.length > 0 ? <ul className="contacts">
                        {contactsList.map((contact) => (
                        <ContactCard contacts={contact} />
                    )) } </ul> : userOptions === 'myContacts' && contactsList.length <= 0 ? (<StyledH2 fontWeight="extrabold"> You don't have any contacts yet</StyledH2>): null}
                    {userOptions === 'createContact' && <CreateContactForm/>}
                    {user &&userOptions === 'editClient' && <EditClientModal client={user} />}
                </section>
                {isEditContactOpen && contact && <EditContactModal contact={contact} />}
                {isDeleteClientOpen && user && <DeleteWarningClient client={user} />}
                {isDeleteContactOpen && contact && <DeleteWarningContact contact={contact} />}
            </StyledDashboard>

        </>
    )
}