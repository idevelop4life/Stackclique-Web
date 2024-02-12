import { useLayoutEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Slider from "./Slider";
import { Backdrop, Loader } from "../ui";
import styles from "../../styles/css/app.module.css";
import logo from "../../assets/svg/logo.svg";

export default function Authentication() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // checks if user is logged in then route them to landing page
    useLayoutEffect(() => {
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
        <>
            <section className={`${styles.auth}`}>
                <Link to={"/"} className={`${styles.brand_logo}`}>
                    <img
                        src={logo}
                        alt="Stackclique Logo"
                        title="Stackclique Logo"
                    />
                </Link>
                <section className={styles.auth_container}>
                    <Outlet />
                </section>
            </section>
        </>
    );
}

// function PreviousDesign() {
//     return (
//         <div className="flex min-h-screen relative">
//             <section className="min-w-[51.25%] hidden lg:block">
//                 <Slider />
//             </section>
//             <section className="w-full mx-auto min-h-full md:w-[60%] lg:min-w-[48.75%] py-[2rem] px-4 lg:px-[3.94rem] relative ">
//                 <h3 className="text-primary-500 font-poppins font-[800]">
//                     STACK<span className="text-green">CLIQUE</span>
//                 </h3>

//                 <Outlet />
//             </section>
//         </div>
//     );
// }
