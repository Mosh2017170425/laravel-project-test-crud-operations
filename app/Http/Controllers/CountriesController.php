<?php

namespace App\Http\Controllers;

use App\Models\Countries;
use Illuminate\Http\Request;

class CountriesController extends Controller
{
    //
    public function getCovernorates($id){
        $country = Countries::find($id); 
        $governorates = $country->governorates;
        return response()->json([
            'Governorates'=>$governorates
        ],200);
    } 
    public function CountryWithCovernorates($id){
        $country = Countries::with('governorates')->find($id); 
        return response()->json([
            'Country'=>$country
        ],200);
    } 
    public function getAllCountries(){
        $countries=Countries::all();
        if($countries){
            return response()->json([
                "Countries"=>$countries
            ],200);
        }else{
            return response()->json([
                'Message'=>'Error happened'
            ],500);
        }
        
    }
}
