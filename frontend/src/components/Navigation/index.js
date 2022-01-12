import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../Login/LoginFormModal';
import SignupFormModal from '../Signup/SignupFormModal';
import SpotFormModal from '../Spots/SpotFormModal';
import * as sessionActions from '../../store/session';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;

  if (sessionUser) {
    sessionLinks = (
      // displays the links when the user is logged in
      <>
        <span>
          <NavLink to="/trips" className="navLinks">Trips</NavLink>
          <NavLink to="/owned" className="navLinks">Your Spots</NavLink>
          <SpotFormModal/>
          <ProfileButton user={sessionUser} />
        </span>
      </>
    );
  } else {
    sessionLinks = (
      // displays the links when the user is logged out 
      <>
        <span>
          <NavLink to="/about" className="navLinks">About</NavLink>
          <Link to="#" className="navLinks" onClick={()=> dispatch(sessionActions.login({ credential:'demo', password:'password' }))}>Demo</Link>
          <LoginFormModal />
          <SignupFormModal />
          {/* <NavLink to="/signup" className="navLinks">Sign Up</NavLink> */}
        </span>
      </>
    );
  }

  return (
    <>
      <nav>
        <div className='nav-bar'>
          <Link to="/" className="logo-link">GOLFCAMP</Link>
          {isLoaded && sessionLinks}
        </div>
      </nav>
    </>
  );
}

export default Navigation;
