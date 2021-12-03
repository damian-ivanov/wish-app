import { getFirestore } from "firebase/firestore"
import { collection, getDocs, getDoc, doc } from "firebase/firestore";

export const getOne = async () => {

    const db = getFirestore();
    const docRef = doc(db, "wishes", "MNrSIFyaAdICFfwxTWjO");

    const docSnap = await getDoc(docRef);

    // let result = Object.values(docSnap.data())
    // return result;

    if (docSnap.exists()) {
        return {
            title: docSnap.data().title,
            description: docSnap.data().description,
            authorId: docSnap.data().authorId
        }
    } else {
        return console.log("No such document!");
    }
};

export const getAll = async () => {

    const db = getFirestore();

    const query = await getDocs(collection(db, "wishes"));

    var result = [];

    query.forEach(wish => {
        result.push(
            {
                title: wish.data().title,
                description: wish.data().description,
                authorId: wish.data().authorId
            })
    });

    return result;
};