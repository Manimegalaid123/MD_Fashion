import {Link} from "react-router-dom"
import logo from "../../assets/logo.png"
import { TiShoppingCart } from "react-icons/ti";
import { useNavigate } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Navbar.css"
function Navbar(){
  
  const navigate=useNavigate()
  const { user, setUser } = useContext(AuthContext);
    async function handleLogout(){
        try{
        const URL="http://localhost:8888/api/auth/logout"
        const response=await fetch(URL,{
            method:"POST",
            credentials:"include",
        })
        const data=await response.json()
        if(response.ok){
            setUser(null)
           navigate('/login')
        }
        
    }catch(e){
        console.log(e.message)
    }
    }
return(
    
    <nav>
        <div className="navbar">
         <Link to="/" className="brand">
          <img src={logo} alt="MD Fashion logo" />
          <h1>MD_Fashion</h1>
        </Link>
        <div className="navlink-container">
            <div className="navlink">
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
            <Link to="/signup">Signup</Link>
         {user?<button onClick={handleLogout}>Logout</button>:<Link to='/login'>Login</Link>}
            {user && <Link to="/cart"><TiShoppingCart /></Link> }
            {user && <Link to="/order">my Order</Link>}
            </div>
        </div>
        </div>
    </nav>
)
}
export default Navbar