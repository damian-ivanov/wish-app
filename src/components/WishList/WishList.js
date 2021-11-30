import './WishList.css';

export default function WishList () {
    return (
        <>
        <h3>All submitted wishes:</h3>
        <ul className="wishList">
            <li className="wishCard">
                <h4>Title</h4>
                <p className="text">This here is my wish, Pleasse vote for it</p>
                <p>Submitted by: Damian</p>
                <p className="votes"><img src="heart.png" alt="heart"></img></p><p className="centered">42</p>
                <button type="button">+ 1</button>
                <p className="details">details...</p>
            </li>
            <li className="wishCard">
                <h4>Title</h4>
                <p>Submitted by:</p>
                <p>Damian</p>
            </li>
            <li className="wishCard">
                <h4>Title</h4>
                <p>Submitted by:</p>
                <p>Damian</p>
            </li>
            <li className="wishCard">
                <h4>Title2</h4>
                <p>Submitted by:</p>
                <p>Damian</p>
            </li>
        </ul>


        </>
    )
}