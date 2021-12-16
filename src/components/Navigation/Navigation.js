import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
//import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react';
import { AuthProvider, auth } from '../../contexts/AuthContext';
import snowflake from '../../../src/snowflake.png';

const Navigation = () => {

  const [userEmail, setuserEmail] = useState(AuthProvider.email);
  //const auth = getAuth();

  useEffect(() => {
    auth.onAuthStateChanged(AuthProvider => {
      if (AuthProvider) {
        setuserEmail(AuthProvider.email);
      } else {
        setuserEmail(null);
      }
    })
  })



  let guestNavigation = (
    <>
      <li><NavLink className={({ isActive }) => isActive ? (styles.clicked) : ""} to={'/login'}>Log in</NavLink></li>
      <li><NavLink className={({ isActive }) => isActive ? (styles.clicked) : ""} to={'/register'}>Register</NavLink></li>
    </>
  )

  let userNavigation = (
    <>
      <li><NavLink className={({ isActive }) => isActive ? (styles.clicked) : ""} to={'/myprofile'}>MyProfile</NavLink></li>
      <li><NavLink className={({ isActive }) => isActive ? (styles.clicked) : ""} to={'/create'}>New wish</NavLink></li>
      <li><NavLink className={({ isActive }) => isActive ? (styles.clicked) : ""} to={'/logout'}>Log out</NavLink></li>
      <li><img src={snowflake} alt="snowflake"/></li>
      <li>Welcome, {userEmail}</li>
    </>
  )


  return (

    < nav >
      <ul>
        <li><NavLink className={({ isActive }) => isActive ? (styles.clicked) : ""} to={'/'}>Index</NavLink></li>
        {userEmail ? userNavigation : guestNavigation}
      </ul>
    </nav >
  );
}

export default Navigation;