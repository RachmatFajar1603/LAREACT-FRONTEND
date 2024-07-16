<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PPATKBidang extends Model
{
    use HasFactory;

    protected $fillable = ['ppatk_id', 'bidang_id'];

    public function pptk()
    {
        return $this->belongsTo(PPTK::class);
    }

    public function bidang()
    {
        return $this->belongsTo(Bidang::class);
    }
}
