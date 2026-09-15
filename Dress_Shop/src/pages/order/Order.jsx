import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
function Order(){
    const [order,setOrder]=useState([])
    const navigate=useNavigate()
    async function getMyorder(){
        try{
            const URL="http://localhost:8888/api/order/myorder"
            const response=await fetch(URL,{
                method:"GET",
                credentials:"include"
            })
            const data=await response.json()
            if(!response.ok){
                console.log(data.message)
            }
            setOrder(data.order)
        }
        catch(e){
            console.log(e.message)
        }
    }

    useEffect(()=>{
        getMyorder()
    },[])
    return(
<div>
{order.length===0? (<div><h3>no order yet </h3> 
    <p>visit our collection</p> <button onClick={()=>{ navigate('/product')}} > browse product</button></div>):(
        <div>
           {order.map((item)=>(
<div key={item._id}>
    <p>{item.address.name}</p>
{item.items.map((orderItem) => (
                                <div key={orderItem.product._id}>
                                    <p>{orderItem.product.name}</p>
                                    <p>Quantity: {orderItem.quantity}</p>
                                    <p>Price: ₹{orderItem.price}</p>
                                </div>
                            ))}
</div>
           ))}
        </div>
    )}
</div>
    )
}
export default Order