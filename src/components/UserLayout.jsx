import  Footer from "./Footer";
import  Navbar from "./Navbar";
import "../styles/App.scss";
export const UserLayout = ({ children }) => {
    return (
        <div className="userLayout">
            <Navbar />
            {/* <div className="children">
            {children}  
            </div> */}
            <Footer />
        </div>
    );
};