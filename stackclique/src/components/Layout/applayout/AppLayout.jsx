import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
export default function AppLayout() {
    return (
        <div className="bg-appBackgroundColor flex flex-col min-h-screen pt-[80px] lg:pt-[120px]">
            <Header />
            {<Outlet />}
            <Footer />
        </div>
    );
}
