import { useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import santa from '../../../src/santa.gif'

export default function Header() {

    let location = useLocation();

    if (location.pathname !== '/notfound') {
        return (
            <header className={styles.header}>
                <div>
                    <h1>Share your Christmas wish!</h1>
                    <h3>...and see the how it is rated</h3>
                </div>
                <img src={santa} className={styles.logo} alt="logo" />
            </header>
    
        )
    } else {
        return null
    }
}