import './WishItem.css';

export default function WishItem() {
    return (

        <div className="wishItem">
            <div className="wishCard">
                <h4>Damian's wish</h4>
                <p className="text">This here is my wish, Pleasse vote for it</p>
                <p>Submitted by: Damian</p>
                <p className="votes"><img src="heart.png" alt="heart"></img><div className="centered">42</div></p>
                <button type="button">+ 1</button>
                <button type="button">Edit</button>
                <button type="button">Delete</button>
            </div>
            <div className="statistics">
                <h3 className="wishItem">Statistics:</h3>
                <p>Submitted on: </p>
                <p>Votes given by: </p>
            </div>
        </div>
    )
}