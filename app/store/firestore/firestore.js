import { firebase, firestore } from '@nativescript/firebase';

firebase.init()

const doctorCollections = "doctors"
const pasienCollections = "users"
const historyCollections = "history"
const registeredCollections = "registered"

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
const getCollectionsByDoctorID = async (collections, doctor_id) => {
    return firestore.collection(collections)
        .where("doctor_id", "==", doctor_id)
        .get().then((querySnapshot) => {
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

const getCollectionsByCategory = async (collections, category) => {
    return firestore.collection(collections)
        .where("with_category_user", "==", category).get().then((querySnapshot) => {
            let arr = []
            querySnapshot.forEach((doc) => {
                const data = doc.data()
                arr.push(data)
            })
            console.log("CATEGORY : ", category)
            return Promise.resolve(arr)
        }).catch((err) => {
            console.log(err)
            return Promise.reject(err)
        })
}

const addCollections = async (collections, object) => {
    return firestore.collection(collections).add(object)
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
    async getDoctorsByCategory(category) {
        return await getCollectionsByCategory(doctorCollections, category)
    }
}

class PasienServiceInFS {
    async getAll() {
        return getCollections(pasienCollections)
    }
    async getUser(user_id) {
        return getCollectionsByUserID(pasienCollections, user_id)
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
        return await getCollections(historyCollections)
    }
    async getHistoryByUserID(user_id) {
        return await getCollectionsByUserID(historyCollections, user_id)
    }
}

class RegisteredServiceInFS {
    async getUserRegistered(doctor_id) {
        return getCollectionsByDoctorID(registeredCollections, doctor_id)
    }
    async addUserRegisteredIntoDoctor(doctor_id, user_id) {
        return addCollections(registeredCollections, {
            doctor_id,
            user_id
        })
    }
}

export default {
    DoctorServiceInFS: () => new DoctorServiceInFS(),
    PasienServiceInFS: () => new PasienServiceInFS(),
    HistoryServiceInFS: () => new HistoryServiceInFS(),
    RegisteredServiceInFS: () => new RegisteredServiceInFS(),
}