import React,{useState,useEffect} from 'react'
import Loader from './Loader'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'




function AuthLayout({
children,

}) {

    const authenticated = useSelector((state)=> state.auth.isAuthenticated)
    const navigate = useNavigate()
    const [loader,setLoader] = useState(true)

    useEffect(()=>{
        if(authenticated === true){
            navigate('/')
        }else if(authenticated === false){
            navigate('/login')
        }
        setLoader(false)

    },[authenticated,navigate])
  return  loader === true ? (<> <Loader divClass='h-screen '/> </>) : (<> {children}</>)
  
}

export default AuthLayout
