import { useNavigate } from "react-router-dom"

function ManageProduct(){
    const navigate=useNavigate()
    const [product,setProduct]=useState({

    })
    function handleaddProduct(){
    navigate("/addproduct")
    }
    function handleEdit(pid){
        navigate(`EditProduct/${pid}`)
    }
    async function fetchItems(){
        try{
        const URL="http://localhost:8888/api/products/"
        const response=await fetch(URL,{
            method:"GET",
            credentials:"include"
        })
        const data=await response.json()
        if(!response.ok){
            console.log(data.message)
        }
        setProduct(data.product)
    }
catch(e){
   console.log(e.message)
}
    }

   async function handleProductdelete(pid){
    try{
  const URL=`http://localhost:8888/api/products/deleteProduct${pid}`
    }catch(e){
        console.log(e.message)
    }
   }
    useEffect(()=>{
        fetchItems()
    },[])
    return(
<div className="product-container">
    <div className="productpage-head">
        <h2>Manage The Product</h2>
    </div>
  
{product.length!==0? (
<div className="product-cart">
    {
        product.map((item)=>(
           <div className="product-card" key={item._id}>
            <div className="product-image">
                <img src={`http://localhost:8888${item.image}`} alt={item.name} loading="lazy"/>

                </div>
                <div className="product-details">
                     <h3>{item.name}</h3>

                                <p>₹{item.price}</p>

                                <p>{item.description}</p>

                                <p>Stock: {item.stock}</p>
                                <p>Category: {item.category}</p>
                </div>
                <button className="edit"  onClick={handleEdit(item._id)}>edit</button>
                <button Onclick={handleProductdelete(item._id)} > delete</button>
            </div> 
        ))
    }
    </div>
    ):(<div className="add-product">
        <p>no product add yet </p>
        <button onClick={handleaddProduct}>add product</button>
    </div>)
      }

</div>

    )
}
export default ManageProduct