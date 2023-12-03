import { TClientEdit } from "../../components/EditClient/editClientSchema"
import { TContactEdit } from "../../components/EditContact/editContactSchema"
import { TContactCreate } from "../../components/createContactForm/createContactSchema"
import { IClient, IContact } from "../GlobalContext/@types"

export interface IUserProviderProps {
    children: React.ReactNode
}

export interface IUserContext{
    token: string | null
    id: string | null
    editClient: (formData: TClientEdit) => void
    deleteClient: () => void
    registerContact: (formData: TContactCreate) => Promise<void>
    editContact: (formData: TContactEdit, contact_id : string) => void
    deleteContact: (contact_id : string) => void
    isEditContactOpen: boolean
    setIsEditContactOpen: React.Dispatch<React.SetStateAction<boolean>>
    isDeleteContactOpen: boolean
    setIsDeleteContactOpen: React.Dispatch<React.SetStateAction<boolean>>
    isDeleteClientOpen: boolean
    setIsDeleteClientOpen: React.Dispatch<React.SetStateAction<boolean>>
    user: IClient | null
    contactsList: IContact[]
    contact: IContact | null
    setContact: React.Dispatch<React.SetStateAction<IContact | null>>
}