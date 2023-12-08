import { createContext, useEffect, useState } from "react";
import { IGlobalContextProps, IGlobalProviderProprs } from "./@types";
import { TLoginData } from "../../components/LoginForm/LoginSchema";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { TClientRegister } from "../../components/RegisterForm/RegisterFormSchema";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext({} as IGlobalContextProps)

export const GlobalProvider = ({ children }: IGlobalProviderProprs) => {
    const [user, setUser] = useState<string | null>(null)
    const navigate = useNavigate()
    const login = async (formdata: TLoginData) => {
        try {
            const { data }  = await api.post('/login', formdata)
        
            localStorage.setItem('user@TOKEN', data.token)
            localStorage.setItem('user@ID', data.id)
            toast.success('Login realizado com sucesso!')
            setUser(data.token)
            navigate('/dashboard')
            
        } catch (error) {
            console.log(error)
            toast.error('Email ou senha inválidos!')
        }
    }

    const logout = () => {
        localStorage.removeItem('user@TOKEN')
        localStorage.removeItem('user@ID')
        toast.success('Logout efetuado com sucesso!')
        setUser(null)
        navigate('/')
    }

    const registerClient = async (formData: TClientRegister) => {
        const {confirmPassword, ...newFormData} = formData
        
        try {
            
            await api.post('/client', newFormData)
            
            toast.success('Cliente criado com sucesso!')
            if(formData.email && formData.password ){

                const loginBody = {
                    email: formData.email,
                    password: formData.password
                }
    
               await login(loginBody)
            }
        } catch (error) {
            console.log(error)
            toast.error('Não foi possível criar o cliente!')
        }
        
    }

    useEffect(() => {
        const token = localStorage.getItem('user@TOKEN')
        if(token){
            setUser(token)
            navigate('/dashboard')
        }
    }, [])

    return (
        <GlobalContext.Provider value={{
            login,
            logout,
            registerClient,
            user
        }}>
            {children}
        </GlobalContext.Provider>
    )
}