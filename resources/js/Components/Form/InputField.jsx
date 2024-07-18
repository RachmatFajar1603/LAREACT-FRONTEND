import React, { useState } from "react";
import Modal from "../Modal/Index";
import DateModal from "../Modal/DateModal";
const InputField = ({
    fieldType,
    type,
    name,
    placeholder,
    value,
    onChange,
    options,
    defaultValue,
    onClick,
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDateModalOpen, setIsDateModalOpen] = useState(false);
    const [generatedCode, setGeneratedCode] = useState("");
    const [codeCounter, setCodeCounter] = useState(1);
    const [isCodeGenerated, setIsCodeGenerated] = useState(false);

    const handleButtonClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleAppendData = (departure, destination) => {
        console.log(`Appending data: ${departure} to ${destination}`);
        // Implement your logic to append data here
        setIsModalOpen(false);
    };

    const handleNewRow = () => {
        console.log("Creating new row");
        // Implement your logic to create a new row here
        setIsModalOpen(false);
    };

    const generateCode = () => {
        const newCode = `${String(codeCounter).padStart(3, "0")}`;
        setGeneratedCode(newCode);
        setCodeCounter((prevCounter) => prevCounter + 1);
        if (onChange) {
            onChange({ target: { name, value: newCode } });
        }
    };

    const handleDateButtonClick = () => {
        setIsDateModalOpen(true);
    };

    const handleCloseDateModal = () => {
        setIsDateModalOpen(false);
    };

    const handleAppendDateData = (startDate, endDate) => {
        console.log(`Appending date data: ${startDate} to ${endDate}`);
        if (onChange) {
            onChange({ target: { name, value: `${startDate} - ${endDate}` } });
        }
        setIsDateModalOpen(false);
    };

    switch (type) {
        case "select":
            return (
                <select
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Select an option</option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            );
        case "checkbox":
            return (
                <input
                    type="checkbox"
                    name={name}
                    checked={value}
                    onChange={onChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
            );
        case "textarea":
            return (
                <textarea
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            );
        case "input-with-button":
            return (
                <div className="flex">
                    <input
                        type="text"
                        name={name}
                        placeholder={placeholder}
                        value={value || generatedCode}
                        onChange={onChange}
                        className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        readOnly
                    />
                    <button
                        onClick={() => {
                            if (isCodeGenerated) {
                                alert(
                                    "Kode sudah di-generate. Tidak bisa generate ulang."
                                );
                            } else {
                                generateCode();
                                setIsCodeGenerated(true);
                            }
                        }}
                        disabled={isCodeGenerated}
                        className={`px-4 py-2 text-white rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            isCodeGenerated
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-blue-500 hover:bg-blue-600"
                        }`}
                    >
                        {placeholder}
                    </button>
                </div>
            );
        case "date-range":
            return (
                <>
                    <div className="flex">
                        <button
                            onClick={() => setIsDateModalOpen(true)}
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Pilih Tanggal
                        </button>
                    </div>
                    <DateModal
                        isOpen={isDateModalOpen}
                        onClose={() => setIsDateModalOpen(false)}
                        onAppend={handleAppendDateData}
                    />
                </>
            );
        case "button":
            return (
                <>
                    <button
                        type="button"
                        name={name}
                        onClick={handleButtonClick}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        {value || placeholder}
                    </button>
                    <Modal
                        isOpen={isModalOpen}
                        onClose={handleCloseModal}
                        onAppend={handleAppendData}
                        onNewRow={handleNewRow}
                    />
                </>
            );
        default:
            return (
                <input
                    onClick={onClick}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            );
    }
};

export default InputField;
