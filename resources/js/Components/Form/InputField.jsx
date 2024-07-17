const InputField = ({fieldType, type, name, placeholder, value, onChange, options, defaultValue }) => {
    if (fieldType === "select") {
        return (
            <select
                name={name}
                value={value}
                onChange={onChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                {placeholder && <option value="">{placeholder}</option>}
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        );
    } else {
        // Default to input field if fieldType is not "select"
        return (
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                defaultValue={defaultValue}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        );
    }
};


export default InputField;
