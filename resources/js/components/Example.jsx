
import React from 'react';
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Example() {
  let navigate = useNavigate();
  // const routeChange = () => {
  //   let path = `/delete`;
  //   navigate(path);
  // }
  const allCountries = () => {
    let path = `/countries`;
    navigate(path);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log("data", data)
    fetch('/student/add', {
      method: 'POST',
      body: data
    }).then((response) => {
      let res = response.json()
      console.log("res", response.status);
      if (response.status == 201)
        return res;
      else
        return null;
    }).then((res) => {
      if (res) {
        toast.success(res.message);
      }
      else {
        toast.error("Error happened")
      }
    });

  }
  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <ToastContainer />
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="text" name='Name' id="form3Example1c" className="form-control" />
                          <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="email" name='Email' id="form3Example3c" className="form-control" />
                          <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="password" name='Password' id="form3Example4c" className="form-control" />
                          <label className="form-label" htmlFor="form3Example4c">Password</label>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <input type="submit" className="btn btn-primary btn-lg" value='Register' />
                      </div>

                    </form>
                    {/* <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button className="btn btn-primary btn-lg" onClick={routeChange}>Delete</button>
                    </div> */}
                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button className="btn btn-primary btn-lg" onClick={allCountries}>Get All Countries</button>
                    </div>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid" alt="Sample image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Example;

