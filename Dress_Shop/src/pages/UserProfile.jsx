
import {useState,useEffect} from'react'
function Cart(){
    const [data1,setData]=useState({})
    async function userProfile(){
        
        try{
    const URL="http://localhost:8888/api/user/profile"
        const response=await fetch(URL,{
            method:"GET",
            credentials:"include",
         

        })
        const data=await response.json()
        if(!response.ok){
           
            return 
        }
        console.log(data)
        setData(data)
        
    }catch(e){
        console.log(e.message)
    }
    }
 useEffect(()=>{
    userProfile()
    }
,[])
    return(

        <>
        <h1> Cart</h1>
      <p>  {data1.User?.name}</p>
   
  <p>  {data1.User?.email}</p>
  <p>  {data1.User?.phone}</p>
        
        </>
    )
}
export default Cart