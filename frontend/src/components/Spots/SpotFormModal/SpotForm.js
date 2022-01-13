import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; //useDispatch,
import { Redirect, useHistory } from "react-router-dom";
import { CreateCourse } from "../../../store/spot";
import './SpotForm.css';

function SpotForm({ showModal }) {

    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector((state) => state.session.user);
    const [url, setUrl] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setStatee] = useState("");
    const [country, setCountry] = useState("");
    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);
    const [price, setPrice] = useState(0.00);
    const [errors, setErrors] = useState([]);

    useEffect(()=>{
        const error = []
        
        if(url.length < 5) error.push("Please Enter URL");
        if(name.length < 3) error.push("Please enter valid name");
        if(address.length < 4) error.push("Please Enter valid address");
        if(state.length != 0 && (state.length < 2 || state.length >= 3)) error.push("Please Enter a valid State Abbreviation");
        if(city.length < 3) error.push("Please enter valid city name");
        if(country.length < 4) error.push("Please enter a valid country name");

        setErrors(error);
    }, [url,name,address,city,state,country])

    if (!sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();

        const courseData = {
            url,
            name,
            address,
            city,
            state,
            country,
            lat,
            lng,
            price,
            userId: sessionUser.id
        }
        
        dispatch(CreateCourse(courseData))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
        
        showModal(false);
        history.push('/owned');
    };

    return (
        <form className="spot-form" onSubmit={handleSubmit}>
            {/* <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul> */}
            <label>
                Image Url:
                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Image URL (Required)"
                    required
                />
            </label>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name (Required)"
                    required
                />
            </label>
            <label>
                Address:
                <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Address (Required)"
                    required
                />
            </label>
            <label>
                City: 
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="City (Required)"
                    required
                />
            </label>
            <label>
                State: 
                <input
                    type="text"
                    value={state}
                    onChange={(e) => setStatee(e.target.value.toUpperCase())}
                    placeholder="State (e.g CA | NY | TX)"
                />
            </label>
            <label>
                Country: 
                <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="Country (Required)"
                    required
                />
            </label>
            <label>
                Latitude: 
                <input
                    type="number"
                    value={lat}
                    onChange={(e) => setLat(e.target.value)}
                />
            </label>
            <label>
                Longitude: 
                <input
                    type="number"
                    value={lng}
                    onChange={(e) => setLng(e.target.value)}
                />
            </label>
            <label>
                Price: 
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Price"
                />
            </label>
            <button type="submit" disabled={errors.length ? true:false}>Host Spot</button>
        </form>
    );
}

export default SpotForm;
