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
        Schema::create('pegawais', function (Blueprint $table) {
            $table->id();
            $table->string('nip_reg', 18); // varchar(18)
            $table->string('nama', 150); // varchar(150)
            $table->unsignedInteger('jkel'); // unsigned integer (removed auto-increment)
            $table->tinyText('alamat')->nullable(); // tinytext, nullable
            $table->string('hp', 12)->nullable(); // varchar(12), nullable
            $table->integer('bidang_id'); // unsigned integer
            $table->string('jabatan', 180)->nullable(); // varchar(180), nullable
            $table->integer('pangkat_id'); // unsigned integer
            $table->timestamps(); // created_at and updated_at timestamps
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pegawais');
    }
};
