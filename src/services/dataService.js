import { getFirestore } from "firebase/firestore"
import { collection, getDocs, getDoc, doc } from "firebase/firestore";

export const getOne = async (wishId) => {

    const db = getFirestore();
    const query = doc(db, "wishes", wishId);
    
    const wish = await getDoc(query);

    console.log("FROM THE QUERY")

    if (wish.exists()) {
        return {
            id: wish.id,
            title: wish.data().title,
            description: wish.data().description,
            authorId: wish.data().authorId
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
                id: wish.id,
                title: wish.data().title,
                description: wish.data().description,
                authorId: wish.data().authorId
            })
    });

    return result;
};