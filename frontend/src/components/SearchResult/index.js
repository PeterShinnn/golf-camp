import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
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
                            <Route path='/spot/:spotId'>
                                <ResultBox key={course.id} Course={course} />
                            </Route>
                        ))}
                    </div>
                    <div className='map'>Map</div>
                </div>
            </main>
        </>
    )
}

export default SearchResult;
