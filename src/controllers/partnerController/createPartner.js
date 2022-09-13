const partnerServices = require('../../services/partnerServices')

const createPartner = async (partnerParams) => {
  return partnerServices.createPartner(partnerParams)
}

module.exports = createPartner
