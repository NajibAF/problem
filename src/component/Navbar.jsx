import {NavLink} from 'react-router-dom'
import '../App.css'
function Navbar(){
    return(
        <ul className='navbar'>
            <li><NavLink style={{color:"red" , background:"yellow", fontSize:"33px"}} className="nav-bar-link" to="/">Home</NavLink></li>
            <li><NavLink className="nav-bar-link" to="/about">About</NavLink></li>
            <li><NavLink className="nav-bar-link" to="/contact">Contact</NavLink></li>
            
        </ul>
    )
}

export default Navbar;