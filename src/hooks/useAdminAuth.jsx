import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useAdminAuth = () => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error('context error')
    }
    return context
};

export default useAdminAuth;