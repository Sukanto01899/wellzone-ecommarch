import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAdminLogin = ()=>{
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const {dispatch} = useContext(AuthContext)

    const adminLogin =async (body)=>{
        try{
            setLoading(true)
            const res = await axios.post(`/user/admin-login`, body, {withCredentials: true});
            localStorage.setItem('user', JSON.stringify(res.data));
            dispatch({type: 'LOGIN', payload: res.data})
        }catch(err){
            setError(err)
        }finally{
            setLoading(false)
        }
    }


    return [adminLogin, isLoading, error]
}