<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMetaDataTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('meta_data', function (Blueprint $table) {
            $table->id();
            $table->mediumText('title')->nullable();
            $table->mediumText('url')->nullable();
            $table->mediumText('description')->nullable();
            $table->mediumText('type')->nullable();
            $table->mediumText('card')->nullable();
            $table->string('image')->nullable();
            $table->mediumText('analytics')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('meta_data');
    }
}
