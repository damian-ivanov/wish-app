import { useEffect, useState, useContext } from "react";
import * as dataService from '../../services/dataService';
import { AuthContext } from '../../contexts/AuthContext';
import WishItem from '../WishItem/WishItem';
import styles from '../WishList/WishList.module.css';

export default function MyProfile() {

    const [wishes, setWishes] = useState([]);
    const [userEmail, setuserEmail] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (user) {
            setuserEmail(user.email);
            dataService.getAll(userEmail)
                .then(result => {
                    setWishes(result);
                }, [userEmail]);
        } else {
            setuserEmail(null);
        }
    }, [user, userEmail])

    // useEffect(() => {
    //     dataService.getAll(userEmail)
    //         .then(result => {
    //             setWishes(result);
    //         })
    // }, [userEmail]);

    return (
        <>
            <h3>My wishes:</h3>

            {wishes.length > 0 && userEmail != null
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