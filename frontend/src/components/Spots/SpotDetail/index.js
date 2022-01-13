import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
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


  let showBtn;
  if (sessionUser && spot.userId === sessionUser.id) {
    showBtn = (
      <>
        <SpotEditModal />
        <button className="detail-deleteBtn" onClick={() => {
          dispatch(deleteCourse(id))
          history.push('/owned')
        }}>Delete 
        </button>
      </>)
  } else {
    showBtn = (<></>)
  }
  return (
    <main className="spot-listing">
      {spot.Images?.map(img => (
        <img key={img.url} src={img.url} className="spot-detail-img" alt="golf-course-pic" />
      ))}
      <div className="spot-detail-content">
        <h2>{spot.name}</h2>
        <h3>Address: {spot.address}</h3>
        <h3>City: {spot.city}</h3>
        <h3>State: {spot.state}</h3>
        <h3>Latitude: {spot.lat}</h3>
        <h3>Longitude: {spot.lng}</h3>
        <h3>Price: ${spot.price}</h3>
        {showBtn}
      </div>
    </main>
  );
}

export default SpotDetail;
