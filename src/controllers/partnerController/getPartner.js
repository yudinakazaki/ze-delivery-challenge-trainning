const partnerServices = require('../../services/partnerServices')

const getPartner = (id) => {
  return partnerServices.getPartner(id)
}

module.exports = getPartner
