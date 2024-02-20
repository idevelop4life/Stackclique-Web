// const tabs = [
//     { id: 1, name: "categories" },
//     { id: 2, name: "app development" },
//     { id: 3, name: "cyber security" },
//     { id: 4, name: "web development" },
//     { id: 5, name: "ui/ux design" },
//     { id: 6, name: "product management" },
//     { id: 7, name: "technical writing" },
//     // { id: 8, name: "technical writing" },
//     // { id: 9, name: "technical writing" },
//     // { id: 10, name: "technical writing" },
// ];

const tabsData = [
    {
        label: "categories",
        content: <Categories />,
    },
    {
        label: "app development",
        content: <AppDevelopment />,
    },
    {
        label: "cyber security",
        content: <CyberSecurity />,
    },
    {
        label: "web development",
        content: <WebDevelopment />,
    },
    {
        label: "ui/ux design",
        content: <UiUx />,
    },
    {
        label: "product management",
        content: <ProductManagement />,
    },

    {
        label: "technical writing",
        content: <TechnicalWritting />,
    },
];

import { useState } from "react";
import WebDevelopment from "./components/WebDevelopment";
import Categories from "./Categories";
import AppDevelopment from "./components/AppDevelopment";
import UiUx from "./components/UiUx";
import CyberSecurity from "./components/CyberSecurity";
import ProductManagement from "./components/ProductManagment";
import TechnicalWritting from "./components/TechWriting";

export default function TopTabs() {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    return (
        <div>
            <div className="flex items-center justify-center gap-16 space-x-3 border-b">
                {/* Loop through tab data and render button for each. */}
                {tabsData.map((tab, idx) => {
                    return (
                        <button
                            key={idx}
                            className={`py-2 border-b-4 transition-colors duration-300 uppercase  ${
                                idx === activeTabIndex
                                    ? "border-green"
                                    : "border-transparent hover:border-gray-200"
                            }`}
                            // Change the active tab on click.
                            onClick={() => setActiveTabIndex(idx)}
                        >
                            {tab.label}
                        </button>
                    );
                })}
            </div>
            {/* Show active tab content. */}
            <div className="py-4">
                <p>{tabsData[activeTabIndex].content}</p>
            </div>
        </div>
    );
}
