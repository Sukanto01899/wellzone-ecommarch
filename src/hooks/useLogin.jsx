import { useQuery } from "react-query";
import fetchApi from "../api/fetchApi";

const useLogin = (user) => {
    const {isLoading, error, data: login} = useQuery({queryFn: ()=> fetchApi.post('login', user)})
    return [isLoading, error, login]
};

export default useLogin;