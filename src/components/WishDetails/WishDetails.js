import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import * as dataService from '../../services/dataService';
import WishItem from '../WishItem/WishItem';

export default function WishDetails() {

    const [wish, setWish] = useState([]);
    const { wishId } = useParams();

    useEffect(() => {
        dataService.getOne(wishId)
            .then(result => {
                console.log(result)
                setWish(result);
            })
    }, []);

    return (
        <div className="wishItem">
            <div className="wishCard">
                <h4>{wish.title}</h4>
                <p className="text">{wish.description}</p>
                <p>Submitted by: {wish.authorId}</p>
                <p className="votes"><img src="heart.png" alt="heart"></img><div className="centered">42</div></p>
                <button type="button">+ 1</button>
                <button type="button">Edit</button>
                <button type="button">Delete</button>
            </div>
            <div className="statistics">
                <h3 className="wishItem">Statistics:</h3>
                <p>Submitted on: </p>
                <p>Votes given by: </p>
            </div>
        </div>
    )
}