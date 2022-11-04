import { CartWidget } from "./CartWidget";
import logo from "../imagenes/logo.png";
import { Link, Navlink } from "react-router-dom";

const links = ["Ropa", "Zapatillas", "Accesorios"];

const Navbar = () => {
    return <header className="header">
       <Link to='/'>
            <img src={logo} className="header__logo" alt="logo" />
        </Link>
        <div className="header__nav">
            {links.map((elemento) => {
                return (
                    <Link className="header__nav_item" to={`/category/${elemento}`} key={elemento}>
                        {elemento}
                    </Link>
                );
            })}
        </div>
        <CartWidget />
    </header>
}

export default Navbar;