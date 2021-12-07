import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import * as dataService from '../../services/dataService';
import WishList from '../WishList/WishList';

export default function MyProfile () {
    
    const auth = getAuth();
    
    return (
        <WishList />
    )
}