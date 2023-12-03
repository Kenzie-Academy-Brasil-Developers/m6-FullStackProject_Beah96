import { PublicRout } from "./PublicRouts";
import { ProtectedRout } from "./PrivateRouts";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { LoginPage } from "../pages/Login";
import { RegisterPage } from "../pages/Register";
import { UserProvider } from "../providers/UserContext/UserContext";
import { Dashboard } from "../pages/Dashboard";

export const RoutsMain = () => {
    return (
        <Routes>
            <Route element={<PublicRout />}>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/register' element={<RegisterPage/>}/>             
            </Route>

            <Route element={<ProtectedRout />}>
                <Route path='/dashboard' element={<UserProvider><Dashboard/></UserProvider>}/>          
            </Route>            
        </Routes>
    )
}