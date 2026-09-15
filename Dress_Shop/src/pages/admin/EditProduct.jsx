import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import './EditProduct.css'
function EditProduct(){
    const [product,setProduct]=useState();
    const {id}=useParams();
    
    async function getProduct(){
        try{
        const URL=`http://localhost:8888/api/products/${id}`
        const response=await fetch(URL,{
            method:"GET",
            credentials:"include",
        })
        const data=await response.json()
        if(!response.ok){
            console.log(data.message)
        }
        setProduct(data.product)
    }catch(e){
        console.log(e.message)
    }
    } 
    useEffect(()=>{
        getProduct()
    },[id])
 function handleOnchange(e){
setProduct({
    ...product,
    [e.target.id]:e.target.value

})

 }
 function handleImage(e){
   setProduct({ ...product,
    image:e.target.files[0]
   })
 }
 async function updateProduct(e){
    e.preventDefault()
    try{
        const datatoSend=new FormData()
        datatoSend.append("name",product.name)
            datatoSend.append("price",product.price)
                datatoSend.append("stock",product.stock)
                    datatoSend.append("description",product.description)
                        datatoSend.append("category",product.category)
            if (product.image instanceof File) {
    datatoSend.append("image", product.image)
}        
const URL =`http://localhost:8888/api/products/updateProduct/${id}`
const response=await fetch(URL,{
    method:"PUT",
credentials:"include",
 body:datatoSend
})
const data=await response.json()
if(!response.ok){
    console.log(data)
}
console.log(data.message)
    }catch(e){
        console.log(e.message)
    }
 }
        return(
<>
<div className='container'>
    {product? ( <div className='form-container'>
        <form className="form" onSubmit={updateProduct}>
            <input type="file" id="image"  onChange={handleImage} />
            <input type='text' id="name" value={product.name} onChange={handleOnchange}/>
             <input type='Number' id="price" value={product.price} onChange={handleOnchange}/>
              <input type='Number' id="stock" value={product.stock} onChange={handleOnchange}/>
              <textarea id="description"  value={product.description} onChange={handleOnchange} ></textarea>
              <select id="category" value={product.category} onChange={handleOnchange}>
                <option value="">select category</option>
                   <option value="women">Women</option>
                      <option value="men">Men</option>
                         <option value="kids">Kids</option>
              </select>
              <button type="submit">Update Product</button>
        </form>
        </div> ):(<div><p>Product Not found</p></div>)}
</div>
</>
    )
}
export default EditProduct