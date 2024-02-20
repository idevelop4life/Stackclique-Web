import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
export default function AppLayout() {
    const { pathname } = useLocation();
    // For testing purposes
    const person = {
        id: 1,
        name: "Unnamed Dev",
    };
    return (
        <div className="bg-appBackgroundColor flex flex-col min-h-screen">
            <Header />
            {<Outlet context={[person]} />}
            {pathname.includes("connect") ? null : <Footer />}
        </div>
    );
}
