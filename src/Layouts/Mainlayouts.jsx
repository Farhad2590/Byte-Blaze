import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";

const Mainlayouts = () => {
    return (
        <div>
            <div>
                <Nav></Nav>
            </div>
            <div className="min-h-[calc(100vh-120px)]">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayouts;