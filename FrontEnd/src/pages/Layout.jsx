import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

import Header from "./Hearder/Header";

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;