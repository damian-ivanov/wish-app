import {Link} from 'react-router-dom';
import './WishItem.css';

const WishItem  = ({
    wish
}) => {
    return (

        <li className="wishCard">
            <h4>{wish.title}</h4>
            <p className="text">{wish.description}</p>
            <p>Submitted by: {wish.authorId}</p>
            <p className="votes"><img src="heart.png" alt="heart"></img><div className="centered">{wish.likes}</div></p>
            <button type="button">+ 1</button>
            <Link className="details" to={`/wish/${wish.id}`}>Details</Link>
        </li>
      
    )
}

export default WishItem;