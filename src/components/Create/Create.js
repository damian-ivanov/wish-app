import { useNavigate } from 'react-router-dom';
import { getAuth } from "firebase/auth";
import * as dataService from '../../services/dataService';

export default function Create() {

    const auth = getAuth();
    const navigate = useNavigate();

    var imageUrl;

    const uploadHandler = async (e) => {
        imageUrl = await dataService.uploadImage(e.target.files[0]);
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
            <h3>Create new wish</h3>
            <form method="POST" onSubmit={submitHandler}>
                <div>
                    <label htmlFor="title">Wish title</label>
                    <input type="text" name="title" id="title" required minLength={3} maxLength={30} placeholder="example: A new car..." />
                </div>
                <br></br>
                <div>
                    <label htmlFor="description">Why you want it?</label>
                    <textarea name="description" id="description" rows="10" cols="35" required minLength={3} maxLength={500} placeholder="example: I want a new car, because..." />
                </div>
                <div>
                    <label htmlFor="image">Choose wish image:</label>
                    <input type="file" id="image" name="image" accept="image/png, image/jpeg" onChange={uploadHandler} />
                </div>
                <div>
                    <label htmlFor="isGood">I confirm I was a good boy / girl last year</label>
                    <input type="checkbox" name="isGood" id="isGood" required default="unchecked" />
                </div>

                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </>
    )
}