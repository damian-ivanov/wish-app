import { getFirestore } from "firebase/firestore"
import { collection, getDocs, getDoc, deleteDoc, doc, addDoc } from "firebase/firestore";

export const getOne = async (wishId) => {

    const db = getFirestore();
    const query = doc(db, "wishes", wishId);

    const wish = await getDoc(query);

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

export const deleteWish = async (wishId) => {

    const db = getFirestore();
    await deleteDoc(doc(db, "wishes", wishId));

    return true;
};

export const createWish = async (title, description, authorId ) => {

    const db = getFirestore();
    
    try {
        const docRef = await addDoc(collection(db, "wishes"), {
            title: title,
            description: description,
            authorId: authorId
        });
      
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }


    return true;
};