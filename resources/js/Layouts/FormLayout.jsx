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
        <>
                <Card title={title}>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-rows-7 grid-flow-col gap-4">
                            {fields.map((field) => (
                                <FormField
                                    key={field.name}
                                    label={field.label}
                                    type={field.type}
                                    name={field.name}
                                    placeholder={field.placeholder}
                                    value={field.value}
                                    options={field.options}
                                    onChange={handleChange}
                                />
                            ))}
                        </div>
                        <div className=" flex justify-end">
                            <div className="mt-6 w-fit">
                                <Button type="submit">Submit</Button>
                            </div>
                        </div>
                    </form>
                </Card>
            
        </>
    );
};

export default Form;
