import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux"; //useDispatch,
//import { Redirect } from "react-router-dom";
import { CreateCourse } from "../../store/spot";

function SpotForm() {
    //const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const dispatch = useDispatch();
    const [url, setUrl] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [statee, setStatee] = useState("");
    const [country, setCountry] = useState("");
    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);
    const [price, setPrice] = useState(0.00);
    const [errors, setErrors] = useState([]);

    //if (!sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            url,
            name,
            address,
            city,
            statee,
            country,
            lat,
            lng,
            price,
            userId: sessionUser.id
        }
        dispatch(CreateCourse(data));
        //console.log(data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <label>
                Image Url
                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    required
                />
            </label>
            <label>
                Name
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </label>
            <label>
                Address
                <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />
            </label>
            <label>
                City
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                />
            </label>
            <label>
                State
                <input
                    type="text"
                    value={statee}
                    onChange={(e) => setStatee(e.target.value)}
                />
            </label>
            <label>
                Country
                <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                />
            </label>
            <label>
                Latitude
                <input
                    type="number"
                    value={lat}
                    onChange={(e) => setLat(e.target.value)}
                />
            </label>
            <label>
                Longitude
                <input
                    type="number"
                    value={lng}
                    onChange={(e) => setLng(e.target.value)}
                />
            </label>
            <label>
                Price
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </label>
            <button type="submit">Host Spot</button>
        </form>
    );
}

export default SpotForm;
