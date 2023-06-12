<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    //
    public function index(){
        $students=Student::all();
        return response()->json([
            'students'=>$students
        ],200);
    }
    public function create(Request $request){
        $student=$request->validate([
            'Name'=>['required','min:3'],
            'Password'=>['required','min:5'],
            'Email'=>['required','email']
        ]);
        // return response()->json([
        //     'Message'=>$student
        // ],200);
        $student['Password']=bcrypt($student['Password']);
        $newStudent=Student::create($student);
        if($newStudent)
        {
            return response()->json([
                "Message"=>`Student Added Successfully ${$newStudent}`
            ],200);
        }else{
            return response()->json([
                'Message'=> "Error happened"
            ],500);
        }
    }
    public function delete($id){
        
        $student = Student::find($id);
        if(!$student){
            return response()->json([
                'Message'=>"Student Not Found"
            ],404);
        }
        else{
            $student->delete();
            return response()->json([
                "Message"=>"Student Deleted Successfully !"
            ],200);
        }
       
        return "jj";
    }
    public function show ($id){
        $student=Student::find($id);
        if( $student){
            return response()->json([
                'student'=>$student
            ],200);
        }
        else
        {
            return response()->json([
                'Message'=>'Student Not Found'
            ],404);
        }
        
    }
    public function update(Request $request,$id){
        
        $student=Student::find($id);
        if($student){
            $student->update(["Name"=>$request->Name]);
            return response()->json([
                'Message'=>"Updated Successfully"
            ],200);
        }
        else{
            return response()->json([
                'Message'=>"Student Not Found"
            ],404);
        }
    }
   
}
