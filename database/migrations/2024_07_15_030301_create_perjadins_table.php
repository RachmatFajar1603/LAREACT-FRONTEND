<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     * 1 = Dalam Daerah
     * 2 = Luar Daerah
     * 3 = Luar Negeri
     */
    public function up(): void
    {
        Schema::create('perjadins', function (Blueprint $table) {
            $table->id();
            $table->string('no_st', 20);
            $table->date('tgl_st');
            $table->string('no_sppd', 20)->unique();
            $table->tinyText('maksud');
            $table->integer('pegawai_id');
            $table->integer('kegiatan_id');
            $table->integer('sumberdana_id');
            $table->integer('transportasi_id');
            $table->date('tgl_barangkat');
            $table->date('tgl_kembali');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('perjadins');
    }
};
