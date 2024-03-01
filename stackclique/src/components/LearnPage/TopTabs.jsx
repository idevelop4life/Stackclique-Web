const tabsData = [
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
import AppDevelopment from "./components/AppDevelopment";
import UiUx from "./components/UiUx";
import CyberSecurity from "./components/CyberSecurity";
import ProductManagement from "./components/ProductManagment";
import TechnicalWritting from "./components/TechWriting";
import { Link } from "react-router-dom";

export default function TopTabs() {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    return (
        <div>
            <div className="flex items-center justify-center gap-16 space-x-3 border-b overflow-x-scroll">
                <h1 className="text-3xl font-semibold">Categories</h1>
                {/* Loop through tab data and render Link for each. */}
                {tabsData.map((tab, idx) => {
                    return (
                        <Link
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
                        </Link>
                    );
                })}
            </div>
            {/* Show active tab content.
            <div className="py-4">
                <p>{tabsData[activeTabIndex].content}</p>
            </div> */}
        </div>
    );
}
