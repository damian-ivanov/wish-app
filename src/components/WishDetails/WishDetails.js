import { useParams, useNavigate, useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import * as dataService from '../../services/dataService';
import styles from './WishDetails.module.css';
import heart from '../../../src/heart.png';
import loader from '../../../src/loader.gif';

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
                window.scrollTo(0, window.innerHeight / 2);
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

    const deleteConfirmation = function () {
        document.getElementById('confirmDelete').style = "display:inline-block; float: right;";
        document.getElementById('delete').style = "display:none"
    }

    const cancel = function () {
        document.getElementById('confirmDelete').style = "display:none";
        document.getElementById('delete').style = "display:inline-block"
    }

    if (isReady === false) {
        return <img src={loader} alt='loading'></img>
    }

    return (
        wish.id === "0" ?
            <h1>No wish with this ID found!</h1> :
            <>
                <div className={styles.wishItem}>
                    <div className={styles.wishCard}>
                        <h4>{wish.title}</h4>
                        <div className={styles.wishImage}>
                            <img src={wish.imageUrl} alt='wish-pic' />
                        </div>
                        <p className={styles.text}>{wish.description}</p>
                        <p>Submitted by: {wish.authorId}</p>
                        <div className={styles.votes}><img src={heart} alt="heart_details"></img><div className={styles.centeredImage}>{wish.likes}</div></div>

                        {!auth.currentUser ? <h3><Link to={`/login`} state={{ prevPath: location.pathname }}>Log in to vote</Link></h3> :
                            (wish.likesGivenBy.includes(auth.currentUser.email) ?
                                <><h3>You voted <span style={{ cursor: "pointer", fontSize: "16px" }} onClick={removeLikeHandler}>(revoke)</span></h3></> :
                                <h3 style={{ cursor: "pointer" }} onClick={addLikeHandler}>Vote!</h3>)}

                        {auth.currentUser && auth.currentUser.email === wish.authorId ?
                            <><button type="button" onClick={editHandler}>Edit</button>
                                <button type="button" id="delete" onClick={deleteConfirmation}>Delete</button>
                                <span id='confirmDelete' style={{ display: "none" }}>
                                    <button onClick={cancel}>Cancel</button>
                                    <button style={{ backgroundColor: "#E75345", color: "white" }} onClick={deleteHandler}>Confirm deletion</button>
                                </span>
                            </> :
                            <></>}

                    </div>

                    <div className={styles.statistics}>
                        <h3 className={styles.wishItem}>Statistics:</h3>
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