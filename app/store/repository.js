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
}

class PasienService {
    constructor({ pasienRepository }) {
        this.pasienRepository = pasienRepository
    }
    async getAll() {
        return this.pasienRepository.getAll()
    }
    async login(username, password) {
        return this.pasienRepository.login(username, password)
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
}

export default {
    DoctorService: (repository) => new DoctorService(repository),
    PasienService: (repository) => new PasienService(repository),
    HistoryService: (repository) => new HistoryService(repository)
}