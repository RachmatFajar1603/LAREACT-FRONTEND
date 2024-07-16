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
        Schema::create('perjadinhotels', function (Blueprint $table) {
            $table->id();
            $table->string('nama', 180);
            $table->date('tgl_checkin');
            $table->date('tgl_checkout');
            $table->integer('perjadin_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('perjadinhotels');
    }
};
