import { useEffect, useState } from "react";
import { useParams, useLocation } from 'react-router-dom';
import axios from "axios";
const AllGovernorates = () => {
    const [AllGovernorates, setAllGovernorates] = useState([]);
    const { id } = useParams();
    const location = useLocation();
    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/country/governorates/" + id)
            .then(data => {
                setAllGovernorates([...data.data.Governorates])
            })
            .catch(error => {
                console.log(error)
            });
    }, [id]);

    return (
        <div className="mt-4 shadow-lg text-center rounded">
            <h3 className="text-success mb-3">{"hello :" + location?.state.Name}</h3>
            {
                AllGovernorates?.map((gover) => {
                    return <h3 key={gover.id}>{gover.Name}</h3>
                })
            }
        </div>
    );
}
export default AllGovernorates;