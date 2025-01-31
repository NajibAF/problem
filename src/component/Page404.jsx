import { NavLink } from "react-router-dom";

function Page404(){
    return(
        <div>
            <h1>this page is not availage</h1>
            <p>Please go back to <NavLink to="/">Home page</NavLink></p>
        </div>
    )
}

export default Page404;