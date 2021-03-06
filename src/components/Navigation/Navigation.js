import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import { useState, useEffect } from 'react';
import { AuthProvider, auth } from '../../contexts/AuthContext';
import snowflake from '../../../src/snowflake.png';

const Navigation = () => {

  const [userEmail, setuserEmail] = useState(AuthProvider.email);
  const [closed, setClosed] = useState(false);

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
      <li><NavLink className={({ isActive }) => isActive ? (styles.clicked) : ""} to={'/myprofile'}>My profile</NavLink></li>
      <li><NavLink className={({ isActive }) => isActive ? (styles.clicked) : ""} to={'/create'}>New wish</NavLink></li>
      <li><NavLink className={({ isActive }) => isActive ? (styles.clicked) : ""} to={'/logout'}>Log out</NavLink></li>
      <li><img src={snowflake} alt="snowflake" /></li>
      <li>Welcome, <NavLink to={'/myprofile'}>{userEmail}</NavLink></li>
    </>
  )


  return (

    <>
      {closed ? <></> :
        <div className={styles.banner} id="banner">
          <p><b>Note:</b> this app was developed for educational purposes only. All information you enter is public. Please, don't post any personal information or offensive content.<button onClick={() => setClosed(true)}>Close</button></p>
          
        </div>}

      < nav >
        <ul>
          <li><NavLink className={({ isActive }) => isActive ? (styles.clicked) : ""} to={'/'}>Index</NavLink></li>
          {userEmail ? userNavigation : guestNavigation}
          <li><NavLink className={({ isActive }) => isActive ? (styles.clicked) : ""} to={'/contactme'}>Contact me</NavLink></li>
        </ul>
      </nav >
    </>
  );
}

export default Navigation;