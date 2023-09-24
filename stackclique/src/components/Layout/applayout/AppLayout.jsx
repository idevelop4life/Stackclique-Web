import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
export default function AppLayout() {
    return (
        <div className="bg-appBackgroundColor min-h-screen pt-[80px] lg:pt-[120px]">
            <Header />
            {<Outlet />}
            <Footer />
        </div>
    );
}
