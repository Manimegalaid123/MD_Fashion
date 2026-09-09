import {Link} from "react-router-dom"
import logo from "../../assets/logo.png"
import "./Navbar.css"
function Navbar(){
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
            <Link to="/login">Login</Link>
            <Link to="/cart">Cart</Link>
            </div>
        </div>
        </div>
    </nav>
)
}
export default Navbar