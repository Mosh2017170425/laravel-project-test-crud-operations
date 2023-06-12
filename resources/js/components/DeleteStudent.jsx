
import { useState } from "react";
import Cookies from 'js-cookie';
function DeleteStudent() {
    const [StudentID, setStudentID] = useState(0)
    const setid = (e) => {
        setStudentID(e.target.value)
    }
    const handleDelete = () => {
        fetch('/api/students/delete/' + StudentID, {
            method: 'DELETE',
           
        }).then((response)=>{
           let res=response.json()
           return res;
        }).then((res)=>{
            console.log(res)
        });

    }
    return (
        <div className="container h-100 w-50">
            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Delete Student</p>
            <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                    <input type="text" name='id' id="form3Example1c" className="form-control" value={StudentID} onChange={setid} />
                    <label className="form-label" htmlFor="form3Example1c">Student ID</label>
                </div>
            </div>
            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                <input type="submit" className="btn btn-primary btn-lg" value='delete' onClick={handleDelete} />
            </div>
        </div>
    )
}

export default DeleteStudent;