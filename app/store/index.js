import Vue from 'nativescript-vue'
import Vuex from 'vuex'
import { settings } from '../const'
import repository from './repository'
import inmem from './inmem/inmem'
import firestore from './firestore/firestore'

Vue.use(Vuex)
const DoctorService = repository.DoctorService({ doctorRepository: firestore.DoctorServiceInFS() })
const PasienService = repository.PasienService({ pasienRepository: firestore.PasienServiceInFS() })
const HistoryService = repository.HistoryService({ historyRepository: firestore.HistoryServiceInFS() })

export default new Vuex.Store({
    state: {
        isLoggedIn: false,
        isLoaded: false,
        userLoggedIn: {},
        doctorLoggedIn: {},
        dokter: [{
            id: "",
            email: "",
            password: ""
        }],
        pasien: [{
            id: "",
            email: "",
            password: ""
        }],
        history: [{

        }],
    },
    mutations: {
        savePasien(state, payload) {
            state.pasien = payload
        },
        saveDokter(state, payload) {
            state.dokter = payload
        },
        saveUserLoggedIn(state, payload) {
            state.userLoggedIn = payload
        },
        saveDoctorLoggedIn(state, payload) {
            state.doctorLoggedIn = payload
        },
        setIsLoaded(state, bool) {
            state.isLoaded = bool
        },
        setIsLoggedIn(state, bool) {
            state.isLoggedIn = bool
        },
        resetAuth(state) {
            state.isLoggedIn = false
            state.userLoggedIn = {}
        },
        saveHistoryUser(state, payload) {
            state.history = payload
        }
    },
    actions: {
        // Buat dapetin data pasien 
        async init({ commit }) {
            PasienService.getAll().then((data) => {
                commit('savePasien', data)
            })

            DokterService.init().then((data) => {
                commit("saveDokter", data)
                commit('setIsLoaded', true)
            })
        },
        // Buat login Pasien
        async loginPasien({ commit }, payload) {
            // Reset Auth
            await commit("resetAuth")
            const data = await PasienService.login(payload.email, payload.password)
            if (Object.keys(data).length < 1) {
                return Promise.reject("Login failed")
            }
            commit("setIsLoggedIn", true)
            commit("saveUserLoggedIn", data)
            return Promise.resolve(data)
        },
        async loginDokter({ commit }, paylad) {
            await commit("resetAuth")
            const data = await DoctorService.login(paylad.email, paylad.password)
            if (Object.keys(data).length < 1) {
                return Promise.reject("Login failed")
            }
            commit("setIsLoggedIn", true)
            commit("saveDoctorLoggedIn", data)
            return Promise.resolve(data)
        },

        // Used by doctor when logged in 
        async getDataPasienByCategory({ commit, state }, category) {

        },

        async getQueueOfDoctor({ commit, state }, doctorID) {

        },

        async getHistoryMedicalByUser({ commit, state }, userID) {
            try {
                const data = await HistoryService.getHistoryByUserID(userID)
                commit("saveHistoryUser", data)
            } catch (err) {
                console.log(err)
            }

        }
    },
})
