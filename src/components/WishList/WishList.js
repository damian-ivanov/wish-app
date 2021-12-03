import './WishList.css';
import { useEffect, useState } from "react";
import * as dataService from '../../services/dataService';

const WishList = () => {

    const [wishes, setWishes] = useState([]);

    useEffect(() => {
        dataService.getAll()
            .then(result => {
                setWishes(result);
            })
    }, []);

    return (
        <>
            <h3>All submitted wishes:</h3>
            {wishes.length > 0
                ? (

                    <ul className="wishList">
                        {wishes.map(wish =>

                            <li className="wishCard">
                                <h4>{wish.title}</h4>
                                <p className="text">{wish.description}</p>
                                <p>Submitted by: {wish.authorId}</p>
                                <p className="votes"><img src="heart.png" alt="heart"></img></p><p className="centered">42</p>
                                <button type="button">+ 1</button>
                                <p className="details">details...</p>
                            </li>
                        )}
                    </ul>
                )
                : <p className="no-wishes">No wishes in the database!</p>
            }
        </>
    )
}

export default WishList;