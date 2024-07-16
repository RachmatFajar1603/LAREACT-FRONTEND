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

export default MenuItem;
