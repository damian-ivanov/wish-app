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

    console.log("Begin" + wishes);
    
    const orderByLikes = (e) => {
        e.preventDefault();
        
        const sorted = wishes.sort((a, b) => b.likes - a.likes);
 
        (async function () {
            //const sorted = wishes.sort((a, b) => b.likes - a.likes);
            await setWishes([...sorted]);
          })();

          console.log("End" + wishes);
               
    };

    return (
        <>
            <h3>All submitted wishes:</h3>
            <div>Order by: <span style={{cursor: "pointer"}} onClick={orderByLikes}>Most likes</span></div>
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