import Vue from 'nativescript-vue'
import Vuex from 'vuex'
import {settings} from '../const'
import {DummyDokter, DummyPasien} from './dummy'
import getCollections from './firestore'

Vue.use(Vuex)

const PasienService = {
    async init(){
        if(!settings.mock){
            return await getCollections("users")
        }
        return Promise.resolve(DummyPasien.pasien)
    },
    // login(pasien){
        
    // },
    // register(user){}
}

const DokterService = {
    async init(){
        if(!settings.mock){
            return await getCollections("doctors")
        }
        return Promise.resolve(DummyDokter.dokter)
    }
}

export default new Vuex.Store({
    state : {
        isLoggedIn : false,
        isLoaded : false, 
        userLoggedIn : {},
        dokter : [{
            id : "",
            email : "",
            password : ""
        }],
        pasien : [{
            id : "",
            email : "",
            password : ""
        }],
    },
    mutations : {
        savePasien(state, payload){
            state.pasien = payload
        },
        saveDokter(state, payload){
            state.dokter = payload
        },
        saveUserLoggedIn(state, payload){
            state.userLoggedIn = payload
            
        },
        setIsLoaded(state, bool){
            state.isLoaded = bool
        },
        setIsLoggedIn(state, bool){
            state.isLoggedIn = bool
        },
        resetAuth(state){
            state.isLoggedIn = false
            state.userLoggedIn = {}
        }
    },
    actions : {
        // Buat dapetin data pasien 
        async init({commit}){
            PasienService.init().then((data)=>{
                commit('savePasien', data)
            })
            
            DokterService.init().then((data)=>{
                commit("saveDokter", data)
                commit('setIsLoaded', true)
            })
        },
        async checkAuth({commit, state}, payload){
            state.pasien.forEach((n)=>{
                if(n.email === payload.email && n.password === payload.password){
                    commit("saveUserLoggedIn", n)
                    commit("setIsLoggedIn", true)
                }
            })
        },
        // Buat login
        async loginPasien({commit, dispatch, state}, payload){
           await commit("resetAuth")
           await dispatch("checkAuth", payload)
           if(state.isLoggedIn){
               console.log(state)
                return Promise.resolve(payload)
           }  else{
               console.log(state)
            return Promise.reject("Login failed")
           }
        },
        async loginDokter({commit}){

        }
    },
})
