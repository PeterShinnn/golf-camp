import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import DatePicker from 'react-date-picker';
import IMAGES from "../../../images";
import './SearchForm.css';

function SearchForm() {
    const [location, setLocation] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [guestNum, setGuestNum] = useState(2);
    const history = useHistory();

    // implement in the future if you have time to get tee time only week ahead
    //const maxDate = new Date(startDate.getTime() + + 7 * 24 * 60 * 60 * 1000); 
    const handleSubmit = (e) => {
        e.preventDefault();

        // const reservation = {
        //     location,
        //     startDate,
        //     guestNum
        // }

        //console.log(reservation);

        reset();
        history.push({
            pathname: '/search/result',
            search: `?query=${location}&date=${startDate}&guest=${guestNum}`,
            state: { location, startDate, guestNum }
        });
    }

    const reset = () => {
        setLocation("")
        setStartDate(new Date());
        setGuestNum(2);
    }

    return (
        <div className="form-div">
            <form className="golf-form" onSubmit={handleSubmit}>
                <div className="form-item">
                    <label>WHERE TO?</label>
                    <span className="search-box">
                        <i className="fas fa-search srchIcon"></i>
                        <input className="form-inputs"
                            type="text"
                            name="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="Search by state/City (e.g. PA)"
                        />
                    </span>
                </div>

                <div className="form-item">
                    <label>DATES</label>
                    <DatePicker className="form-inputs" value={startDate} onChange={(date) => setStartDate(date)} />
                </div>

                <div className="form-item">
                    <label>GUESTS </label>
                    <select className="form-inputs" value={guestNum} onChange={(e) => setGuestNum(e.target.value)}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </div>

                <button className="formSubmitBtn" type="submit"><i className="fas fa-search submitBtn"></i></button>
            </form>
            <div className="search-splash">
                <img className="search-splash-img" src={IMAGES.home} alt="golf-green" />
            </div>
        </div>
    )
}

export default SearchForm;
