import { Link } from "react-router-dom";
import { AddToCart_icon, Star_icon } from "../../assets/icon";

const Product = ({product}) => {
  const {name, newPrice, oldPrice, image, _id} = product;
    return (
      <div className="relative flex w-full  flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <Link className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" to={`/product/${_id}`}>
        <img className="object-cover w-full" src={image} alt="product image" />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>
      </Link>
      <div className="mt-4 px-5 pb-5">
        <Link to="#">
          <h5 className="text-xl tracking-tight text-slate-900">{name}</h5>
        </Link>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">${newPrice}</span>
            <span className="text-sm text-slate-900 line-through">${oldPrice}</span>
          </p>
          <div className="flex items-center">
            <Star_icon/>
            <Star_icon/>
            <Star_icon/>
            <Star_icon/>
            <Star_icon/>
            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
          </div>
        </div>
        <Link to={`/product/${_id}`} className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
          <AddToCart_icon/>
          Add to cart</Link>
      </div>
    </div>
    
    );
};

export default Product;