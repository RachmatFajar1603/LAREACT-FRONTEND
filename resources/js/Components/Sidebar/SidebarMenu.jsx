// components/SidebarMenu.js
import React from 'react';

import MenuItem from './MenuItem';


const SidebarMenu = () => {
    const menuItems = [
        { href: '/home', icon: '🏠', label: 'Dashboard' },
        { href: '/sekretariat-list', icon: '👥', label: 'Generate No ST & No SPPD' },
        { href: '/reports', icon: '📊', label: 'Table Hasil Data' },
        { href: '/sppd-list', icon: '⚙️', label: 'SPPD' },
        // Add more menu items as needed
    ];

    return (
        <nav className="mt-4">
            {menuItems.map((item, index) => (
                <MenuItem key={index} href={item.href} icon={item.icon}>
                    {item.label}
                </MenuItem>
            ))}
        </nav>
    );
};

export default SidebarMenu;
