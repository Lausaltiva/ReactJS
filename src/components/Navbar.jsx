import '../App.scss';
import { CartWidget } from "./CartWidget";
import logo from "../imagenes/logo.png";


const Navbar = () => {
    return <header className="header">
        <img src={logo} className="header__logo" alt="logo" />
        <div className="header__nav">
            <a href="">Ropa</a>
            <a href="">Accesorios</a>
            <a href="">Zapatillas</a>
        </div>
        <CartWidget />
    </header>
}

export default Navbar;