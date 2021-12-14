import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, useLocation } from 'react-router-dom';

export default function Register() {

    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state
    const from = state ? state.prevPath : '/';

    var check = function() {
        if (document.getElementById('password').value ===
          document.getElementById('confirm_password').value) {
          document.getElementById('message').style.color = 'green';
          document.getElementById('message').innerHTML = 'matching';
        } else {
          document.getElementById('message').style.color = 'yellow';
          document.getElementById('message').innerHTML = 'not matching';
        }
      }

    const onRegisterHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { email, password } = Object.fromEntries(formData);

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
     
            <form className="form" onSubmit={onRegisterHandler} method="POST">
                <div className="formField">
                    <label htmlFor="email">Email:</label>
                    <input type="email" required placeholder="Email..." name="email" />
                </div>

                <div className="formField">
                    <label htmlFor="password">Password:</label>
                    <input type="password" required placeholder="Password" name="password" id="password" minLength={6}/>
                </div>

                <div className="formField">
                    <label htmlFor="password">Confirm password:</label>
                    <input type="password" placeholder="Confirm Password" id="confirm_password" required  onKeyUp={check}/>
                </div>
                <span id='message'></span>
                <div className="formButton">
                    <button>Register</button>
                </div>
            </form>
        </>
    )
}