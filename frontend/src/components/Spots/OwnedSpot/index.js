import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { getSpots } from '../../../store/spot';
import EmptySpot from './EmptySpot';
import ResultBox from '../ResultBox';
import './OwnedSpot.css';

function OwnedSpots() {
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);
    const courses = useSelector(state => state.course.list.filter(e => e?.userId === sessionUser.id));

    let spotLoaded;
    
    useEffect(() => {
        dispatch(getSpots());
    }, [dispatch]);

    if (!sessionUser) return <Redirect to="/" />
    if(courses.length){
        spotLoaded = (
            <>
                {courses?.map((course) => (
                    <NavLink key={course.id} className="owned-grid-item"  to={`/owned/spot/${course.id}`}>
                        <ResultBox Course={course} />
                    </NavLink>
                ))}
            </>
        )
    } else {
        spotLoaded = (
            <>
                <EmptySpot />
            </>
        )
    }

    return (
        <main>
            <div className='owned-spot-container'>
                <div className='owned-spot-course-card-container'>
                    {spotLoaded}
                </div>
            </div>
        </main>
    )
};

export default OwnedSpots;
