import './WishList.css';
import { getFirestore } from "firebase/firestore"
import { collection, getDocs, getDoc, doc } from "firebase/firestore";

export default function WishList() {

    const db = getFirestore();

    // // const docRef = doc(db, "wishes", "MNrSIFyaAdICFfwxTWjO");
    // // const docSnap = await getDoc(docRef);

    // // if (docSnap.exists()) {
    // //     console.log("Document data:", docSnap.data().title, docSnap.data().authorId, docSnap.data().description);
    // // } else {
    // //     // doc.data() will be undefined in this case
    // //     console.log("No such document!");
    // // }

    // const querySnapshot = await getDocs(collection(db, "wishes"));
    // querySnapshot.forEach((doc) => {
    //     // doc.data() is never undefined for query doc snapshots
    //     console.log(doc.id, " => ", doc.data().title, doc.data().description, doc.data().authorId);
    // });


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