import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, useLocation, Link } from 'react-router-dom';

export default function Login() {

    const navigate = useNavigate();
    const location = useLocation();

    const state = location.state
    const from = state ? state.prevPath : '/';

    const onLoginHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { email, password } = Object.fromEntries(formData);

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                console.log("Successful log in!")
                navigate(from);
            })
            .catch(() => {
                document.getElementById('message').style.color = 'yellow';
                document.getElementById('message').innerHTML = 'Incorrect email or password';
            });
    }


    return (
        <>
            <h1>Login</h1>
            <Link to={`/register`} state={{ prevPath: from }}><button>...or register</button></Link>
            <form className="form" onSubmit={onLoginHandler} method="POST">
                <div className="formField">
                    <label htmlFor="email">Email:</label>
                    <input type="email" placeholder="Email..." name="email" />
                </div>

                <div className="formField">
                    <label htmlFor="password">Password:</label>
                    <input type="password" placeholder="Password" name="password" />
                </div>
                <span id='message'></span>
                <div className="formButton">
                    <button>Login</button>
                </div>
            </form>
        </>
    )
}