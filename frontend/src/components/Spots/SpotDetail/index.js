import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useParams, useHistory } from 'react-router-dom';
import { getSingleSpot, deleteCourse } from '../../../store/spot';
import SpotEditModal from '../SpotEditModal';

import "./SpotDetail.css";

function SpotDetail() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  const spot = useSelector(state => state.course.spot);
  
  const { id } = useParams();

  useEffect(() => {
    dispatch(getSingleSpot(id));
  }, [dispatch, id]);

  if (!sessionUser) return <Redirect to="/" />

  return (
    <main className="spot-listing">
      { spot.Images?.map( img => (
        <img key={img.url} src={img.url} alt="golf-course-pic"/>
      ))}
      <div className="spot-detail-content">
        <h2>{spot.name}</h2>
        <h3>{spot.address}</h3>
        <h3>{spot.city}</h3>
        <h3>{spot.state}</h3>
        <h3>{spot.lat}</h3>
        <h3>{spot.lng}</h3>
        <h3>{spot.price}</h3>
        <SpotEditModal/>
        <button onClick={() => {
          dispatch(deleteCourse(id))
          history.push('/owned')
          }}>Delete</button>
      </div>
    </main>
  );
}

export default SpotDetail;
