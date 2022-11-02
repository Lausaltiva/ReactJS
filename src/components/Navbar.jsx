import { CartWidget } from "./CartWidget";
import logo from "../imagenes/logo.png";


const Navbar = () => {
    return <header className="header">
        <img src={logo} className="header__logo" alt="logo" />
        <div className="header__nav">
            <a href="" className='header__nav_item' >Ropa</a>
            <a href="" className='header__nav_item' >Accesorios</a>
            <a href="" className='header__nav_item' >Zapatillas</a>
        </div>
        <CartWidget />
    </header>
}

export default Navbar;