import { createContext, useEffect, useState } from "react";
import { IUserContext, IUserProviderProps } from "./@types";
import { api } from "../../services/api";
import { IClient, IContact } from "../GlobalContext/@types";
import { toast } from "react-toastify";
import { TClientEdit } from "../../components/EditClient/editClientSchema";
import { TContactCreate } from "../../components/createContactForm/createContactSchema";
import { TContactEdit } from "../../components/EditContact/editContactSchema";


export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({ children }: IUserProviderProps) => {
    const token = localStorage.getItem('user@TOKEN')
    const id = localStorage.getItem('user@ID')
    const [user, setUser] = useState<IClient | null>(null)
    const [contact, setContact] = useState<IContact | null>(null)
    const [contactsList, setContactsList] = useState<IContact[]>([])
    const [isEditContactOpen, setIsEditContactOpen] = useState(false)
    const [isDeleteContactOpen, setIsDeleteContactOpen] = useState(false)
    const [isDeleteClientOpen, setIsDeleteClientOpen] = useState(false)
    
    const editClient =async (formData: TClientEdit) => {
        try {
            await api.patch<IClient>(`/client/${id}/`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast.success('Cliente editado com sucesso!')

        } catch (error) {
            console.log(error)
            toast.error('Não foi possível editar o cliente!')
        }
    }
    const deleteClient =async () => {
        try {
            await api.delete(`/client/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast.success('Cliente excluído com sucesso!')
            
            
        } catch (error) {
            console.log(error)
            toast.error('Não foi possível excluir o cliente!')
        }
    }
    
    const registerContact =async (formData : TContactCreate) => {
        try {
            await api.post(`/contact/client/${id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast.success('Contato criado com sucesso!')

            
        } catch (error) {
            
        }
    }

    const editContact =async (formData: TContactEdit, contact_id : string) => {
        try {
            await api.patch(`/contact/${contact_id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast.success('Contato editado com sucesso!')
            
        } catch (error) {
            console.log(error)
            toast.error('Não foi possível editar o contato!')
            
        }
    }

    const deleteContact =async (contact_id : string) => {
        try {
            await api.delete(`/contact/${contact_id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast.success('Contato excluído com sucesso!')
            
        } catch (error) {
            console.log(error)
            toast.error('Não foi possível excluir o contato!')
        }
    }

    useEffect(() => {
        try {
            const getUser = async () => {
                const { data } = await api.get<IClient>(`/client/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setUser(data)
            }

            const getContacts = async () => {
                const { data } = await api.get<IContact[]>(`/contact/client/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setContactsList(data)
            }

            getUser()
            getContacts()
            
        } catch (error) {
            console.log(error)
        }
    }, [contact, user])

    
    return (
        <UserContext.Provider value={{
            token,
            id,
            editClient,
            deleteClient,
            registerContact,
            editContact,
            deleteContact,
            isEditContactOpen,
            setIsEditContactOpen,
            isDeleteContactOpen,
            setIsDeleteContactOpen,
            isDeleteClientOpen,
            setIsDeleteClientOpen,
            user,
            contactsList,
            contact,
            setContact
        }}>
            {children}
        </UserContext.Provider>
    )
}


