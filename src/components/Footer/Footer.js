import styles from './Footer.module.css';

export default function Footer() {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.social}>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className={styles.a}><i className="fab fa-facebook"></i></a>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer" className={styles.a}><i className="fab fa-twitter"></i></a>
                    <a href="https://instagram.com/" target="_blank" rel="noreferrer" className={styles.a}><i className="fab fa-instagram"></i></a>
                    <a href="https://youtube.com/" target="_blank" rel="noreferrer" className={styles.a}><i className="fab fa-youtube"></i></a>
                </div>
                <p>source code: <a href='https://github.com/damian-ivanov/wish-app' rel="noreferrer" target="_blank"><i className="fab fa-github"></i></a></p>
                <p>&copy; 2021 - 2022</p>
            </div>
        </>

    )
}