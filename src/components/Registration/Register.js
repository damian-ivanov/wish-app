import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Register() {

    const onRegisterHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { email, password } = Object.fromEntries(formData);
        console.log(email, password);

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("Successfull sign in!")
            })
            .catch((error) => {
                //const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    return (
        <>
            <h1>Register</h1>
            <p class="form-info">Already registered?
                <a href="/login">Login now</a> and have some fun!
            </p>

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
                    <p class="message"></p>
                    <button>Register</button>
                </div>
            </form>
        </>
    )
}