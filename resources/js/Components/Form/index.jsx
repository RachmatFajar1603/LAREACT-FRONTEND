import InputField from "./InputField";
import Label from "./Label";

const FormField = ({ label, type, name, placeholder, value, onChange }) => (
    <div className="mb-4 px-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
        <Label htmlFor={name}>{label}</Label>
        <InputField
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    </div>
);
export default FormField;
