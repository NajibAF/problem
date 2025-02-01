import { NavLink } from "react-router-dom";
function About(){
    return(
        <div>
            <h1>ABout Page</h1>
            <li><NavLink to="/user/anil">anil</NavLink></li>
            <li><NavLink to="/user/peter">peter</NavLink></li>
        </div>
    )
}

export default About;