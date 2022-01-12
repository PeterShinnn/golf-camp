import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { getSpots } from '../../../store/spot';
import ResultBox from '../ResultBox';

function OwnedSpots() {
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);
    const courses = useSelector(state => state.course.list.filter(e => e.userId === sessionUser.id));

    
    useEffect(() => {
        dispatch(getSpots());
    }, [dispatch]);

    if (!sessionUser) return <Redirect to="/" />

    return (
        <main>
            <div className='container'>
                <div className='course-card-container'>
                    {courses?.map((course) => (
                        <NavLink key={course.id} to={`/owned/spot/${course.id}`}>
                            <ResultBox Course={course} />
                        </NavLink>
                    ))}
                </div>
            </div>
        </main>
    )
};

export default OwnedSpots;