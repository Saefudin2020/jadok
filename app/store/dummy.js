/**
 * Dummy dipake buat MOCK, buat data offline
 */

const DummyPasien = {
    pasien : [{
        id : 1,
        email : "foo@mail.com",
        password : "foo"
    }, {
        id : 2,
        email : "pasien@mail.com",
        password : "test"
    }]
}

const DummyDokter = {
    dokter : [{
        id : 1,
        email : "foo@mail.com",
        password : "foo"
    }, {
        id : 2,
        email : "pasien@mail.com",
        password : "test"
    }]
}

module.exports = {
    DummyDokter, 
    DummyPasien
}