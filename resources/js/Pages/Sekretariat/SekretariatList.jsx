import Button from "@/Components/Form/Button";
import PrimaryButton from "@/Components/PrimaryButton";
import Table from "@/Fragments/Table";
import DefaultLayout from "@/Layouts/DefaultLayout";
import { Link } from '@inertiajs/react';

const SekretariatList = () => {
    const headers = ["NO ST", "Kode St", "Bulan", "Tahun","Nama","Perihal","Lokasi","Waktu","Tanggal Pengesahan ST","Bidang","Kode Dinas","Kode Bidang","No urut SPPD","Kode Tulisan"];
    const data = [
        {
            NOST: "Jane Cooper",
            KodeSt: "Kode St",
            Bulan: "Bulan",
            Tahun: "Tahun",
            Dinas: "Dinas",
            Perihal: "Perihal",
            Lokasi: "Lokasi",
            Waktu: "Waktu",
            TanggalPengesahanST: "Tgl. Pengesahan ST",
            Bidang: "Bidang",
            KodeDinas: "Kode Dinas",
            KodeBidang: "Kode Bidang",
            NoUrutSPPD: "No. urut SPPD",
            KodeTulisan: "Kode Tulisan",
        }
        // Add more rows as needed
    ];
    return (
        <DefaultLayout>
            <div className="container mx-auto p-4">
                <div className="flex justify-between pb-4">
                    <h1 className="text-2xl font-bold mb-4">ST & SPPD</h1>
                    <Link href="/sekretariat-create">
                        <PrimaryButton> Tambah </PrimaryButton>
                    </Link>
                </div>
                <Table
                    headers={headers}
                    data={data}
                    keyExtractor={(row) => row.email}
                />
            </div>
        </DefaultLayout>
    );
};
export default SekretariatList;
