import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import { getSingleSpot } from '../../../store/spot';

import "./SpotDetail.css";

function SpotDetail() {
  const sessionUser = useSelector(state => state.session.user);
  const spot = useSelector(state => state.course.list);
  
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleSpot(id));
  }, [dispatch]);

  if (!sessionUser) return <Redirect to="/" />

  return (
    <main className="spot-listing">
      { spot.Images?.map( img => (
        <img src={img.url}/>
      ))}
      <div className="spot-detail-content">
        <h2>{spot.name}</h2>
        <h3>{spot.address}</h3>
        <h3>{spot.city}</h3>
        <h3>{spot.state}</h3>
        <h3>{spot.lat}</h3>
        <h3>{spot.lng}</h3>
        <h3>{spot.price}</h3>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </main>
  );
}

export default SpotDetail;
