/**
 * Dummy dipake buat MOCK, buat data offline
 */

const DummyPasien =
    [{
        id: 1,
        email: "foo@mailz.com",
        password: "foo"
    }, {
        id: 2,
        email: "pasien@mail.com",
        password: "test"
    }]

const DummyDokter = [{
    id: 1,
    fullname: "Dr. Alexander Cahya",
    description: "",
    experience: 1,
    max_patient: 3,
    with_category_user: "urgent",
    email: "foo@mail.com",
    password: "foo"
}, {
    id: 2,
    fullname: "Dr. Patrick Zorraa",
    description: "",
    experience: 1,
    max_patient: 3,
    with_category_user: "urgent",
    email: "foo@mail.com",
    password: "foo"
}, {
    id: 3,
    fullname: "Dr. Vincent Erlangga",
    description: "",
    experience: 1,
    max_patient: 3,
    with_category_user: "urgent",
    email: "foo@mail.com",
    password: "foo"
}]

const DummyHistory = [{
    user_id: 1,
    doctor_id: 1,
    issue: "belum pernah periksa dokter",
    symptomps: "Batuk sudah 4 minggu"
}]

class DoctorServiceInMem {
    async getAll() {
        return DummyDokter
    }
    async login(username, password) {
        let result = {}
        DummyDokter.forEach((n) => {
            if (n.email === username && n.password === password) {
                result = n
            }
        })
        return result
    }
}

class PasienServiceInMem {
    async getAll() {
        return DummyPasien
    }
    async login(username, password) {
        let result = {}
        DummyPasien.forEach((n) => {
            if (n.email === username && n.password === password) {
                result = n
            }
        })
        return result
    }
}

class HistoryServiceInMem {
    async getAll() {
        return DummyHistory
    }
}

module.exports = {
    DummyDokter,
    DummyPasien,
    DummyHistory,
    DoctorServiceInMem: new DoctorServiceInMem(),
    PasienServiceInMem: new PasienServiceInMem(),
    HistoryServiceInMem: new HistoryServiceInMem(),

}
