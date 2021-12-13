import {Link} from 'react-router-dom';
import styles from './WishItem.module.css';

const WishItem  = ({
    wish
}) => {
    return (

        <li className={styles.wishCard}>
            <h4>{wish.title}</h4>
            <div className={styles.wishImage}>
            <img src={wish.imageUrl} alt='wish-pic' />
            </div>
            <p className={styles.text}>{wish.description}</p>
            <p>Submitted by: {wish.authorId}</p>
            <p>Date: {wish.date}</p>
            <div className={styles.votes}><img src="heart.png" alt="heart"></img>
            <div className={styles.centered}>{wish.likes}</div>
            </div>
            <Link className={styles.details} to={`/wish/${wish.id}`}>Details</Link>
        </li>
      
    )
}

export default WishItem;