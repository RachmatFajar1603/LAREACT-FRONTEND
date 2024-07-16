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
        Schema::create('perjadinpejabats', function (Blueprint $table) {
            $table->id();
            $table->string('nama', 150);
            $table->string('nip', 18);
            $table->string('jabatan', 150);
            $table->integer('perjadin_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('perjadinpejabats');
    }
};
