import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "../pages/Home"
import Signup from "../pages/Signup"
import Login from "../pages/Login"
import Navbar from '../Components/Navbar/Navbar'
import AdminDashboard from "../pages/admin/AdminDashbord"
import UserProfile from "../pages/UserProfile"
import Product from "../pages/Product"
import Cart from "../pages/Cart"
import AddProduct from "../pages/admin/AddProduct"
import ManageProduct from "../pages/admin/ManageProduct"
import EditProduct from "../pages/admin/EditProduct"
import Order from "../pages/order/Order"
import CreateOrder from "../pages/order/createOrder"
function AppRouter(){
return(
    <BrowserRouter>
      <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>  
        <Route path="/login" element={<Login/>}/>
        <Route path="/userProfile" element={<UserProfile/>}/>
        <Route path="/adminDashboard" element={<AdminDashboard/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path='/addProduct' element={<AddProduct/>}/>
        <Route path='/manageProduct' element={<ManageProduct/>}/>
        <Route path='/editproduct/:id' element={<EditProduct/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/createOrder'element={<CreateOrder/>}/>

    </Routes>
    </BrowserRouter>
)
}
export default AppRouter;