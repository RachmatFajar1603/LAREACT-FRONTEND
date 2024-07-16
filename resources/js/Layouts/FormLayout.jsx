import FormField from "@/Components/Form";
import Button from "@/Components/Form/Button";
import Card from "@/Fragments/Card";
import React, { useState } from "react";

const Form = ({ onSubmit, fields, title }) => {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <Card title={title}>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-2">
                    {fields.map((field) => (
                        <FormField
                            key={field.name}
                            label={field.label}
                            type={field.type}
                            name={field.name}
                            placeholder={field.placeholder}
                            value={formData[field.name] || ""}
                            onChange={handleChange}
                        />
                    ))}
                </div>
                <div className="mt-6">
                    <Button type="submit">Submit</Button>
                </div>
            </form>
        </Card>
    );
};

export default Form;
