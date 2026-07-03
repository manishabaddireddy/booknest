import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';

// User pages
import Signup     from './User/Signup';
import Login      from './User/Login';
import Uhome      from './User/Uhome';
import Products   from './User/Products';
import MyOrders   from './User/MyOrders';

// Seller pages
import Ssignup    from './Seller/Ssignup';
import Slogin     from './Seller/Slogin';
import Shome      from './Seller/Shome';
import Addbook    from './Seller/Addbook';
import MyProducts from './Seller/MyProducts';
import Orders     from './Seller/Orders';

// Admin pages
import Asignup    from './Admin/Asignup';
import Alogin     from './Admin/Alogin';
import Ahome      from './Admin/Ahome';
import Items      from './Admin/items';
import Sellers    from './Admin/Seller';
import Users      from './Admin/Users';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* User Routes */}
        <Route path="/user/signup"   element={<Signup />} />
        <Route path="/user/login"    element={<Login />} />
        <Route path="/user/home"     element={<Uhome />} />
        <Route path="/user/products" element={<Products />} />
        <Route path="/user/orders"   element={<MyOrders />} />

        {/* Seller Routes */}
        <Route path="/seller/signup"      element={<Ssignup />} />
        <Route path="/seller/login"       element={<Slogin />} />
        <Route path="/seller/home"        element={<Shome />} />
        <Route path="/seller/addbook"     element={<Addbook />} />
        <Route path="/seller/myproducts"  element={<MyProducts />} />
        <Route path="/seller/orders"      element={<Orders />} />

        {/* Admin Routes */}
        <Route path="/admin/signup"  element={<Asignup />} />
        <Route path="/admin/login"   element={<Alogin />} />
        <Route path="/admin/home"    element={<Ahome />} />
        <Route path="/admin/items"   element={<Items />} />
        <Route path="/admin/sellers" element={<Sellers />} />
        <Route path="/admin/users"   element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;