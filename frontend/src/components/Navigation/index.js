import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import Slogan from '../Slogan';
import SearchForm from '../SearchForm';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      // displays the links when the user is logged in
      <>
        <span>
          <NavLink to="/trips" className="navLinks">Trips</NavLink>
          <NavLink to="/saves" className="navLinks">Saves</NavLink>
          <NavLink to="/inbox" className="navLinks">Inbox</NavLink>
          <ProfileButton user={sessionUser} />
        </span>
      </>
    );
  } else {
    sessionLinks = (
      // displays the links when the user is logged out 
      <>
        <span>
          <NavLink to="/near" className="navLinks">Near Me</NavLink>
          <NavLink to="/about" className="navLinks">About</NavLink>
          <NavLink to="/earn" className="navLinks">Earn Birdy</NavLink>
          <NavLink to="#" className="navLinks">Demo</NavLink>
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
        <Link exact to="/" className="logo-link">GOLFCAMP</Link>
        {isLoaded && sessionLinks}
      </nav>
      <div className="nav-content">
        <Slogan />
        <SearchForm/>
      </div>
    </>
  );
}

export default Navigation;
