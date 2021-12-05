import './WishList.css';
import { useEffect, useState } from "react";
import * as dataService from '../../services/dataService';
import WishItem from '../WishItem/WishItem';

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
                        {wishes.map(x => <WishItem key={x.id} wish={x} />)}
                    </ul>
                )
                : <p className="no-wishes">No wishes in the database!</p>
            }
        </>
    )
}

export default WishList;