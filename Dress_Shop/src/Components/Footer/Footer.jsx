import './Footer.css'
function Footer(){
    return(
<>
<footer>
    <div className="footer">
<div className="footer-container">
    <div className="footer-brand">
        <h2>MD_Fashion</h2>
        <p>Fashion that fits your style.</p>
    </div>
   <div className="footer-columncontainer">
     <div className="footer-column">
        <h3>Shop</h3>
        <a href="#">  New Arrivals  </a>
                <a href="#">     Dresses  </a>
                        <a href="#">   Collections  </a>
                                <a href="#">   Best Sellers</a>
    </div>
    
        <div className="footer-column">
        <h3> Customer Care </h3>
        <a href="#">    Contact Us   </a>
                <a href="#">   Shipping </a>
                        <a href="#">  Returns </a>
                                <a href="#">  FAQs  </a>
    </div>
         <div className="footer-column">
        <h3> Follow Us</h3>
        <a href="#">  Instagram </a>
                <a href="#">    Facebook</a>
                        <a href="#">  Pinterest</a>
                                <a href="#">  YouTube </a>
    </div>
   </div>

    <div className="footer-bottom">
           <p>&copy; 2026 Dress Shop. All Rights Reserved.</p>
               <div>
          <a href="#">Privacy Policy</a>|
          <a href="#">Terms & Conditions</a>
        </div>
    </div>
</div>

    </div>
</footer>
</>
    )
}
export default Footer