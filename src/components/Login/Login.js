import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

//import { AuthContext } from '../../contexts/AuthContext';

import * as authService from '../../services/authService';

const Login = () => {
    //const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const onLoginHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let password = formData.get('password');

        authService.login(email, password)
            .then((authData) => {
               // login(authData);
               console.log(authData);
                navigate('/dashboard');
            })
            .catch(err => {
                // TODO: show notification
                console.log(err);
            });
    }

    return (
        <section id="login-page" className="login">
            <form id="login-form" onSubmit={onLoginHandler} method="POST">
                <fieldset>
                    <legend>Login Form</legend>
                    <p className="field">
                        <label htmlFor="email">Email</label>
                        <span className="input">
                            <input type="text" name="email" id="email" placeholder="Email" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="password">Password</label>
                        <span className="input">
                            <input type="password" name="password" id="password" placeholder="Password" />
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Login" />
                </fieldset>
            </form>
        </section>
    );
}

export default Login;


// export default function Login () {

    
//         // fetch('http://localhost:3030/jsonstore/collections/books')
//         // .then(res => res.json())
//         // .then(data => console.log(data));        

//         fetch('http://localhost:3030/users/login', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify('peter@abv.bg', '123456')
//         })
//         .then(res => res.json())
//         .then(data => console.log(data));        
    
//     return (
//         <>
        
//         <h1>oh hi!</h1>
//         </>
//     )   
// }