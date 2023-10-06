import { useEffect, useState } from "react";

import { Outlet, useNavigate } from "react-router-dom";
import Slider from "./Slider";
import { Backdrop, Loader } from "../ui";
export default function Authentication() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // checks if user is logged in then route them to landing page
    useEffect(() => {
        const token = localStorage.getItem("loginToken");

        if (token) {
            setUser(true);
            navigate("/");
        }
        setLoading(false);
    }, [navigate]);

    if (loading && !user) {
        return (
            <Backdrop>
                <Loader />
            </Backdrop>
        );
    }

    return (
        <div className="flex min-h-screen relative">
            <section className="min-w-[51.25%] hidden lg:block">
                <Slider />
            </section>
            <section className="w-full mx-auto min-h-full md:w-[60%] lg:min-w-[48.75%] py-[2rem] px-4 lg:px-[3.94rem] relative ">
                <h3 className="text-primary font-poppins font-[800]">
                    STACK<span className="text-green">CLIQUE</span>
                </h3>
                <Outlet />
            </section>
        </div>
    );
}
