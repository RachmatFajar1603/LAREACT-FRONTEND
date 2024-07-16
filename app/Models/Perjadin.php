<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Perjadin extends Model
{
    use HasFactory;

    protected $fillable = [
        'no_sppd', 'maksud', 'dalam_luar', 'negara_id', 'provinsi_id',
        'kabupaten_id', 'tgl_berangkat', 'tgl_kembali', 'pegawai_id', 'transportasi_id', 'jenisperjadin_id'
    ];

    public function pegawai()
    {
        return $this->belongsTo(Pegawai::class);
    }

    public function transportasi()
    {
        return $this->belongsTo(Transportasi::class);
    }

    public function negara()
    {
        return $this->belongsTo(Negara::class);
    }

    public function provinsi()
    {
        return $this->belongsTo(Provinsi::class);
    }

    public function kabupaten()
    {
        return $this->belongsTo(Kabupaten::class);
    }

    public function hotel()
    {
        return $this->hasOne(PerjadinHotel::class);
    }

    public function jenisperjadin()
    {
        return $this->belongsTo(JenisPerjadin::class);
    }
}
