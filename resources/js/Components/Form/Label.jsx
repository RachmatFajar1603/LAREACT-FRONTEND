const Label = ({ htmlFor, children }) => (
    <label
        htmlFor={htmlFor}
        className="block mb-2 w-20 text-sm font-medium text-gray-700"
    >
        {children}
    </label>
);

export default Label;
