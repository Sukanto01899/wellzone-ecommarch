import { createContext, useEffect, useReducer, useState } from "react";

export const AuthContext = createContext();
export const authReducer = (state, action)=>{
    switch(action.type){
        case "LOGIN":
            return {user: action.payload}
        case "LOGOUT":
            return {user: null}
        default:
            return state
    }
}
export const AuthContextProvider = ({children}) =>{
    const [isLoading, setLoading] = useState(true)
    const [state, dispatch] =  useReducer(authReducer, {
        user: null
    })

    useEffect(()=>{0
        const user = localStorage.getItem('user');

        if(user){
            dispatch({type: 'LOGIN', payload: JSON.parse(user)})
            setLoading(false)
        }else{
            setLoading(false)
        }
    }, [])

    console.log('Authcontext: ', state)

    return (
        <AuthContext.Provider value={{...state,isLoading, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}