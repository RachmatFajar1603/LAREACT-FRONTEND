import DefaultLayout from "@/Layouts/DefaultLayout";
import Form from "@/Layouts/FormLayout";

const Sppd = () => {
    const handleSubmit = (data) => {
        console.log("Form submitted:", data);
    };

    const formFields = [
        {
            label: "No SPPD",
            type: "number",
            name: "no_sppd",
            placeholder: "Masukkan nomor SPPD",
        },
        {
            label: "Bidang",
            type: "text",
            name: "bidang",
        },
        {
            label: "Nama",
            type: "text",
            name: "nama",
        },
        {
            label: "NIP",
            type: "number",
            name: "nip",
        },
        {
            label: "Jabatan",
            type: "text",
            name: "jabatan",
        },
        {
            label: "Pangkat/Gol",
            type: "text",
            name: "pangkat_gol",
        },
        {
            label: "Jenis Perdin",
            type: "select",
            name: "jenis_perdin",
            options: [
                { value: "dalam_daerah", label: "Dalam Daerah" },
                { value: "dk_dan_dd", label: "DK dan DD" },
                { value: "luas_daerah", label: "Luas Daerah" },
                { value: "luas_daerah_fb", label: "Luas Daerah FB" },
                { value: "dalam_kota", label: "Dalam Kota < 8 Jam" },
                { value: "diklat_ld", label: "Diklat LD" },
                { value: "diklat_dd", label: "Diklat DD" },
                { value: "luar_negeri", label: "Luar Negeri" },
            ],
        },
        {
            label: "Kode Belanja",
            type: "number",
            name: "kode_belanja",
        },
        {
            label: "No ST",
            type: "number",
            name: "no_st",
        },
        {
            label: "Tanggal ST",
            type: "datetime-local",
            name: "tanggal_st",
        },
        {
            label: "Kegiatan Bidang",
            type: "text",
            name: "kegiatan_bidang",
        },
        {
            label: "Sub Kegiatan",
            type: "select",
            name: "sub_kegiatan",
            options: [
                { value: "pendidikan_dan_pelatihan_fungsi", label: "Pendidikan dan Pelatihan Pegawai Berdasarkan Tugas dan Fungsi" },
                { value: "penyusunan_dokumen", label: "Penyusunan Dokumen Perencanaan Perangkat Daerah" },
                { value: "koordinasi_dan_pelaksanaan", label: "Koordinasi dan Pelaksanaan Akuntansi SKPD" },
                { value: "Penyelenggara_rapat", label: "Penyelanggaraan Rapat Koordinasi dan Konsultasi SKPD" },
            ],
        },
        {
            label: "No Sub Kegiatan",
            type: "number",
            name: "no_sub_kegiatan",
        },
        {
            label: "Sumber Dana",
            type: "select",
            name: "sumber_dana",
            options: [
                { value: "dak_nf", label: "DAK NF" },
                { value: "silpa_paa", label: "SILPA PAA" },
                { value: "paa", label: "PAA" },
                { value: "dau", label: "DAU" },
                { value: "dbh", label: "DBH" },
            ],
        },
        {
            label: "Tujuan",
            type: "text",
            name: "tujuan",
        },
        {
            label: "Alat Transportasi",
            type: "select",
            name: "sub_kegiatan",
            options: [
                { value: "pesawat_udara", label: "Pesawat Udara" },
                { value: "kendaraan_umum", label: "Kendaraan Umum" },
                { value: "kapal_laut", label: "Kapal Laut" },
                { value: "mobil_dinas", label: "Mobil Dinas" },
            ],
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
