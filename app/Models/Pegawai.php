<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pegawai extends Model
{
    use HasFactory;

    protected $fillable = [
        'nip_reg', 'nama', 'jkel', 'alamat', 'hp', 'jabatan',
        'bidang_id', 'pangkat_id'
    ];

    public function pangkat()
    {
        return $this->belongsTo(Pangkat::class);
    }

    public function bidang()
    {
        return $this->belongsTo(Bidang::class);
    }

    public function perjadins()
    {
        return $this->hasMany(Perjadin::class);
    }
}
