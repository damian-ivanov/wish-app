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

    const total = wishes.reduce((a, b) => a + b.likes, 0);

    // useEffect(() => {
    //     dataService.getAll(userEmail)
    //         .then(result => {
    //             setWishes(result);
    //         })
    // }, [userEmail]);

    return (
        <>
            <div className={styles.stats}>
                <div>
                    <h4>Personal statistics:</h4>
                </div>
                <div>
                    <h4>Total wishes submitted:</h4>
                    <p>{wishes.length}</p>
                </div>
                <div>
                    <h4>Total votes received:</h4>
                    <p>{total}
                    </p>
                </div>
            </div>
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