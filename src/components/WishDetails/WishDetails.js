import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import * as dataService from '../../services/dataService';
import './WishDetails.css';

export default function WishDetails() {

    const auth = getAuth();
    const navigate = useNavigate();
    const [wish, setWish] = useState({likesGivenBy:[]});
    const { wishId } = useParams();

    useEffect(() => {
        dataService.getOne(wishId)
            .then(result => {
                setWish(result);
            })
    }, []);

    const deleteHandler = (e) => {
        e.preventDefault();

        dataService.deleteWish(wishId)
            .then(() => {
                navigate('/');
            });
    };

    const addLikeHandler = (e) => {
        e.preventDefault();

        dataService.addLike(wishId, auth.currentUser.email)
            .then(() => {
                setWish({reload: true})
            });
    };


    const editHandler = (e) => {
        e.preventDefault();

        navigate(`/edit/${wish.id}`);
    };

    return (
        <div className="wishItem">
            <div className="wishCard">
                <h4>{wish.title}</h4>
                <p className="text">{wish.description}</p>
                <p>Submitted by: {wish.authorId}</p>
                <p className="votes"><img src="heart.png" alt="heart_details"></img><p className="centered">{wish.likes}</p></p>
                <button type="button" onClick={addLikeHandler}>+ 1</button>
                <button type="button" onClick={editHandler}>Edit</button>
                <button type="button" onClick={deleteHandler}>Delete</button>
            </div>

            <div className="statistics">
                <h3 className="wishItem">Statistics:</h3>
                <p>Submitted on: {wish.date}</p>
                <p>Votes given by: </p>
                <ul>
                    {wish.likesGivenBy.map(x => <li key={x}>{x}</li>)}                  
                </ul>
            </div>
        </div>
    )
}