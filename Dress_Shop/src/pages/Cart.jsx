import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CgTrash } from "react-icons/cg";
import './Cart.css'
import CreateOrder from "./order/createOrder";
function Cart() {
    const navigate=useNavigate();
    const [cart,setCart]=useState({items:[]})
    const totalPrice = cart.items.reduce((total, item) => {
    return total + item.product.price * item.quantity;
}, 0);
    function handlebrowse(){
navigate("/product")
    }
   async function fetchItem(){
    try{
          const URL="http://localhost:8888/api/cart"
          const response=await fetch(URL,{
             method:"GET",
             credentials:"include",
          })
const data=await response.json()
          if(!response.ok){
            console.log(data.cart)
            return;
          }
          setCart(data.cart)
          console.log(data.cart)
        }catch(e){
            console.log(e.message)
        }
    }
    async function handleIncrese(pid){
        try{
        const URL=`http://localhost:8888/api/cart/addtocart/${pid}`
        const response=await fetch(URL,{
            method:"POST",
            credentials:"include",
        })
        const data=await response.json()
        if(!response.ok){
            console.log(data.message)
            return 
        }
        console.log(data.cart)
        fetchItem()
    }catch(e){
        console.log(e.message)
    }
    }

    async function handleDecrease(pid){
        try{
        const URL=`http://localhost:8888/api/cart/removeQuantity/${pid}`
        const response=await fetch(URL,{
            method:"PATCH",
            credentials:"include",
        })
        const data=await response.json()
        if(!response.ok){
            console.log(data.message)
            return
        }
         
        fetchItem()
    }catch(e){
        console.log(e.message)
    }
    }
async function removeItems(pid){
    try{
        const URL=`http://localhost:8888/api/cart/remove/${pid}`
        const response=await fetch(URL,{
            method:"DELETE",
            credentials:"include"
        })
        const data=await response.json()
        console.log(data.message)
       
        fetchItem()
    }catch(e){
        console.log(e.message)
    }
}
    useEffect(()=>{
        fetchItem()
    },[])



return(
    <div className="cart-page">
    {cart.items.length===0? (<div className="empty-cart">
        <div className="empty-cart-content">
            <h2>Your Cart is Empty</h2>
       <p> Explore our collection and find your perfect style.</p>
       <button className="browse-btn" onClick={handlebrowse} > Browse Collection </button>

    </div>
    </div>):(<div className="cart-wrapper">
     <div className="cart-header">
        <h2>Shopping Cart</h2>
        </div>
        <div className="cart-items">
        {cart.items.map((item)=>(
            <div   className="cart-item" key={item.product._id}>

            <div className="cart-image">
                <img
                    src={`http://localhost:8888${item.product.image}`}
                    alt={item.product.name}
                    loading="lazy"
                />
            </div>

            <div className="cart-detail">
            <div className="cart-info">
               <h3 className="cart-product-name"> {item.product.name} </h3>

                <p className="price"> ₹{item.product.price} </p> 
                <p className="description"> {item.product.description} </p>
                </div>
  
                {item.product.stock === 0 ? (
            <p>Out of stock</p>
        ) : item.product.stock < item.quantity ? (
            <p>
                Only {item.product.stock} available
            </p>
        ) : (
            <p>Available</p>
        )}
                <div className="cart-actions"> 
                    <div className="quantity-control">
                <button className="quantity-btn" onClick={() => { handleIncrese( item.product._id ); }} > + </button>
                 <span className="quantity"> {item.quantity} </span>
                  {item.quantity === 1 ? ( <div className="delete-btn" onClick={() => removeItems( item.product._id ) } > <CgTrash /> </div> ) : ( <button className="quantity-btn" onClick={() => { handleDecrease( item.product._id ); }} > - </button>)}

            </div>

        </div>

            </div>
            </div>
        ))}
    </div>
    </div>) }
 <div className="cart-total">
        <h3>Total Price: ₹{totalPrice}</h3>
        <button onClick={()=>{navigate('/createOrder')}}>Order now</button>
    </div>
    </div>
)
}

export default Cart;