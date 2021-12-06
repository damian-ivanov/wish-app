import { getFirestore } from "firebase/firestore"
import { collection, getDocs, getDoc, deleteDoc, doc, addDoc, updateDoc, arrayUnion } from "firebase/firestore";

export const getOne = async (wishId) => {

    const db = getFirestore();
    const query = doc(db, "wishes", wishId);

    const wish = await getDoc(query);

    if (wish.exists()) {
        return {
            id: wish.id,
            title: wish.data().title,
            description: wish.data().description,
            authorId: wish.data().authorId,
            likes: wish.data().likes.length
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
                authorId: wish.data().authorId,
                likes: wish.data().likes.length
            })
    });

    return result;
};

export const deleteWish = async (wishId) => {

    const db = getFirestore();
    await deleteDoc(doc(db, "wishes", wishId));

    return true;
};

export const addLike = async (wishId, userEmail) => {

    const db = getFirestore();
    const query = doc(db, "wishes", wishId);

    await updateDoc(query, {
        likes: arrayUnion(userEmail)
    });

    return true;
};

export const createWish = async (title, description, authorId) => {

    const db = getFirestore();

    try {
        const docRef = await addDoc(collection(db, "wishes"), {
            title: title,
            description: description,
            authorId: authorId,
            likes: []
        });

        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }


    return true;
};

export const editWish = async (title, description, wishId) => {

    const db = getFirestore();

    const query = doc(db, "wishes", wishId);

    await updateDoc(query, {
        title: title,
        description: description,
    });

    return true;
};