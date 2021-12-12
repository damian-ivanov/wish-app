import { getFirestore } from "firebase/firestore"
import { collection, getDocs, getDoc, deleteDoc, doc, addDoc, updateDoc, arrayUnion, arrayRemove, query, where } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

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
            imageUrl: wish.data().imageUrl,
            likesGivenBy: wish.data().likes
        }
    } else {
        return { id: "0" }
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
                imageUrl: wish.data().imageUrl,
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



export const uploadImage = async (image) => {

    var imageUrl;
    const storage = getStorage();
    // Create the file metadata
    /** @type {any} */
    const metadata = {
        contentType: 'image/jpeg'
    };

    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, 'images/' + image.name);
    const uploadTask = uploadBytesResumable(storageRef, image, metadata);

    // Listen for state changes, errors, and completion of the upload.
    await uploadTask.on('state_changed',
        (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
            }
        },
        (error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;
                case 'storage/canceled':
                    // User canceled the upload
                    break;

                // ...

                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    break;
            }
        },
        async () => {
            // Upload completed successfully, now we can get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('1 File available at', downloadURL);
            });
        })

    console.log("Final " + imageUrl)

    async function mega () {
        await uploadBytesResumable(storageRef, image, metadata);
        imageUrl = getDownloadURL(ref(storage, 'images/' + image.name))
            
            console.log("Final v2" + imageUrl)
            return imageUrl
    }

    return await mega();

}



export const createWish = async (title, description, authorId, imageUrl) => {

    const db = getFirestore();
    var today = new Date().toLocaleDateString('us-US');

    try {
        var docRef = await addDoc(collection(db, "wishes"), {
            title: title,
            description: description,
            authorId: authorId,
            likes: [],
            imageUrl: imageUrl,
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