import {useState} from 'react'

function AddProduct(){

    const [formData,setFormData]=useState({
        name:"",
        price:"",
        description:"",
        stock:"",
        image:"",
        category:"",
    })
    function handleOnchange(e){
        setFormData({
            ...formData,
            [e.target.id]:e.target.value
        })
        console.log(({
            ...formData,
            [e.target.id]:e.target.value
        }))
    }
    function handleImageChange(e){
  setFormData({
    ...formData,
     image:e.target.files[0],
  })
}
  async function handleOnSubmit(e){
 e.preventDefault()
    try{
        const datatoSend=new FormData()
        datatoSend.append("name",formData.name)
           datatoSend.append("price",formData.price)
              datatoSend.append("description",formData.description)
                 datatoSend.append("category",formData.category)
                    datatoSend.append("stock",formData.stock)
                       datatoSend.append("image",formData.image)
    const URL='http://localhost:8888/api/products/addProduct'
    const response=await fetch(URL,{
        method:"POST",
        credentials:"include",
        body:datatoSend,
    })
  const data=await response.json()
  console.log(data.message)
  }
  catch(e){
    console.log(e.message)
  }
    }
return(
    <>
    <div className='add-product'>
        <form className='from-group' onSubmit={handleOnSubmit}>
        
            <input type='text' id='name' placeholder='enter product Name' value={formData.name} onChange={handleOnchange}/>
            
            <input type='Number' id='price' placeholder='enter product price' value={formData.price} onChange={handleOnchange}/>
            
            <textarea  value={formData.description} onChange={handleOnchange} id='description' ></textarea>
            <input type='Number' id='stock' placeholder='enter stock available' value={formData.stock} onChange={handleOnchange}/>
            <select id="category" value={formData.category} onChange={handleOnchange}>
                <option value="">Select Category</option>
                <option value="women">Women</option>
                  <option value="men">Men</option>
                    <option value="kids">Kids</option>
            </select>
            <input type="file"  id="image"  onChange={handleImageChange} />
<button type="submit" >create Product</button>
        </form>
    </div>
    </>
)
}
export default AddProduct