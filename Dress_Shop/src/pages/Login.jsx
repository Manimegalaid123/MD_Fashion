import {Link} from 'react-router-dom'
import './Login.css'
import {useState} from 'react'

function Login(){
  const [formData,setFormData]=useState({
    email:"",
    password:""

  })
  function handleOnChange(e){
    setFormData({...formData,
      [e.target.id]:e.target.value
    })
    console.log(formData)
  }

 async function handleOnSubmit(e){
  e.preventDefault()
  if(!formData.email||!formData.password){
    return;
  }
  console.log("hi")
  const URL="http://localhost:8888/api/auth/login"
  const response=await fetch(URL,{
    method:"POST",
    headers:{
      "Content-type":"application/json",
    },
    body:JSON.stringify(formData)
  })
  const data=await response.json()
  if(!response.ok){
    console.log(data.message)

  }
  console.log(data)
 }
    return(
      <section className="login">
        <div className="login-container">
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
      </section>
    )
}
export default Login