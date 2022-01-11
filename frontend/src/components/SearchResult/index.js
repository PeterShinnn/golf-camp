import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
//import { useLocation } from "react-router-dom";

import { getSpots } from '../../store/spot';
import ResultBox from '../ResultBox';
import './SearchResult.css';

function SearchResult() {
    //const location = useLocation(); //Gets the search query prop
    const dispatch = useDispatch();

    const courses = useSelector(state => state.course.list);
    
    useEffect(() => {
        dispatch(getSpots());
    }, [dispatch])

    if (!courses) {
        return null;
    }

    return (
        <>
            <main>
                <div className='container'>
                    <div className='course-card-container'>
                        {courses?.map((course) => (
                            <NavLink key={course.id} to={`/spot/${course.id}`}>
                                <ResultBox Course={course} />
                            </NavLink>
                        ))}
                    </div>
                    <div className='map'>Map</div>
                </div>
            </main>
        </>
    )
}

export default SearchResult;
