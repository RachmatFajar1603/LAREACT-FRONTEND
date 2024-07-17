import DefaultLayout from "@/Layouts/DefaultLayout";
import Form from "@/Layouts/FormLayout";
const Sekretariat = () => {
    const handleSubmit = (data) => {
        console.log("Form submitted:", data);
    };

    const formFields = [
        {
            label: "No ST",
            type: "number",
            name: "no_st",
            placeholder: "000",
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
            type: "text",
            name: "lokasi",
            placeholder: "Lokasi",
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
            label: "PIlih Bidang",
            type: "select",
            option: [{
                value: "1",
                label: "Bidang 1",
            }, {
                value: "2",
                label: "Bidang 2",
            }, {
                value: "3",
                label: "Bidang 3",
            }, {
                value: "4",
                label: "Bidang 4",
            }, {
                value: "5",
                label: "Bidang 5",
            }],
            name: "pilih_bidang",
            placeholder: "Pilih bidang",
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

export default Sekretariat;
