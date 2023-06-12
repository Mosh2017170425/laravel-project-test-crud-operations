<?php

namespace App\Models;

use App\Models\Governorates;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Countries extends Model
{
    use HasFactory;
    protected $fillable=['Name'];
    protected $hidden=['created_at','updated_at'];
    
    public function governorates()
    {
        return $this->hasMany(Governorates::class,'CountryID','id');
    }
}