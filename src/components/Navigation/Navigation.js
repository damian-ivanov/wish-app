import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useState, useEffect } from 'react';

const Navigation = () => {

  const [userEmail, setuserEmail] = useState('');
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setuserEmail(user.email);
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
      <li><NavLink to={'/'} onClick={() => {
        signOut(auth)
          .then(() => {
            console.log("user signed out");
          })
          .catch((error) => {
            console.log("error", error);
          });
      }}
      >Log out</NavLink></li>
      <li><img src="snowflake.png" alt="snowflake"/> Welcome, {userEmail}</li>
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