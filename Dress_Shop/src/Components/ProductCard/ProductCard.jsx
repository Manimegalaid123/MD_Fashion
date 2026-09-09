import './ProductCard.css';
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {

    const navigate = useNavigate();
async function handleAddtoCart(pid){
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

    console.log(data.message)
}catch(e){
    console.log(e.message)
}
} 

    return (
        <div className="card-container">

            <div className="card-image">
                <img
                    src={`http://localhost:8888${product.image}`}
                    alt={product.name}
                    loading="lazy"
                />
            </div>

            <div className="card-detail">

                <h3>{product.name}</h3>
                <p className="price">
                    ₹{product.price}
                </p>
                <p className="description">
                    {product.description}
                </p>
                <span className="stock">
                    {product.stock > 0
                        ? "Available"
                        : "Out of Stock"}
                </span>

                <button
                    className="addbtn"
                     onClick={()=>{handleAddtoCart(product._id)}}
                    disabled={product.stock === 0}
                >
                    {product.stock === 0
                        ? "Out of Stock"
                        : "Add to Cart"}
                </button>

            </div>

        </div>
    );
}

export default ProductCard;