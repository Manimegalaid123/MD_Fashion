import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "../pages/Home"
import Signup from "../pages/Signup"
import Login from "../pages/Login"
import Cart from "../pages/Cart"
import Navbar from '../Components/Navbar/Navbar'
function AppRouter(){
return(
    <BrowserRouter>
      <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cart" element={<Cart/>}/>

    </Routes>
    </BrowserRouter>
)
}
export default AppRouter;