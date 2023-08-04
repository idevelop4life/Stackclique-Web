import { Outlet } from "react-router-dom";
import Slider from "./Slider";
export default function Authentication() {
    return (
        <div className="flex min-h-screen relative">
            <section className="min-w-[51.25%] hidden lg:block">
                <Slider />
            </section>
            <section className="w-[90%] mx-auto min-h-full lg:min-w-[48.75%] py-[2rem] px-[3.94rem] relative ">
                <h3 className="text-primary font-poppins font-[800]">
                    STACK<span className="text-green">CLIQUE</span>
                </h3>
                <Outlet />
            </section>
        </div>
    );
}
