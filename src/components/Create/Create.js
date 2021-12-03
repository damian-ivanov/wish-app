import { getFirestore } from "firebase/firestore"
import { collection, addDoc } from "firebase/firestore";

export default function Create() {

    const db = getFirestore();

    const submitHandler = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { title, description, isGood } = Object.fromEntries(formData);

        console.log(title, description, Boolean(isGood));

        try {
            const docRef = await addDoc(collection(db, "wishes"), {
                title: title,
                description: description,
                authorId: "test"
            });
          
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }


    }

    return (
        <>
            <h3>Create new wish</h3>
            <form method="POST" onSubmit={submitHandler}>
                <div>
                    <label htmlFor="title">Wish title</label>
                    <input type="text" name="title" id="title" placeholder="example: I want a new car..." />
                </div>

                <div>
                    <label htmlFor="description">Wish description</label>
                    <textarea name="description" id="description" placeholder="example: I want a new car, because..." />
                </div>

                <div>
                    <label htmlFor="isGood">I confirm I was a good boy / girl last year</label>
                    <input type="checkbox" name="isGood" id="isGood" default="unchecked" />
                </div>

                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </>
    )
}