// components/Sidebar.js
import React from "react";
import SidebarMenu from "./SidebarMenu";

const Sidebar = ({ isOpen }) => {
    return (
        <div
            className={`bg-gray-800 text-white w-64 min-h-screen ${
                isOpen ? "block" : "hidden"
            } lg:block`}
        >
            <div className="p-4">
                {/* <h1 className="text-2xl font-semibold">Sidebar</h1> */}
                <img src="/images/logo-dmptsp.png" alt="dpmptsp Logo"/>
            </div>
            <SidebarMenu />
        </div>
    );
};

export default Sidebar;
