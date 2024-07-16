<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JenisPerjadin extends Model
{
    use HasFactory;

    protected $fillable = ['nama', 'kode_rekening'];

    public function perjadins()
    {
        return $this->hasMany(Perjadin::class);
    }
}
