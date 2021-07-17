const moment = require('moment')

module.exports = (birthDate) => {
    return moment().diff(moment(birthDate, 'YYYYMMMDD'), 'years')
}