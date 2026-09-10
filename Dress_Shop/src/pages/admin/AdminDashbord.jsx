import AddProduct from './AddProduct'
import {useNavigate} from 'react-router-dom'
function AdminDashboard(){
    const navigate=useNavigate()
    return(
<>
<h1>adminDashboard</h1>
<AddProduct/>
<button onClick={()=>{navigate('/manageProduct')}}>ManageProduct</button>
</>
    )
}
export default AdminDashboard