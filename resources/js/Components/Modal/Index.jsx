import React, { useState } from "react";

const Modal = ({ isOpen, onClose, onAppend }) => {
    const [departure, setDeparture] = useState("");
    const [destination, setDestination] = useState("");
    const [showResult, setShowResult] = useState(false);

    const departureOptions = [
        { value: "jakarta", label: "Jakarta" },
        { value: "surabaya", label: "Surabaya" },
        { value: "bali", label: "Bali" },
    ];

    const destinationOptions = [
        { value: "bandung", label: "Bandung" },
        { value: "yogyakarta", label: "Yogyakarta" },
        { value: "semarang", label: "Semarang" },
    ];

    const handleAppend = () => {
        setShowResult(true);
        onAppend(departure, destination);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
            <div className="bg-white p-8 rounded-lg w-full max-w-3xl">
                <h2 className="text-2xl font-bold mb-6">Pilih Keberangkatan dan Tujuan</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="departure" className="block mb-2 font-bold">Keberangkatan:</label>
                        <select
                            id="departure"
                            value={departure}
                            onChange={(e) => setDeparture(e.target.value)}
                            className="w-full p-3 border rounded-lg"
                        >
                            <option value="">Pilih Keberangkatan</option>
                            {departureOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="destination" className="block mb-2 font-bold">Tujuan:</label>
                        <select
                            id="destination"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            className="w-full p-3 border rounded-lg"
                        >
                            <option value="">Pilih Tujuan</option>
                            {destinationOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {showResult && (
                    <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                        <p><strong>Keberangkatan:</strong> {departureOptions.find(opt => opt.value === departure)?.label || 'Belum dipilih'}</p>
                        <p><strong>Tujuan:</strong> {destinationOptions.find(opt => opt.value === destination)?.label || 'Belum dipilih'}</p>
                    </div>
                )}

                <div className="mt-8 flex justify-between">
                    <button
                        onClick={handleAppend}
                        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Append 
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition duration-300"
                    >
                        Tutup
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
