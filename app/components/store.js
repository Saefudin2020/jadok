
const doctorService = {
    fetch() {

    }
}

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++
        }
    },
    actions: {
        fetchDoctors() {
            const a = firebase.firestore().collection("doctors");
            console.log(a)
        }
    }
})