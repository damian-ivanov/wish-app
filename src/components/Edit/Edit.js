import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import * as dataService from '../../services/dataService';

export default function Edit() {

    const auth = getAuth();
    const navigate = useNavigate();
    const [wish, setWish] = useState([]);
    const { wishId } = useParams();

    useEffect(() => {
        dataService.getOne(wishId)
            .then(result => {
                setWish(result);
            })
    }, []);

    const submitHandler = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { title, description } = Object.fromEntries(formData);

        dataService.editWish(title, description, wishId)
            .then(() => {
                navigate(`/wish/${wish.id}`);
            });

    }

    return (
        <>
            <h3>Edit your wish</h3>
            <form method="POST" onSubmit={submitHandler} className="wishItem">
                <li className="wishCard">
                <div>
                    <label htmlFor="title">Wish title:</label>
                    <input type="text" name="title" id="title" className="text" defaultValue={wish.title} />
                    </div>
                    <div>
                    <label htmlFor="title">Wish description:</label>
                    <input type="text" name="description" id="description" className="text" defaultValue={wish.description} />
                    </div>
                    <p>Submitted by: {wish.authorId}</p>
                    <p className="votes"><img src="heart.png" alt="heart"></img><div className="centered">{wish.likes}</div></p>
                    <Link className="details" to={`/wish/${wish.id}`}>Back</Link>
                    <button type="submit" value="Submit">Save</button>
                </li>
            </form>
        </>
    )
}