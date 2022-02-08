import hat from '../../../src/hat.png';
import styles from './ContactMe.module.css';

export default function ContactMe() {
    return (
        <>
            <div className={styles.contact}>
                <img src={hat} alt="hat" />
                <p>This site was created as a React JS project as part of my "SoftUni" education.</p>
                <p>You can reach me at damian.i.ivanov@gmail.com, and you can see my other projects at <a href="https://github.com/damian-ivanov" rel="noreferrer" target="_blank">Github</a></p>
            </div>
        </>
    )
}