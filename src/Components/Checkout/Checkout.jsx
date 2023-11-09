import { AddToCart_icon } from "../../assets/icon";

const Checkout = ({price}) => {
    return (
        <form className="mt-10">
              {/* Colors */}
                <h3 className="text-sm font-medium text-gray-900">Color</h3>
              {/* Form buy */}

      <div className="flex min-h-full flex-1 flex-col justify-center">
        <div className="mt-10 sm:mx-auto sm:w-full ">
          
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              নাম
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="name"
                  type="text"
                  placeholder='নাম'
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <span className="text-sm text-red-400">eroor</span>
            </div>

            <div>
              <div className="mt-2">
                <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">
                মোবাইল নাম্বার
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="number"
                  name="number"
                  type="text"
                  placeholder='মোবাইল নাম্বার'
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="mt-2">
                <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">
                মোবাইল নাম্বার
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="number"
                  name="number"
                  type="text"
                  placeholder='মোবাইল নাম্বার'
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="mt-2">
                <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">
                মোবাইল নাম্বার
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="number"
                  name="number"
                  type="text"
                  placeholder='মোবাইল নাম্বার'
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

         
        </div>
      </div>

              
{/* BUy end */}
<div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
          <div className="">
            <h1 className="text-3xl font-bold">${price}</h1>
          </div>

          <button type="button" className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
            <AddToCart_icon/>
            Add to cart
          </button>
        </div>
        
        </form>
    );
};

export default Checkout;