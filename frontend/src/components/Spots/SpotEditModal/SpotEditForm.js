import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; //useDispatch,
import { useParams } from "react-router-dom";
import { editCourse } from "../../../store/spot";
import { getSingleSpot } from "../../../store/spot";
import './EditModal.css';

function EditForm({ showModal }) {

    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const spot = useSelector(state => state.course.spot);
    const { id } = useParams();

    const [url, setUrl] = useState(spot.Images[0].url);
    const [name, setName] = useState(spot.name);
    const [address, setAddress] = useState(spot.address);
    const [city, setCity] = useState(spot.city ? spot.city : "");
    const [state, setStatee] = useState(spot.state);
    const [country, setCountry] = useState(spot.country);
    const [lat, setLat] = useState(spot.lat);
    const [lng, setLng] = useState(spot.lng);
    const [price, setPrice] = useState(spot.price);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        dispatch(getSingleSpot(id));
        const error = []

        if (url.length < 5) error.push("Please Enter URL");
        if (name.length < 3) error.push("Please enter valid name");
        if (address.length < 4) error.push("Please Enter valid address");
        if (state.length !== 0 && (state.length < 2 || state.length >= 3)) error.push("Please Enter a valid State Abbreviation");
        if (city.length < 3) error.push("Please enter valid city name");
        if (country.length < 4) error.push("Please enter a valid country name");

        setErrors(error);
    }, [dispatch, id, url, name, address, city, state, country]);


    const handleSubmit = (e) => {
        e.preventDefault();

        const courseData = {
            id,
            url,
            name,
            address,
            city,
            state,
            country,
            lat,
            lng,
            price,
            userId: sessionUser.id,
            imgId: spot.Images[0].id
        }

        dispatch(editCourse(courseData))
            .then(showModal(false))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    };

    return (
        <form className="edit-spot-form" onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <label>
                Image Url
                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Image URL (Required)"
                    required
                />
            </label>
            <label>
                Name
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name (Required)"
                    required
                />
            </label>
            <label>
                Address
                <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Address (Required)"
                    required
                />
            </label>
            <label>
                City
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="City (Required)"
                    required
                />
            </label>
            <label>
                State
                <input
                    type="text"
                    value={state}
                    onChange={(e) => setStatee(e.target.value)}
                    placeholder="State"
                />
            </label>
            <label>
                Country
                <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="Country (Required)"
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
                    placeholder="Price"
                />
            </label>
            <button type="submit" disabled={errors.length ? true : false}>Edit</button>
        </form>
    );
}

export default EditForm;
