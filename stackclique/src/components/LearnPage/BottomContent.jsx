import { Link } from "react-router-dom";

import { Button } from "../ui";
import PlayStoreLogo from "../../assets/svg/google_playstore.svg";
import AppStoreLogo from "../../assets/svg/app_store.svg";

export default function BottomContent() {
    return (
        <section className="px-4 lg:px-[7rem] flex flex-col mt-[2rem] pb-[5rem] ">
            <p className="pr-8 lg:w-[60%] text-2xl leading-[3rem] font-manrope mb-4 font-[500]">
                Acquire More Knowledge And Build any Appropriate Career Skills
                of your choice with{" "}
                <span className="text-green lg:w-[60%] text-2xl leading-[3rem] font-manrope">
                    STACKCLIQUE
                </span>
            </p>
            <p className="lg:w-[50%] leading-[2rem] text-sm font-manrope">
                Why lept very mss homers and considered uncomenly togrther which
                is not why we are we but os why we are Good.
            </p>
            <Button 
            //  size={"medium"} 
             className={"my-8 btn btn-rect w-[7rem] h-[4rem] text-[14px]"}>
                Get Started
            </Button>
            <Link
                to={"#"}
                className="text-sm font-semibold md:text-lg font-poppins"
            >
                Download The Stackclique App Now
            </Link>
            <div className="flex items-center gap-4 mt-4">
                <Link to={"#"}>
                    <img
                        src={PlayStoreLogo}
                        alt="play store logo"
                        className="w-auto max-h-[2.5rem]"
                    />
                </Link>
                <Link to={"#"}>
                    <img
                        src={AppStoreLogo}
                        alt="play store logo"
                        className="w-auto max-h-[2.5rem]"
                    />
                </Link>
            </div>
        </section>
    );
}
