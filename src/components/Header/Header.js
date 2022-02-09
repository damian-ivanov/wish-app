import { useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import santa from '../../../src/santa.gif'

export default function Header() {

    let location = useLocation();

    if (location.pathname !== '/notfound') {
        return (
            <>
            <header className={styles.header}>
                <div>
                    <h1>Share your Christmas wish!</h1>
                    <h3>...and see how it is rated</h3>
                </div>
                <img src={santa} className={styles.logo} alt="logo" />
                <p>Gif source: <a href="https://tenor.com/view/sports-sportsmanias-emoji-animated-emojis-merry-christmas-gif-19449254" target="_blank" rel="noreferrer">Tenor</a></p>
            </header>
            </>
        )
    } else {
        return null
    }
}