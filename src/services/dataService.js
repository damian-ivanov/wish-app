import { getFirestore } from "firebase/firestore"
import { collection, getDocs, getDoc, deleteDoc, doc, addDoc, updateDoc, arrayUnion, arrayRemove, query, where } from "firebase/firestore";

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
            likes: wish.data().likes.length,
            date: wish.data().date,
            likesGivenBy: wish.data().likes
        }
    } else {
        return { id: "0"}
    }
};

export const getAll = async (userEmail) => {

    const db = getFirestore();
    let q;
    let data;

    if (userEmail) {
        q = query(collection(db, "wishes"), where("authorId", "==", userEmail));
        data = await getDocs(q);
    } else {
        data = await getDocs(collection(db, "wishes"));
    }


    var result = [];

    data.forEach(wish => {
        result.push(
            {
                id: wish.id,
                title: wish.data().title,
                description: wish.data().description,
                authorId: wish.data().authorId,
                likes: wish.data().likes.length,
                date: wish.data().date
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

    return getOne(wishId);
};

export const removeLike = async (wishId, userEmail) => {

    const db = getFirestore();
    const query = doc(db, "wishes", wishId);

    await updateDoc(query, {
        likes: arrayRemove(userEmail)
    });

    return getOne(wishId);
};

export const createWish = async (title, description, authorId) => {

    const db = getFirestore();
    var today = new Date().toLocaleDateString('us-US');

    try {
        const docRef = await addDoc(collection(db, "wishes"), {
            title: title,
            description: description,
            authorId: authorId,
            likes: [],
            date: today
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