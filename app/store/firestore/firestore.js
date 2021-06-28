import { firebase, firestore } from '@nativescript/firebase';

firebase.init()

const doctorCollections = "doctors"
const pasienCollections = "users"
const historyCollections = "history"

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

// getUsersByUsernamePassword is get users by provider username & password
const getCollectionsByEmailPassword = async (collections, username, password) => {
    return firestore.collection(collections)
        .where("email", "==", username)
        .where("password", "==", password).get().then((querySnapshot) => {
            let result;
            querySnapshot.forEach((doc) => {
                const data = doc.data()
                result = data
            })
            return Promise.resolve(result)
        }).catch((err) => {
            return Promise.reject(err)
        })
}

const getCollectionsByUserID = async (collections, user_id) => {
    return firestore.collection(collections)
        .where("user_id", "==", user_id).get().then((querySnapshot) => {
            let arr = []
            querySnapshot.forEach((doc) => {
                const data = doc.data()
                arr.push(data)
            })
            return Promise.resolve(arr)
        }).catch((err) => {
            return Promise.reject(err)
        })

}


class DoctorServiceInFS {
    async getAll() {
        return getCollections(doctorCollections)
    }
    async login(username, password) {
        let result = {}
        try {
            result = await getCollectionsByEmailPassword(doctorCollections, username, password)
        } catch (err) {
            Promise.reject(err)
        }
        return result

    }
}

class PasienServiceInFS {
    async getAll() {
        return getCollections(pasienCollections)
    }

    async login(username, password) {
        let result = {}
        try {
            result = await getCollectionsByEmailPassword(pasienCollections, username, password)
        } catch (err) {
            Promise.reject(err)
        }
        console.log(result)
        return result
    }
}

class HistoryServiceInFS {
    async getAll() {
        return getCollections(historyCollections)
    }
    async getHistoryByUserID(user_id) {
        return getCollectionsByUserID(historyCollections, user_id)
    }
}

export default {
    DoctorServiceInFS: () => new DoctorServiceInFS(),
    PasienServiceInFS: () => new PasienServiceInFS(),
    HistoryServiceInFS: () => new HistoryServiceInFS(),
}