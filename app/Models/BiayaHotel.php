<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BiayaHotel extends Model
{
    use HasFactory;

    protected $fillable = [
        'pangkat_id', 'jumlah'
    ];

    public function pangkat()
    {
        return $this->belongsTo(Pangkat::class);
    }
}
