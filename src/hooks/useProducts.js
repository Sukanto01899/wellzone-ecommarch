import { useQuery } from "react-query";
import fetchApi from "../api/fetchApi";

const useProducts = ()=>{
    const {isLoading, error, data:products} = useQuery({queryKey: ['products'], queryFn: ()=> fetchApi.get('product')})
    return [products, isLoading, error]
}

export default useProducts;