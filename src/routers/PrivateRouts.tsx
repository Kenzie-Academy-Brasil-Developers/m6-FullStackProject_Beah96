import { useContext } from 'react'
import { GlobalContext } from '../providers/GlobalContext/GlobalContext'
import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRout = () =>{
    const {user} = useContext(GlobalContext)

    return  user ? <Outlet/> : <Navigate to='/'/>
}