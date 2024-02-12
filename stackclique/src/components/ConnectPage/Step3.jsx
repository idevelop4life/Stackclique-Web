import { BiSearch } from "react-icons/bi";

export default function Step3() {
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
            <p className="mt-4">
                There aren’t any files to see here right now.
            </p>
        </section>
    );
}
