import styles from './Footer.module.css';

export default function Footer() {
    return (
        <>
        <div className={styles.footer}>
        <p>&copy; 2021</p>
        <p>source code: <a href='https://github.com/damian-ivanov/wish-app' rel="noreferrer" target="_blank">Github</a></p>
        </div>
        </>
        
    )
}