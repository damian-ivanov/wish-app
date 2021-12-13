import { useEffect, useState } from "react";
import * as dataService from '../../services/dataService';
import WishItem from '../WishItem/WishItem';
import loader from '../../../src/loader.gif';
import styles from './WishList.module.css';

const WishList = () => {

    const [wishes, setWishes] = useState([]);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        dataService.getAll()
            .then(result => {
                setWishes(result);
                setIsReady(true);
            })
    }, []);

    const sort = (e) => {
        e.preventDefault();

        let sorted;

        switch (e.target.id) {
            case 'mostLikes':
                sorted = wishes.sort((a, b) => b.likes - a.likes);
                break;
            case 'newest':
                sorted = wishes.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
            case 'oldest':
                sorted = wishes.sort((a, b) => new Date(a.date) - new Date(b.date));
                break;
            case 'leastLikes':
                sorted = wishes.sort((a, b) => a.likes - b.likes);
                break;
            default:
                break;
        }

        (async function () {
            setWishes([...sorted]);
        })();
    };

    if (isReady === false) {
        return <img src={loader} alt='loading'></img>
    }

    return (
        <>
            <h3>All submitted wishes:</h3>
            <div>Order by: 
                <button id="mostLikes" className={styles.button} onClick={sort}>Most liked</button>
                <button id="leastLikes" style={{ cursor: "pointer" }} onClick={sort}>Least liked</button>
                <button id="newest" style={{ cursor: "pointer" }} onClick={sort}>Newest</button>
                <button id="oldest" style={{ cursor: "pointer" }} onClick={sort}>Oldest</button>
            </div>
            {wishes.length > 0
                ? (

                    <ul className={styles.wishList}>
                        {wishes.map(x => <WishItem key={x.id} wish={x} />)}
                    </ul>
                )
                : <h3>No wishes in the database!</h3>
            }
        </>
    )
}

export default WishList;