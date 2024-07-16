import DefaultLayout from "@/Layouts/DefaultLayout";
import Form from "@/Layouts/FormLayout";

const Sppd = () => {
    const handleSubmit = (data) => {
        console.log("Form submitted:", data);
    };

    const formFields = [
        {
            label: "Field 1",
            type: "text",
            name: "field1",
            placeholder: "Enter field 1",
        },
        {
            label: "Field 2",
            type: "datetime-local",
            name: "field2",
            placeholder: "Enter field 2",
        },
        {
            label: "Field 20",
            type: "multiple select",
            name: "field20",
            placeholder: "Enter field 20",
        },
        {
            label: "Field 20",
            type: "text",
            name: "field20",
            placeholder: "Enter field 20",
        },
        {
            label: "Field 20",
            type: "text",
            name: "field20",
            placeholder: "Enter field 20",
        },
        {
            label: "Field 20",
            type: "text",
            name: "field20",
            placeholder: "Enter field 20",
        },
        {
            label: "Field 20",
            type: "text",
            name: "field20",
            placeholder: "Enter field 20",
        },
        {
            label: "Field 20",
            type: "text",
            name: "field20",
            placeholder: "Enter field 20",
        },
        {
            label: "Field 20",
            type: "text",
            name: "field20",
            placeholder: "Enter field 20",
        },
        {
            label: "Field 20",
            type: "text",
            name: "field20",
            placeholder: "Enter field 20",
        },
        {
            label: "Field 20",
            type: "text",
            name: "field20",
            placeholder: "Enter field 20",
        },
        {
            label: "Field 20",
            type: "text",
            name: "field20",
            placeholder: "Enter field 20",
        },
        {
            label: "Field 20",
            type: "text",
            name: "field20",
            placeholder: "Enter field 20",
        },
        {
            label: "Field 20",
            type: "text",
            name: "field20",
            placeholder: "Enter field 20",
        },
    ];
    return (
        <DefaultLayout>
            <Form
                onSubmit={handleSubmit}
                fields={formFields}
                title="Generate No ST & No SPPD"
            />
        </DefaultLayout>
    );
};
export default Sppd;
