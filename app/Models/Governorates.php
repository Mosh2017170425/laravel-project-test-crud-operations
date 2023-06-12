<?php

namespace App\Models;

use App\Models\Countries;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Governorates extends Model
{
    use HasFactory;
    protected $fillable=['Name','CountryID'];
    protected $hidden=['created_at','updated_at'];
    public function Country()
    {
        return $this->belongsTo(Countries::class,'CountryID','id');
    }
}
