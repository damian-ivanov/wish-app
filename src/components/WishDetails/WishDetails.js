import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import * as dataService from '../../services/dataService';

export default function WishDetails() {

    const navigate = useNavigate();
    const [wish, setWish] = useState([]);
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

    return (
        <div className="wishItem">
            <div className="wishCard">
                <h4>{wish.title}</h4>
                <p className="text">{wish.description}</p>
                <p>Submitted by: {wish.authorId}</p>
                {/* <p className="votes"><img src="heart.png" alt="heart_details"></img><p className="centered">42</p></p> */}
                <button type="button">+ 1</button>
                <button type="button">Edit</button>
                <button type="button" onClick={deleteHandler}>Delete</button>
            </div>

            <div className="statistics">
                <h3 className="wishItem">Statistics:</h3>
                <p>Submitted on: </p>
                <p>Votes given by: </p>
            </div>
        </div>
    )
}