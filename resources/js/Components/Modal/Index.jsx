import React, { useState } from "react";

const Modal = ({ isOpen, onClose, onAppend }) => {
    const [departure, setDeparture] = useState("");
    const [destinations, setDestinations] = useState([]);
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
        { value: "solo", label: "Solo" },
        { value: "malang", label: "Malang" },
    ];

    const handleDestinationChange = (value) => {
        setDestinations(prev =>
            prev.includes(value)
                ? prev.filter(item => item !== value)
                : [...prev, value]
        );
    };

    const handleAppend = () => {
        setShowResult(true);
        onAppend(departure, destinations);
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
                        <label className="block mb-2 font-bold">Tujuan (pilih satu atau lebih):</label>
                        <div className="space-y-2">
                            {destinationOptions.map((option) => (
                                <label key={option.value} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={destinations.includes(option.value)}
                                        onChange={() => handleDestinationChange(option.value)}
                                        className="mr-2"
                                    />
                                    {option.label}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                {showResult && (
                    <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                        <p><strong>Keberangkatan:</strong> {departureOptions.find(opt => opt.value === departure)?.label || 'Belum dipilih'}</p>
                        <p><strong>Tujuan:</strong> {
                            destinations.length > 0
                                ? destinations.map(dest => destinationOptions.find(opt => opt.value === dest)?.label).join(', ')
                                : 'Belum dipilih'
                        }</p>
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
