import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import MembersCard from "./MembersCard";

const channelsList = [
    { id: 1, name: "Product Management" },
    { id: 2, name: "UI/UX Designers" },
    { id: 3, name: "Data Analysts" },
    { id: 4, name: "Photography" },
    { id: 5, name: "Cyber security" },
    { id: 6, name: "App Developers" },
];

export default function ConnectSideBar() {
    return (
        <aside className="flex flex-col items-center min-h-full px-4 text-white lg:w-2/12 md:w-3/12 bg-primary-500">
            <h2 className="flex items-center gap-2 py-1 text-lg font-bold">
                All Channels{" "}
                <span>
                    <FiChevronDown aria-hidden="true" />
                </span>
            </h2>
            <div className="flex flex-col gap-4 mt-4 text-sm">
                {channelsList.map((item) => (
                    <Link key={item.id}>{item.name}</Link>
                ))}
            </div>
            <h2 className="flex items-center gap-2 py-1 mt-4 text-lg font-bold">
                Direct Messages
                <span>
                    <FiChevronDown aria-hidden="true" />
                </span>
            </h2>
            <div className="flex flex-col gap-2">
                {Array.from({ length: 3 }, (_, index) => (
                    <MembersCard key={index} />
                ))}
            </div>
        </aside>
    );
}
