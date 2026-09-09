import {Link, useNavigate} from 'react-router-dom'
import './Login.css'
import {useEffect, useState} from 'react'

function Login(){
  const [formData,setFormData]=useState({
    email:"",
    password:""

  })
   const navigate = useNavigate()
  const [response,setResponse]=useState("")
  function handleOnChange(e){
    setFormData({...formData,
      [e.target.id]:e.target.value
    })
    
  }

 async function handleOnSubmit(e){
  e.preventDefault()
  if(!formData.email||!formData.password){
    return;
  }
  
  const URL="http://localhost:8888/api/auth/login"
  const response=await fetch(URL,{
    method:"POST",
    credentials:"include",
    headers:{
      "Content-type":"application/json",
    },
    body:JSON.stringify(formData)
  })
  const data=await response.json()
  if(!response.ok){
    setResponse(data.message)
return

    
  }
  

  console.log(data)
  setResponse(data.message)
 if (data.userResponse.role === "user") {
    console.log("Navigating to UserProfile");
  navigate("/userProfile");
} else if (data.userResponse.role === "admin") {
  navigate("/AdminDashboard");
}
  setFormData({
    email:"",
    password:""

  })
 }
 console.log("before")
 useEffect(()=>{
  console.log("inside use effect")
 },[])
 console.log("after")
    return(
      <section className="login">
        <div className="login-container" >
            <h2>Welcome Back</h2>
            <form className="login-form" onSubmit={handleOnSubmit}>
                <label>Email</label>
                <input type="email" id="email"  value={formData.email}placeholder="Enter your email"  onChange={handleOnChange} />
                   <label>Password</label>
                <input type="password"   id="password"  value={formData.password} onChange={handleOnChange} placeholder="Enter your password"/>
                  <Link to="/">Forgot Password?</Link>
                  <button type="submit">LOGIN</button>
                  <p> Don't have an account?<Link to="/signup"> Sign Up  </Link></p>
            </form>
           
        </div>
          <p>{response}</p>
      </section>
    )
}
export default Login