import { Link} from 'react-router-dom';
import './WishItem.css';

const WishItem  = ({
    wish
}) => {
    return (

        <li className="wishCard">
            <h4>{wish.title}</h4>
            <p className="text">{wish.description}</p>
            <p>Submitted by: {wish.authorId}</p>
            <p className="votes"><img src="heart.png" alt="heart"></img></p><p className="centered">42</p>
            <button type="button">+ 1</button>
            <Link className="details" to={`/wish/${wish.id}`}>Details</Link>
        </li>
            /* <div className="statistics">
                <h3 className="wishItem">Statistics:</h3>
                <p>Submitted on: </p>
                <p>Votes given by: </p>
            </div> */
      
    )
}

export default WishItem;