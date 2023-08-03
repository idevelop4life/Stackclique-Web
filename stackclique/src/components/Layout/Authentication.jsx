import { Outlet } from "react-router-dom";
export default function Authentication() {
    return (
        <div className="flex">
            <section className="min-w-[55%] hidden lg:block">slider </section>
            <section className="w-[90%] mx-auto lg:min-w-[45%] my-[2rem] relative">
                <h3 className="text-primary font-poppins font-[800]">
                    STACK<span className="text-green">CLIQUE</span>
                </h3>
                <Outlet />
            </section>
        </div>
    );
}
