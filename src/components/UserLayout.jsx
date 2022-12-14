import  Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/App.scss";
export const UserLayout = ({ children }) => {
    return (
        <div className="userLayout">
            <Navbar />
            <div className="children">
            {children}  
            </div>
            <Footer />
        </div>
    );
};