class DoctorService {
    constructor({ doctorRepository }) {
        this.doctorRepository = doctorRepository
    }
    async getAll() {
        return this.doctorRepository.getAll()
    }
    async login(username, password) {
        return this.doctorRepository.login(username, password)
    }
    async getDoctorsByCategory(category) {
        return this.doctorRepository.getDoctorsByCategory(category)
    }
}

class PasienService {
    constructor({ pasienRepository }) {
        this.pasienRepository = pasienRepository
    }
    async getAll() {
        return this.pasienRepository.getAll()
    }
    async getUser(user_id) {
        return this.pasienRepository.getUser(user_id)
    }
    async login(username, password) {
        return this.pasienRepository.login(username, password)
    }
    async register(payload) {
        return this.pasienRepository.register(payload)
    }
}

class HistoryService {
    constructor({ historyRepository }) {
        this.historyRepository = historyRepository
    }
    async getAll() {
        return this.historyRepository.getAll()
    }
    async getHistoryByUserID(user_id) {
        return this.historyRepository.getHistoryByUserID(user_id)
    }
    async save(payload) {
        this.historyRepository.save(payload)
    }
}

class RegisteredService {
    constructor({ registeredRepository }) {
        this.registeredRepository = registeredRepository
    }
    async getUserRegistered(doctor_id, user_id) {
        return this.registeredRepository.getUserRegistered(doctor_id, user_id)

    }
    async addUserRegisteredIntoDoctor(doctor_id, user_id) {
        return this.registeredRepository.addUserRegisteredIntoDoctor(doctor_id, user_id)
    }
}

export default {
    DoctorService: (repository) => new DoctorService(repository),
    PasienService: (repository) => new PasienService(repository),
    HistoryService: (repository) => new HistoryService(repository),
    RegisteredService: (repository) => new RegisteredService(repository)
}