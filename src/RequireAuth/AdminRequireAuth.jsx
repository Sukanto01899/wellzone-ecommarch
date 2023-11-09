import { Navigate } from 'react-router-dom';
import useAdminAuth from '../hooks/useAdminAuth';

const AdminRequireAuth = ({children}) => {
    const {user, isLoading} = useAdminAuth();
    console.log(user)
    if(isLoading){
        return <h1>Loading</h1>
    }
    if(!user) {
        return <Navigate to='/admin-login'/>
    }

    return children;
};

export default AdminRequireAuth;