const Button = ({ type, children, onClick }) => (
    <button
        type={type}
        onClick={onClick}
        className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
        {children}
    </button>
);
export default Button;
