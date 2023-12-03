import { TLoginData } from "../../components/LoginForm/LoginSchema";
import { TClientRegister } from "../../components/RegisterForm/RegisterFormSchema";

export interface IClient {
    id: string;
    name: string;
    email: string;
    phone: string;
    picture: string;
    admin: boolean;
    clientSince: Date;
}

export interface IContact extends IClient {
    client_id: string;
}

export type TLoginResult = {
    id: number,
    token: string
}

export interface IGlobalContextProps{
    login: (formdata: TLoginData) => Promise<void>
    logout: () => void,
    registerClient: (formData: TClientRegister) => Promise<void>
    user: string | null
}

export interface IGlobalProviderProprs{
    children: React.ReactNode;
}