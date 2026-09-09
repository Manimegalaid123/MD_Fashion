import { useEffect,useState } from "react"
import ProductCard from "../Components/ProductCard/ProductCard"
import './Product.css'
function Product(){
        const [product,setProduct]=useState([])
        const [search,setSearch]=useState("")
        const [category,setCategory]=useState("")
       async function getProduct(){

        const URL="http://localhost:8888/api/products"
        const  response= await fetch(URL,{
            method:"GET",
          credentials: "include"
        }
        )
           const data= await response.json()
        console.log(response.ok)
        console.log(data)
        if(!response.ok){
            console.log(data.message)
            return 
        }
        setProduct(data.product)
    
      }
useEffect(()=>{
    getProduct()
},[])

let filteredproduct=product.filter((item)=>(
    item.name.toLowerCase().includes(search.toLowerCase())
))
if(category!==""){
filteredproduct=filteredproduct.filter((item)=>(
    item.category===category
))}


    return(
        <>
        <div className="page-heading">
            <h2>EXPLORE OUR COLLECTION</h2>
            <p> Find something beautiful for every occasion </p>
        </div>
        <div className="filter-container">
            <input type="text" placeholder="search dress" value={search} onChange={(e)=>setSearch(e.target.value)} id="search"/>
            <select  value={category} onChange={(e)=>setCategory(e.target.value)}>
                  <option value="">All categories</option>
                <option value="women">Women</option>
                  <option value="men">Men</option>
                    <option value="kids">Kids</option>
            </select>
        </div>
<div className="product-container">
                {filteredproduct.length === 0 ? (
                    <p>No products found</p>
                ) : (
                    filteredproduct.map((item) => (
                        <ProductCard
                            key={item._id}
                            product={item}
                        />
                    ))
                )}
            </div>
        </>
    )
}
export default Product