import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from "react";
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const RequireAuth = () => {

    const { user } = useContext(AuthContext);
    var location = useLocation();

    return user != null ? <Outlet /> : <Navigate to="/login" state={{ prevPath: location.pathname }} />

}

export default RequireAuth;