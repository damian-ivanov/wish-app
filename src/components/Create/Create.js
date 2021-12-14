import { useNavigate } from 'react-router-dom';
import { getAuth } from "firebase/auth";
import * as dataService from '../../services/dataService';

export default function Create() {

    const auth = getAuth();
    const navigate = useNavigate();

    var imageUrl;

    const uploadHandler = async (e) => {
        imageUrl = await dataService.uploadImage(e.target.files[0]);
        console.log("IMAGE: " + imageUrl)
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
            <h1>Create new wish</h1>
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
                    <input type="file" id="image" name="image" accept="image/png, image/jpeg" onChange={uploadHandler} />
                </div>

                <div className="formField">
                    <label htmlFor="isGood">I confirm I was a good boy / girl last year</label>
                    <input type="checkbox" name="isGood" id="isGood" required default="unchecked" />
                </div>

                <div className="formButton">
                    <button>Create</button>
                </div>
            </form>
        </>

        
    )
}