import notFound from '../../../src/notFound.png'
import styles from './NotFound.module.css';

export default function NotFound() {

    return (

        <div className={styles.notFound}>
            <img src={notFound} alt="not found" />
        </div>
    )
}