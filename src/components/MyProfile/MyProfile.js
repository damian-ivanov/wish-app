import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import * as dataService from '../../services/dataService';
import WishItem from '../WishItem/WishItem';
import styles from '../WishList/WishList.module.css';

export default function MyProfile () {
    
    const [wishes, setWishes] = useState([]);
    const auth = getAuth();
    let email = auth.currentUser.email != null ? auth.currentUser.email : "";

    useEffect(() => {
        dataService.getAll(email)
            .then(result => {
                setWishes(result);
            })
    }, [email]);

    return (
        <>
            <h3>My wishes:</h3>
           
            {wishes.length > 0
                ? (
                    <ul className={styles.wishList}>
                        {wishes.map(x => <WishItem key={x.id} wish={x} />)}
                    </ul>
                )
                : <h3>You have not submitted any wishes yet!</h3>
            }
        </>
    )
}