import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
//import { useLocation } from "react-router-dom";

import { getSpots } from '../../../store/spot';
import ResultBox from '../../Spots/ResultBox';
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
                    <div className='map'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4705.052440447178!2d-82.02493182943272!3d33.50204091622536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f9cd9fe8a776ed%3A0x519b380162b90517!2sAugusta%20National%20Golf%20Club!5e0!3m2!1sen!2sus!4v1642027357010!5m2!1sen!2sus"
                            width="600px"
                            height="3000px"
                            frameBorder="0"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                            title="map"
                        />
                </div>
            </div>
        </main>
        </>
    )
}

export default SearchResult;
