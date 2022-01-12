import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; //useDispatch,
import { useParams } from "react-router-dom";
import { editCourse } from "../../../store/spot";
import { getSingleSpot } from "../../../store/spot";

function EditForm() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const spot = useSelector(state => state.course.spot);
    const { id } = useParams();

    const [url, setUrl] = useState(spot.Images[0].url);
    const [name, setName] = useState(spot.name);
    const [address, setAddress] = useState(spot.address);
    const [city, setCity] = useState(spot.city ? spot.city:"");
    const [statee, setStatee] = useState(spot.state);
    const [country, setCountry] = useState(spot.country);
    const [lat, setLat] = useState(spot.lat);
    const [lng, setLng] = useState(spot.lng);
    const [price, setPrice] = useState(spot.price);
    const [errors, setErrors] = useState([]);

    //if (!sessionUser) return <Redirect to="/" />;

    useEffect(() => {
        dispatch(getSingleSpot(id));
    }, [dispatch, id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const courseData = {
            id,
            url,
            name,
            address,
            city,
            statee,
            country,
            lat,
            lng,
            price,
            userId: sessionUser.id,
            imgId: spot.Images[0].id
        }
        return dispatch(editCourse(courseData))
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
            <button type="submit">Edit</button>
        </form>
    );
}

export default EditForm;
