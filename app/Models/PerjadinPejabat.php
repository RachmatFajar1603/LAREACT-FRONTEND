<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PerjadinPejabat extends Model
{
    use HasFactory;

    protected $fillable = [
        'nama', 'jabatan', 'nip', 'perjadin_id'
    ];

    public function perjadin()
    {
        return $this->belongsTo(Perjadin::class);
    }
}
