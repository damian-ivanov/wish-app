import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState, useContext } from "react";
import { AuthContext } from '../../contexts/AuthContext';
import * as dataService from '../../services/dataService';

export default function Edit() {

    const navigate = useNavigate();
    const [wish, setWish] = useState([]);
    const { user } = useContext(AuthContext);
    const { wishId } = useParams();

    useEffect(() => {
        dataService.getOne(wishId)
            .then(result => {
                setWish(result);
            })
    }, [wishId]);

    var imageUrl;

    const uploadHandler = async (e) => {
        imageUrl = await dataService.uploadImage(e.target.files[0]);
    }

    const remove = async (e) => {
        document.getElementById('currentImage').style.display = 'none';
        document.getElementById('uploadNewImage').style.display = 'block';
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        if (!imageUrl) {
            imageUrl = wish.imageUrl;
        }

        let formData = new FormData(e.currentTarget);
        let { title, description } = Object.fromEntries(formData);

        dataService.editWish(title, description, imageUrl, wishId)
            .then(() => {
                navigate(`/wish/${wish.id}`);
            });

    }

    return (

        <>
            {user.email === wish.authorId ?
                (
                    <>
                        <h1>Edit your wish</h1>
                        <form className="form" method="POST" onSubmit={submitHandler}>
                            <div className="formField">
                                <label htmlFor="title">Wish title:</label>
                                <input type="text" name="title" id="title" required minLength={3} maxLength={30} defaultValue={wish.title} />
                            </div>

                            <div className="formField">
                                <label htmlFor="description">Why you want it?</label>
                                <textarea name="description" id="description" rows="10" cols="35" required minLength={3} maxLength={500} defaultValue={wish.description} />
                            </div>

                            <div className="formField" id="currentImage">
                                <label htmlFor="currentImage">Current image:</label><span onClick={remove}>(remove)</span>
                                <img src={wish.imageUrl} alt='wish-pic' />
                            </div>

                            <div className="formField" id="uploadNewImage">
                                <label htmlFor="image">Choose wish image:</label>
                                <input type="file" id="image" name="image" accept="image/png, image/jpeg" onChange={uploadHandler} />
                            </div>

                            <Link className="details" to={`/wish/${wish.id}`}>Back</Link>
                            <button type="submit" value="Submit">Save</button>
                        </form >
                    </>
                ) :
                (
                    <h3>Ooops... it seems this is not your wish. <Link to={`/wish/${wish.id}`}>Go back</Link>.</h3>
                )
            }
        </>
    )
}