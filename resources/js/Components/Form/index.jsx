import InputField from "./InputField";
import Label from "./Label";

const FormField = ({
    label,
    type,
    name,
    placeholder,
    value,
    onChange,
    options,
    onClick,
}) => (
    <div className="mb-4 px-2 w-full">
        <Label htmlFor={name}>{label}</Label>
        <InputField
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            options={options}
            onClick={onClick}
        />
    </div>
);
export default FormField;
