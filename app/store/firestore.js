import {firestore} from '@nativescript/firebase';

const getCollections = async (collectionName) => {
    return firestore.collection(collectionName).get().then((querySnapshot) => {
        let arr = []
        querySnapshot.forEach((doc) => {
            const data = doc.data()
            arr.push(data)
        });
        return Promise.resolve(arr)
    })
}

export default getCollections