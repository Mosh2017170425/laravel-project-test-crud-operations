<?php

namespace App\Http\Controllers;

use App\Models\Countries;
use App\Models\Governorates;
use Illuminate\Http\Request;

class GovernoratesController extends Controller
{
    //
    public function country($id){
       $governorate=Governorates::find($id);
       $country=$governorate->Country;
       return response()->json([
        'Country'=>$country
       ],200);
    }
    public function create($countryId,Request $request){

        $country = Countries::find($countryId);
        $governorate = new Governorates;
        $governorate->Name =$request->Name;
        $created_governorate = $country->governorates()->save($governorate);
        return respose()->json([
            "NEW Governorate" =>$countryNew
        ],200);
    }
    // not correct way
    // public function create2(Request $request){
    //     Governorates::create([
    //         'Name'=>$request->Name,
    //         'CountryID'=>$request->C_ID
    //     ]);
    // }
}
