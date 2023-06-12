<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Countries\Test;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\CountriesController;
use App\Http\Controllers\GovernoratesController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post("students/add",[StudentController::class,'create']);
Route::get("students",[StudentController::class,'index']);
Route::get("students/{id}",[StudentController::class,'show']);
Route::put("students/{id}",[StudentController::class,'update']);
Route::delete("students/delete/{id}",[StudentController::class,'delete']);

// get country with its governorates
Route::get('/country/{id}',[CountriesController::class,'CountryWithCovernorates']);
// get all countries
Route::get('/country',[CountriesController::class,'getAllCountries']); 
// get all governorates of country
Route::get('/country/governorates/{id}',[CountriesController::class,'getCovernorates']); 

Route::get('/governorate/country/{id}',[GovernoratesController::class,'country']);
Route::post('/governorate/add/{countryId}',[GovernoratesController::class,'create']);

// Route::post('/governorate/add',[GovernoratesController::class,'create2']);
