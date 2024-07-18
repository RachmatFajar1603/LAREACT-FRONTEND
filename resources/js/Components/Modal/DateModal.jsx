import React, { useState } from 'react';

const DateModal = ({ isOpen, onClose, onAppend }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    if (!isOpen) return null;

    const handleSubmit = () => {
        if (startDate && endDate) {
            onAppend(startDate, endDate);
        } else {
            alert('Mohon lengkapi kedua tanggal');
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Pilih Tanggal</h2>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Tanggal Mulai:</label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="mt-1 w-full p-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Tanggal Selesai:</label>
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="mt-1 w-full p-2 border rounded"
                    />
                </div>

                <div className="flex justify-between mt-6">
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Simpan
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                        Batal
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DateModal;
