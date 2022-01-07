import React, { useState } from "react";
import DateTimePicker from 'react-datetime-picker';
import IMAGES from "../../images";
import './SearchForm.css';

function SearchForm() {
    const [location, setLocation] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [guestNum, setGuestNum] = useState(2);

    // implement in the future if you have time to get tee time only week ahead
    //const maxDate = new Date(startDate.getTime() + + 7 * 24 * 60 * 60 * 1000); 
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <form className="golf-form" onSubmit={handleSubmit}>
                <span className="form-item">
                    <label>WHERE TO?</label>
                    <input className="form-inputs"
                        type="text"
                        name="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </span>
                <span className="form-item">
                    <label>DATES</label>
                    <DateTimePicker className="form-inputs" value={startDate} onChange={(date) => setStartDate(date)} />
                </span>
                <span className="form-item">
                    <label>GUESTS </label>
                    <select className="form-inputs" value={guestNum} onChange={(e) => setGuestNum(e.target.value)}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </span>
                <button className="formSubmitBtn" type="submit"><i className="fas fa-search"></i></button>
            </form>
            <div>
                <img className="search-splash" src={IMAGES.home} alt="golf-green-picture" />
            </div>
        </>
    )
}

export default SearchForm;
