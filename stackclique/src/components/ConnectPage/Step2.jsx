import { BiSearch } from "react-icons/bi";
import MembersCard from "./MembersCard";

export default function Step2() {
    return (
        <section>
            <div className="flex h-[2rem] font-manrope relative mt-8 items-center w-[80%] bg-[#EFEFEF] text-black  overflow-hidden">
                <span className="flex items-center justify-center w-[3rem] h-full text-black">
                    <BiSearch aria-hidden="true" />
                </span>
                <input
                    type="search"
                    name=""
                    id=""
                    placeholder="search messages"
                    className="flex-1 h-full px-2 bg-transparent outline-none"
                />
            </div>

            <section className="relative flex flex-col h-[15rem] py-4 gap-2  overflow-y-auto">
                {Array.from({ length: 12 }, (_, index) => (
                    <MembersCard key={index} />
                ))}
            </section>
        </section>
    );
}
