import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import axios from "axios";
const AllCountries = () => {
    const [AllCountries, setAllCountries] = useState([]);
    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/country")
            .then(data => {
                setAllCountries(data.data.Countries)
            })
            .catch(error => {
                console.log(error)
            });
    }, []);

    return (

        <div className="w-75 h-75 shadow-lg p-3 mb-5 d-flex justify-content rounded m-3">

            <div className="w-100">

                <h1 >Country</h1>
                {
                    AllCountries?.map((country) => {
                        return <NavLink className="btn btn-primary btn-lg me-2" key={country.id} to={"/countries/governorates/" + country.id} state={{ "Name": country.Name }}>{country.Name}</NavLink>
                    })
                }
              <Outlet />
            </div>
            
        </div>
    );
}
export default AllCountries;