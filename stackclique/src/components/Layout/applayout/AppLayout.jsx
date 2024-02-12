import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
export default function AppLayout() {
    const { pathname } = useLocation();
    return (
        <div className="bg-appBackgroundColor flex flex-col min-h-screen">
            <Header />
            {<Outlet />}
            {pathname.includes("connect") ? null : <Footer />}
        </div>
    );
}
