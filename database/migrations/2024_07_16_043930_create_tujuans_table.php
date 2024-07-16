<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tujuans', function (Blueprint $table) {
            $table->id();
            $table->string('no_st', 20);
            $table->unsignedInteger('dalam_luar')->default(1); // unsigned integer with default value 1
            $table->integer('jenisperjadin_id');
            $table->integer('negara_id');
            $table->integer('provinsi_id');
            $table->integer('kabupaten_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tujuans');
    }
};
