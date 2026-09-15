import { useNavigate } from "react-router-dom"
import { useState } from "react"
function CreateOrder(){
         const navigate=useNavigate()
    const [formData,setFormData]=useState({
        name:"",
        street:"",
        phone:"",
        city:"",
        state:"",
        pincode:""
    })
 function handleonChange(e){
    setFormData({...formData,
      [e.target.id]:e.target.value
    })
    
  
    console.log(e.target.id)
    console.log(e.target.value)
  console.log(formData)
}
async function CreateOrder(e){
    e.preventDefault()
    try{
       const URL="http://localhost:8888/api/order/createOrder"
       const response=await fetch(URL,{
        method:"POST",
        credentials:"include",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(formData)
       })
       const data=await response.json()
       if(!response.ok){
        console.log(data.message)
       }
       console.log(data.message)
       navigate("/order")
    }
    catch(e){
        console.log(e.message)
    }
}


return(
    <>
    <div>
        <form className="order-from"  onSubmit={CreateOrder}>
            <label>Name</label>
            <input type="text" id="name" value={formData.name} onChange={handleonChange} />
            <label>street</label>
            <input type="text" id="street" value={formData.street} onChange={handleonChange} />
            <label>Phone</label>
            <input type="text" id="phone" value={formData.phone} onChange={handleonChange} />
            <label>city</label>
            <input type="text" id="city" value={formData.city} onChange={handleonChange} />
            <label>state</label>
            <input type="text" id="state" value={formData.state} onChange={handleonChange} />
            <label>pincode</label>
            <input type="text" id="pincode" value={formData.pincode} onChange={handleonChange} />
            <button type="submit">checkout</button>
        </form>
    </div>
    </>
)
}
export default CreateOrder;