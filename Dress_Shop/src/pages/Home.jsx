import { useNavigate } from 'react-router-dom';
import './Home.css'
import { FaTruck, FaStar, FaExchangeAlt, FaLock } from "react-icons/fa";

function Home(){
 const navigate = useNavigate()
  function Product(){
navigate('/product')
  }
    return(
        <>
      
      <section className="hero">
        <div className="hero-content">
           <h1>Find Your Perfect Style</h1>
          <p>Discover elegant and stylish dresses for every occasion.</p>
              <button onClick={Product}>Shop Now</button>
              
            </div>   
      </section>
     
<section className="categories">
  <div className="category-heading">
    <h2>  Shop by Category</h2>
    <p>Explore our latest collections</p>
    </div>
    <div className="category-container">
<div className="category-card">
    <img src="/image2.jpg"/>
          <div className="category-content">
  <h3>Women</h3>
        <button>Shop Now</button>
  </div>
  </div>
  <div className="category-card">
    <img src="/men.jpg"/>
          <div className="category-content">
  <h3>Men</h3>
        <button>Shop Now</button>
  </div>
  </div>
  <div className="category-card">
    <img src="/kids.jpg"/>
          <div className="category-content">
  <h3>kids</h3>
        <button>Shop Now</button>
  </div>
  </div>
</div>
  

</section>
<section className="why-choose">
  <div className="why-heading">
    <h2>   WHY CHOOSE US  </h2>
    <p> We make your shopping experience better </p>
  </div>
  <div className="why-container">
    <div className="why-card">
    <FaTruck className="why-icon" />
    
      <h3>Free Delivery</h3>
      <p>Fast & Free delivery</p>
    </div>
     <div className="why-card">
  <FaStar className="why-icon" />
    
      <h3>Quality Products</h3>
      <p>Premium clothing</p>
    </div>
    <div className="why-card">
  <FaExchangeAlt className="why-icon" />
    
      <h3>Easy Returns</h3>
      <p>Hassle-free returns</p>
    </div>
     <div className="why-card">
     <FaLock className="why-icon" />
    
      <h3>Secure Payment</h3>
      <p>100% safe</p>
    </div>
  </div>
</section>
        </>
    )
}
export default Home