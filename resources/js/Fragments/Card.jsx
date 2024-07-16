const Card = ({ children, title }) => (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4 bg-gray-100 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        </div>
        <div className="p-6">{children}</div>
    </div>
);

export default Card;
