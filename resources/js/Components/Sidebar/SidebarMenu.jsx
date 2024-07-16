// components/SidebarMenu.js
import React from 'react';
import { Link } from '@inertiajs/react';

const MenuItem = ({ href, icon, children }) => (
    <Link
        href={href}
        className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200"
    >
        {icon && <span className="mr-3">{icon}</span>}
        <span>{children}</span>
    </Link>
);

const SidebarMenu = () => {
    const menuItems = [
        { href: '/', icon: '🏠', label: 'Dashboard' },
        { href: '/users', icon: '👥', label: 'Generate No ST & No SPPD' },
        { href: '/reports', icon: '📊', label: 'Table Hasil Data' },
        { href: '/sppd', icon: '⚙️', label: 'SPPD' },
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
