<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DisclaimerController;
use App\Http\Controllers\ResultsController;
use App\Http\Controllers\MetaDataController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::get('/create-admin', [AuthController::class, 'createAdmin']);
Route::post('/login', [AuthController::class, 'login']);

Route::get('/disclaimers', [DisclaimerController::class, 'getDisclaimers']);
Route::get('/results', [ResultsController::class, 'getResults']);


Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get('/test', function () {
        return 'working';
    });

    Route::post('/dis-save', [DisclaimerController::class, 'saveDisclaimers']);
    Route::delete('/dis-delete/{id}', [DisclaimerController::class, 'deleteDisclaimers']);
    Route::post('/disCardText-save', [DisclaimerController::class, 'saveDisCardText']);

    Route::post('/save-result', [ResultsController::class, 'saveResults']);
    Route::delete('/del-result/{id}', [ResultsController::class, 'deleteResults']);
    Route::post('/save-times', [ResultsController::class, 'saveTimes']);
    Route::post('/cardText-save', [ResultsController::class, 'saveCardText']);

    Route::get('/get-metaData', [MetaDataController::class, 'getMeta']);
    Route::post('/save-og', [MetaDataController::class, 'saveOG']);
    Route::post('/save-analytics', [MetaDataController::class, 'saveAnalytics']);

    Route::post('/logout', [AuthController::class, 'logout']);
});
