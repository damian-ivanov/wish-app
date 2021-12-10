import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, useLocation } from 'react-router-dom';

export default function Register() {
    
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state
    const from = state ? state.prevPath : '/';

    const onRegisterHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { email, password } = Object.fromEntries(formData);
        console.log(email, password);

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user.uid);
                navigate(from);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    return (
        <>
            <h1>Register</h1>
           

            <form id="register-form" onSubmit={onRegisterHandler} method="POST">
                <div>
                    <input type="email" placeholder="Email..." name="email" />
                </div>
                <div>
                    <input type="password" placeholder="Password" name="password" />
                </div>
                {/* <div>
                    <input type="password" placeholder="Re-password" name="repassword" />
                </div> */}
                <div>
                    <button>Register</button>
                </div>
            </form>
        </>
    )
}