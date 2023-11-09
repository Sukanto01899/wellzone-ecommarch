
import axios from 'axios';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './Components/Common/Footer';
import Navigation from './Components/Common/Navigation';
import ProductPage2 from './Components/ProductPage/ProductPage2';
import AdminRequireAuth from './RequireAuth/AdminRequireAuth';
import AdminHome from './pages/Admin/AdminHome';
import AdminLogin from './pages/Admin/AdminLogin';
import Dashboard from './pages/Admin/Dashboard';
import ProductList from './pages/Admin/ProductList';
import Home from './pages/Home';

function App() {
  const {pathname} = useLocation();
  // Base api
  axios.defaults.baseURL = "https://wellzonebd.onrender.com"
  if(pathname.includes('/admin')){
    return <>
    <Routes>
      <Route path='/admin-login' element={<AdminLogin/>}/>
        <Route path='/admin' element={<AdminRequireAuth><Dashboard/></AdminRequireAuth>}>
          <Route index element={<AdminHome/>}/>
          <Route path='products' element={<ProductList/>}/>
        </Route>
    </Routes>
    </>
  }else{
    return (
      <>
        {/* Navigation */}
        <Navigation/>
        {/*all  Router */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product/:id' element={<ProductPage2/>}></Route>
        </Routes>
        {/* Footer */}
        <Footer/>
      </>
    )
  }

  
}

export default App
