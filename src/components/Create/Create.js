import { useNavigate } from 'react-router-dom';
import { getAuth } from "firebase/auth";
import * as dataService from '../../services/dataService';

export default function Create() {

    const auth = getAuth();
    const navigate = useNavigate();

    var imageUrl;

    const uploadHandler = async (e) => {
        let button = document.getElementById('create');
        button.disabled=true;
        button.innerHTML= "Upload in progress";

        imageUrl = await dataService.uploadImage(e.target.files[0]);

        document.getElementById('create').innerHTML= "Create";
        button.disabled = false;
    }



    const submitHandler = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let {title, description} = Object.fromEntries(formData);

        dataService.createWish(title, description, auth.currentUser.email, imageUrl)
            .then(() => {
                navigate('/');
            });
    }

    return (
        <>
            <h1>Create a new wish</h1>
            <form className="form" method="POST" onSubmit={submitHandler}>
                <div className="formField">
                    <label htmlFor="title">Wish title:</label>
                    <input type="text" name="title" id="title" required minLength={3} maxLength={30} placeholder="example: A new car..." />
                </div>
               
                <div className="formField">
                    <label htmlFor="description">Why you want it?</label>
                    <textarea name="description" id="description" rows="10" cols="35" required minLength={3} maxLength={500} placeholder="example: I want a new car, because..." />
                </div>

                <div className="formField">
                    <label htmlFor="image">Choose wish image:</label>
                    <input type="file" id="image" name="image" accept="image/png, image/jpeg" required  onChange={uploadHandler} />
                </div>

                <div className="formField">
                    <label htmlFor="isGood">I confirm I was a good boy / girl last year</label>
                    <input type="checkbox" name="isGood" id="isGood" required default="unchecked" style={{width: "35px", height: "35px", marginTop: "20px"}}/>
                </div>

                <div className="formButton">
                    <button id='create'>Create</button>
                </div>
            </form>
        </>

        
    )
}