<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Negara extends Model
{
    use HasFactory;

    protected $fillable = ['nama'];

    public function perjadins()
    {
        return $this->hasMany(Perjadin::class);
    }
}
