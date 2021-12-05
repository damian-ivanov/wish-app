import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import * as dataService from '../../services/dataService';
import WishItem from '../WishItem/WishItem';

export default function WishDetails () {

    const [wish, setWish] = useState([]);
    const {wishId} = useParams();

    useEffect(() => {
        dataService.getOne(wishId)
            .then(result => {
                console.log(result)
                setWish(result);
            })
    }, []);

    return (
        <ul>
        <WishItem wish={wish} />
        </ul>
    )
}