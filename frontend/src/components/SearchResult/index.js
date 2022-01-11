import React, { useState, useEffect }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from "react-router-dom";

import { getSpots } from '../../store/spot';
import ResultBox from '../ResultBox';

function SearchResult() {
    const location = useLocation();
    const dispatch = useDispatch();

    const courses = useSelector(state => state.action);
    //console.log(courses)
    useEffect(() => {
        dispatch(getSpots());
    }, [dispatch])

    // if (!spot) {
    //     return null;
    // }

    return (
        <>
            <main>
                <h2>hello world</h2>
                <ResultBox 
                    Location={location.state.location}
                    Date={location.state.startDate}
                    Guest={location.state.guestNum}
                />
            </main>
        </>
    )
}

export default SearchResult;
