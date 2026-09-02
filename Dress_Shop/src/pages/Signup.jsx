import {Link} from 'react-router-dom';
import {useState} from 'react'
import './Signup.css';
function Signup(){
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        phone:"",
        password:"",
        confirmPassword:"",
    })


function handleOnChange(e){
        setFormData({
            ...formData,[e.target.id]:e.target.value
        })
        console.log(e.target.id)
           console.log(e.target.value)
 }
   async function handleOnSubmit(e){
    e.preventDefault();

    if(!formData.name || ! formData.email||!formData.phone||!formData.password||!formData.confirmPassword){
        

        return;
    }
    if(formData.password!==formData.confirmPassword){
        return
    }

   
    const URL="http://localhost:8888/api/auth/signup"
    const res= await fetch(URL,{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
   body: JSON.stringify(formData)
    })
     const data=await res.json()
     console.log(data)
  if(!res.ok){
    console.log(data.message)
    return;
  }

console.log("Signup successful");
console.log(data);
  
 }
    return(
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
        <input type="text" placeholder="Enter your Full name" value={formData.name}  onChange={handleOnChange} id="name"/>
         <label>Email</label>
        <input type="email" placeholder="Enter your email address" value={formData.email} onChange={handleOnChange} id="email"/>
           <label>Phone</label>
        <input type="tel" placeholder="Enter your Full name" value={formData.phone}  onChange={handleOnChange} id="phone"/>
       <label>Password</label>
        <input type="text" placeholder="Enter your Password" value={formData.password} onChange={handleOnChange} id="password"/>
          <label>confirm Password</label>
        <input type="text" placeholder="Confirm your Password" value={formData.confirmPassword}  onChange={handleOnChange} id="confirmPassword"/>
        <label>Role</label>
<select name="role" id="role">
    <option value="customer">Customer</option>
    <option value="admin">Admin</option>
</select>
           <label className="terms">
                                <input type="checkbox" />
                                <span> I agree to the<Link to="/"> Terms & Conditions</Link>{" "}and{" "}<Link to="/">Privacy Policy</Link>   </span></label>
<button type="submit">CREATE ACCOUNT</button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
    </form>
</div>
            </div>
            </div>
        </section>
        </>
    )
}
export default Signup