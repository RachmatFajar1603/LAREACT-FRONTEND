import Modal from "@/Components/Modal";
import DefaultLayout from "@/Layouts/DefaultLayout";
import Form from "@/Layouts/FormLayout";
import React, { useState } from "react";
import { Head } from "@inertiajs/react";
const Sekretariat = ({ no_st, no_urut_sppd }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [noST, setNoST] = useState("");
    const [codeCounter, setCodeCounter] = useState(1);
    const [isCodeGenerated, setIsCodeGenerated] = useState(false);

    const handleSubmit = (data) => {
        console.log("Form submitted:", data);
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleModalSubmit = (data) => {
        setLocationData(data);
        handleCloseModal();
    };

    const generateCode = () => {
        if (isCodeGenerated) {
            alert("Kode sudah di-generate. Tidak bisa generate ulang.");
            return;
        }

        const newCode = `${String(codeCounter).padStart(3, "0")}`;
        setData("no_st", newCode);
        setCodeCounter((prevCounter) => prevCounter + 1);
        setIsCodeGenerated(true);
    };

    const formFields = [
        {
            label: "No ST",
            type: "input-with-button",
            name: "no_st",
            placeholder: "000",
            value: no_st,
            onChange: (e) => setData("no_st", e.target.value),
            onButtonClick: generateCode,
            buttonText: "Generate",
            disabled: isCodeGenerated,
        },
        {
            label: "Kode ST",
            type: "text",
            name: "kode_st",
            value: "ST",
        },
        {
            label: "Bulan",
            type: "text",
            name: "bulan",
            placeholder: "Bulan dalam romawi",
        },
        {
            label: "Tahun",
            type: "number",
            name: "tahun",
            placeholder: "Tahun",
        },
        {
            label: "Nama",
            type: "text",
            name: "nama",
            placeholder: "Nama",
        },
        {
            label: "Perihal/Tujuan",
            type: "text",
            name: "perihal",
            placeholder: "Perihal/Tujuan",
        },
        {
            label: "Lokasi",
            type: "button",
            name: "lokasi",
            placeholder: "Klik untuk memilih lokasi",
            onFocus: handleOpenModal, // Menggunakan onFocus untuk membuka modal
            readOnly: true, // Mencegah input manual
        },
        {
            label: "Waktu dan Tanggal",
            type: "text",
            name: "waktu",
            placeholder: "Waktu dan Tanggal",
        },
        {
            label: "Tanggal Pengesahan",
            type: "datetime-local",
            name: "tanggal_pengesahann",
        },
        {
            label: "Pilih Bidang",
            type: "select",
            name: "pilih_bidang",
            options: [
                { value: "sekretariat", label: "Sekretariat" },
                { value: "p2ipm", label: "P2IPM" },
                { value: "promosi", label: "Promosi" },
                { value: "perizinan", label: "Perizinan" },
                { value: "dalak", label: "Dalak" },
                { value: "datin", label: "Datin" },
                { value: "uptd_kek", label: "UPTD_KEK" },
            ],
        },
        {
            label: "Kode Dinas",
            type: "number",
            name: "kode_dinas",
            value: "094",
        },
        {
            label: "kode Bidang",
            type: "select",
            name: "kode_bidang",
            options: [
                { value: "sekretariat", label: "Sekretariat" },
                { value: "p2ipm", label: "P2IPM" },
                { value: "promosi", label: "Promosi" },
                { value: "perizinan", label: "Perizinan" },
                { value: "dalak", label: "Dalak" },
                { value: "datin", label: "Datin" },
                { value: "uptd_kek", label: "UPTD_KEK" },
            ],
        },
        {
            label: "No Urut SPPD",
            type: "input-with-button",
            name: "no_urut_sppd",
            value: no_urut_sppd,
            placeholder: "0",
            onChange: (e) => setData("no_urut_sppd", e.target.value),
            onButtonClick: generateCode,
            buttonText: "Generate",
            disabled: isCodeGenerated,
        },
        {
            label: "Kode Tulisan SPPD",
            type: "number",
            name: "kode_tulisan_sppd",
            placeholder: "094/DI/025/SPPD/2024",
        },
    ];
    return (
        <>
        <Head title="Generate No ST & No SPPD" />
            <DefaultLayout>
                <Form
                    onSubmit={handleSubmit}
                    fields={formFields}
                    title="Generate No ST & No SPPD"
                />
                <Modal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    onSubmit={handleModalSubmit}
                />
            </DefaultLayout>
        </>
    );
};

export default Sekretariat;
