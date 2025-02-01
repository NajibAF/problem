import { NavLink } from "react-router-dom";

function Home(){
    return(
        <div>
            <h1>Home Page</h1>
            <p>Welcome to the  Home Page! fff</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam esse quas reiciendis iusto modi qui itaque voluptatibus repellat illum quae, <NavLink to="https://www.youtube.com/watch?v=5vkoov53E0k&list=PL8p2I9GklV47BCAjiCtuV_liN9IwAl8pM&index=50">go to About page</NavLink></p>
        </div>
    )
}

export default Home;