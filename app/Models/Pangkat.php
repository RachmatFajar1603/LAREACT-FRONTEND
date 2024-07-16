<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pangkat extends Model
{
    use HasFactory;

    protected $fillable = ['nama'];

    public function pegawais()
    {
        return $this->hasMany(Pegawai::class);
    }

    public function biayahotels()
    {
        return $this->hasMany(BiayaHotel::class);
    }

    public function lumpsums()
    {
        return $this->hasMany(Lumpsum::class);
    }
}
