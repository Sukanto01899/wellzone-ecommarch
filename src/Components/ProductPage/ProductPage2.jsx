import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import fetchApi from "../../api/fetchApi";
import { Card_icon, Earth_icon, Star_icon } from "../../assets/icon";
import Checkout from "../Checkout/Checkout";
import PageLoading from "../Loader/PageLoading";


const ProductPage2 = () => {
    const {id} = useParams();
    const {isLoading, error, data:product} = useQuery({queryFn: ()=> fetchApi.get(`product/${id}`), queryKey: ["product"]});

    if(isLoading){
        return <PageLoading/>
    }
    if(error){
        return <h1>Error</h1>
    }
   
    return (
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl"> 
  <div className="container mx-auto px-4">
    <nav className="flex">
      <ol role="list" className="flex items-center">
        <li className="text-left">
          <div className="-m-1">
            <a href="#" className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"> Home </a>
          </div>
        </li>

        <li className="text-left">
          <div className="flex items-center">
            <span className="mx-2 text-gray-400">/</span>
            <div className="-m-1">
              <a href="#" className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"> Products </a>
            </div>
          </div>
        </li>

        <li className="text-left">
          <div className="flex items-center">
            <span className="mx-2 text-gray-400">/</span>
            <div className="-m-1">
              <a href="#" className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800" aria-current="page"> {product.name} </a>
            </div>
          </div>
        </li>
      </ol>
    </nav>

    <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
    <div className="lg:col-span-3 lg:row-end-1">
          <div className="lg:order-2 lg:ml-5">
            <div className="max-w-xl overflow-hidden rounded-lg">
              <img className="h-full w-full max-w-full object-cover" src={product.image} alt="" />
            </div>
          </div>
      </div>

      <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
        <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">{product.name}</h1>

        <div className="mt-5 flex items-center">
          <div className="flex items-center">
           <Star_icon/>
           <Star_icon/>
           <Star_icon/>
           <Star_icon/>
           <Star_icon/>
          </div>
          <p className="ml-2 text-sm font-medium text-gray-500">1,209 Reviews</p>
        </div>
        
{/* Checkout */}
<Checkout price={product.newPrice} product_id={id}/>
       

        <ul className="mt-8 space-y-2">
          <li className="flex items-center text-left text-sm font-medium text-gray-600">
            <Earth_icon/>
            Free shipping worldwide
          </li>

          <li className="flex items-center text-left text-sm font-medium text-gray-600">
           <Card_icon/>
            Cancel Anytime
          </li>
        </ul>
      </div>

      <div className="lg:col-span-3">
        <div className="border-b border-gray-300">
          <nav className="flex gap-4">
            <a href="#" title="" className="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"> Description </a>

            <a href="#" title="" className="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600">
              Reviews
              <span className="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100"> 1,209 </span>
            </a>
          </nav>
        </div>

        <div className="mt-8 flow-root sm:mt-12">
          <h1 className="text-3xl font-bold">Delivered To Your Door</h1>
          <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusantium nesciunt fuga.</p>
          <h1 className="mt-8 text-3xl font-bold">From the Fine Farms of Brazil</h1>
          <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam enim facere.</p>
          <p className="mt-4">Amet consectetur adipisicing elit. Optio numquam enim facere. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore rerum nostrum eius facere, ad neque.</p>
        </div>
      </div>
    </div>
  </div>
</section>

    );
};

export default ProductPage2;