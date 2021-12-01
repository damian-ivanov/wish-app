import {NavLink} from 'react-router-dom';
import './Navigation.css';

export default function Navigation() 
{
    return (
        <nav>
          <ul>
            <li><NavLink className={({ isActive }) => isActive ? "clicked" : ""} to={'/'}>Index</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? "clicked" : ""} to={'/login'}>Log in</NavLink></li>
            <li>Register</li>
            <li>Log out</li>
            <li>My profile</li>
            <li><NavLink className={({ isActive }) => isActive ? "clicked" : ""} to={'/create'}>New wish</NavLink></li>
          </ul>
       </nav>
    )
}