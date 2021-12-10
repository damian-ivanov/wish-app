import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, useLocation } from 'react-router-dom';

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
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    return (
        <>
            <h1>Login</h1>
            <form id="login-form" onSubmit={onLoginHandler} method="POST">
                <div>
                    <input type="email" placeholder="Email..." name="email" />
                </div>
                <div>
                    <input type="password" placeholder="Password" name="password" />
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </>
    )
}