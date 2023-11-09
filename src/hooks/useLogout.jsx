import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export const useLogout = ()=>{
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const {dispatch} = useContext(AuthContext)
    const logout =async ()=>{
        try{
            setLoading(true)
            await axios.get('/user/logout', {withCredentials: true});
            localStorage.removeItem('user')
            dispatch({type: 'LOGOUT', payload: null})
        }catch(err){
            setError(err)
        }finally{
            setLoading(false)
        }
    }

    return [logout, isLoading, error]
}