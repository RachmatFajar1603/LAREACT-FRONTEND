<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     * 0 = tidak aktif
     * 1 = aktif
     */
    public function up(): void
    {
        Schema::create('ppatks', function (Blueprint $table) {
            $table->id();
            $table->string('nama', 150);
            $table->year('tahun_anggaran');
            $table->unsignedInteger('active')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ppatks');
    }
};
