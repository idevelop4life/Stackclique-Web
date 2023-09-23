import { Link } from "react-router-dom";
import { navLinks } from "./navigationLinks";

import {
    BiLogoFacebook,
    BiLogoTwitter,
    BiLogoLinkedin,
    BiLogoYoutube,
    BiLogoInstagram,
} from "react-icons/bi";

const socialIcons = [
    { id: 1, icon: <BiLogoFacebook /> },
    { id: 2, icon: <BiLogoTwitter /> },
    { id: 3, icon: <BiLogoLinkedin /> },
    { id: 4, icon: <BiLogoYoutube /> },
    { id: 5, icon: <BiLogoInstagram /> },
];

export default function Footer() {
    const date = new Date().getFullYear();
    return (
        <footer className="min-h-fit flex relative flex-col md:flex-row gap-y-8 gap-x-4 font-manrope text-sm bg-black px-4 py-8 pb-[4rem]  lg:px-[6rem]  text-[#cbd5e1]">
            <div className="flex flex-col gap-4 flex-1">
                <h2 className="text-white font-bold text-md">Legal</h2>
                <Link to={"#"} className="hover:underline">
                    Terms of service
                </Link>
                <Link to={"#"} className="hover:underline">
                    Privacy Policy
                </Link>
            </div>
            <div className="flex flex-col gap-4 flex-1">
                <h2 className="text-white font-bold text-md flex-1">
                    Quick Links
                </h2>
                {navLinks.map((item) => {
                    return (
                        <Link
                            to={item.link}
                            key={item.id}
                            className="hover:underline"
                        >
                            {item.title}
                        </Link>
                    );
                })}
            </div>
            <div className="flex flex-col relative justify-end items-center flex-[2] gap-4">
                <p>Join Our Newsletter</p>
                <div className="h-[3rem] w-[90%] md:w-full  relative bg-white flex">
                    <input
                        type="text"
                        placeholder="Your email address"
                        className=" px-4 text-xs md:text-sm  w-[60%] text-darkGrey outline-none"
                        // value={newsletterValue}
                        // onChange={(e) => setNewsLetterValue(e.target.value)}
                    />
                    <button className="bg-[#e9c6f3] text-primary flex-1 w-[40%]">
                        Subscribe
                    </button>
                </div>
                <p className="px-4 text-center">
                    * Will send you weekly updates for your better finance
                    management.
                </p>
                <div className="flex items-center text-[1.5rem] md:text-[2rem] gap-4">
                    {socialIcons.map((item) => {
                        return <Link key={item.id}>{item.icon}</Link>;
                    })}
                </div>
            </div>
            <div className="flex flex-col gap-4  flex-1 text-center">
                <h2 className="text-white  font-bold text-md">Resources</h2>
                <Link to={"#"} className="hover:underline">
                    Blog
                </Link>
                <Link to={"#"} className="hover:underline">
                    Help Center
                </Link>
            </div>
            <div className="absolute flex bottom-0 w-[80%] justify-center text-xs left-[50%] -translate-x-1/2 ">
                Copyright © {date} StackClique
            </div>
            <span className=" absolute left-0 bottom-0 h-[1.5rem] md:h-[2rem] w-1/4 md:w-1/3 bg-white rounded-tr-[3rem]" />
            <span className=" absolute right-0 bottom-0 h-[1.5rem] md:h-[2rem] w-1/4 md:w-1/3 bg-white rounded-tl-[3rem]" />
        </footer>
    );
}
