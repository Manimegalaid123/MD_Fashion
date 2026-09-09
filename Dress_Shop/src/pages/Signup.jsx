import { Link,useNavigate } from 'react-router-dom';
import { useState } from 'react'
import './Signup.css';
import { BiHide } from "react-icons/bi";
import { BiSolidShow } from "react-icons/bi";

function Signup() {
   const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    })
  
    const [term, setTerms] = useState(false)
    const [response, setResponse] = useState("")
    const [error, setError] = useState("")
    const [isHide, setIsHide] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    function handleOnChange(e) {
        setFormData({
            ...formData, [e.target.id]: e.target.value
        })
        console.log(e.target.id)
        console.log(e.target.value)
    }
    async function handleOnSubmit(e) {
        e.preventDefault();
        setError("")
        setResponse("")
        if (!formData.name || !formData.email || !formData.phone || !formData.password || !formData.confirmPassword) {

            setError("enter the all the field")
            return;
        }
        if (formData.password !== formData.confirmPassword) {
            setError("password doesnot match")
            return
        }
        if (!term) {
            setError("accept the terms and condtion")

            return
        }

try{
        const URL = "http://localhost:8888/api/auth/signup"
        const res = await fetch(URL, {
            method: "POST",
          
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        const data = await res.json()
        console.log(data)
        if (!res.ok) {
            console.log(data.message)
            setError(data.message)
            return;
        }
        setError("")
        console.log("Signup successful");
        navigate("/login")
        setResponse(data.message)
        console.log(data);
    }catch(e){
          setError("Unable to connect to server")
    }
    }
    return (
        <>
            <section className="signup">

                <div className="signup-container">

                    <div className="signup-image">
                        <img src="/image1.jpg" alt="Fashion" />
                        <div className="signup-content">
                            <h1>Discover Your Perfect Style</h1>
                            <p>Trendy Collections • Best Quality • Exclusive Styles</p>
                        </div>
                    </div>
                    <div className="signup-card">
                        <div className="card">
                            <div className="signup-heading">
                                <h2>Create Account</h2>
                                <p>Join us and discover your Perfect Style</p>
                            </div>
                            <form className="form-group" onSubmit={handleOnSubmit}>
                                <label>Full Name</label>
                                <input type="text" placeholder="Enter your Full name" value={formData.name} onChange={handleOnChange} id="name" />
                                <label>Email</label>
                                <input type="email" placeholder="Enter your email address" value={formData.email} onChange={handleOnChange} id="email" />
                                <label>Phone</label>
                                <input type="tel" placeholder="Enter your Full name" value={formData.phone} onChange={handleOnChange} id="phone" />
                                <label>Password</label>
                                <div className="password-container"> <input type={(isHide ? "text" : "password")} placeholder="Enter your Password" value={formData.password} onChange={handleOnChange} id="password" />        <button type="button" className="password-toggle" onClick={() => setIsHide(!isHide)}>{isHide ? <BiHide /> : <BiSolidShow />}</button></div>
                                <label>confirm Password</label>
                                <div className="password-container"><input type={ showConfirmPassword ? "text" : "password"} placeholder="Confirm your Password" value={formData.confirmPassword} onChange={handleOnChange} id="confirmPassword" />
                                    <button type="button" className="password-toggle" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>{showConfirmPassword ? <BiHide /> : <BiSolidShow />}</button></div>
                              
                              
                                <label className="terms">
                                    <input type="checkbox" checked={term} onChange={(e) => setTerms(e.target.checked)} />
                                    <span> I agree to the<Link to="/"> Terms & Conditions</Link>{" "}and{" "}<Link to="/">Privacy Policy</Link>   </span></label>
                                <button type="submit">CREATE ACCOUNT</button>
                                <p>Already have an account? <Link to="/login">Login</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
                <p>{response}</p>
                <p>{error}</p>
            </section>
        </>
    )
}
export default Signup