const tabs = [
    { id: 1, name: "categories" },
    { id: 2, name: "app development" },
    { id: 3, name: "cyber security" },
    { id: 4, name: "web development" },
    { id: 5, name: "ui/ux design" },
    { id: 6, name: "product management" },
    { id: 7, name: "technical writing" },
    // { id: 8, name: "technical writing" },
    // { id: 9, name: "technical writing" },
    // { id: 10, name: "technical writing" },
];

export default function TopTabs({ tabIndex, setTabIndex }) {
    return (
        <section className="mx-4 lg:mx-[7rem] py-2">
            <ul className="flex items-center gap-4 overflow-x-auto font-inter top-bar">
                {tabs.map((tab) => (
                    <li key={tab.id} className="min-w-[35%] lg:min-w-[12%]">
                        <button
                            className={`font-bold capitalize w-full whitespace-nowrap  ${
                                tabIndex === tab.id ? "text-lg" : "text-sm"
                            } `}
                            onClick={() => setTabIndex(tab.id)}
                        >
                            {tab.name}
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    );
}
