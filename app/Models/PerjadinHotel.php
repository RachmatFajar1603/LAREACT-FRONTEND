<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PerjadinHotel extends Model
{
    use HasFactory;

    protected $fillable = [
        'nama', 'tgl_checkin', 'tgl_checkout', 'perjadin_id'
    ];

    public function perjadin()
    {
        return $this->belongsTo(Perjadin::class);
    }
}
