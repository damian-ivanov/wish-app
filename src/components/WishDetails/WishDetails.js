import { useParams, useNavigate, useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import * as dataService from '../../services/dataService';
import './WishDetails.css';
import heart from '../../../src/heart.png';
import loader from '../../../src/loader.gif'

export default function WishDetails() {

    const auth = getAuth();
    const navigate = useNavigate();

    const [wish, setWish] = useState({ likesGivenBy: [] });
    const { wishId } = useParams();
    const [isReady, setIsReady] = useState(false);

    var location = useLocation();

    useEffect(() => {
        dataService.getOne(wishId)
            .then(result => {
                setWish(result);
                setIsReady(true);
            })
    }, [wishId]);

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
            .then((result) => setWish({ ...result }))
    };

    const removeLikeHandler = (e) => {
        e.preventDefault();

        dataService.removeLike(wishId, auth.currentUser.email)
            .then((result) => setWish({ ...result }))
    };

    const editHandler = (e) => {
        e.preventDefault();
        navigate(`/edit/${wish.id}`);
    };

        if (isReady === false) {
        return <img src={loader} alt='loading'></img>
    }

    return (
        wish.id === "0" ?
            <h1>No wish with this ID found!</h1> :
            <>
                <div className="wishItem">
                    <div className="wishCard">
                        <h4>{wish.title}</h4>
                        <p className="text">{wish.description}</p>
                        <p>Submitted by: {wish.authorId}</p>
                        <div className="votes"><img src={heart} alt="heart_details"></img><div className="centeredImage">{wish.likes}</div></div>

                        {!auth.currentUser ? <h3><Link to={`/login`} state={{ prevPath: location.pathname }}>Log in to vote</Link></h3> :
                            (wish.likesGivenBy.includes(auth.currentUser.email) ?
                                <><h3>You voted <span style={{ cursor: "pointer", fontSize: "16px" }} onClick={removeLikeHandler}>(revoke)</span></h3></> :
                                <h3 style={{ cursor: "pointer" }} onClick={addLikeHandler}>Vote!</h3>)}

                        {auth.currentUser && auth.currentUser.email === wish.authorId ?
                            <><button type="button" onClick={editHandler}>Edit</button>
                                <button type="button" onClick={deleteHandler}>Delete</button></> :
                            <></>}

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
            </>
    )
}