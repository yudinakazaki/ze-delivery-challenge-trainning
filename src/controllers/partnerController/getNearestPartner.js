const partnerServices = require('../../services/partnerServices')

const getNearestPartner = async ({ lat, long }) => {
  return partnerServices.getNearestPartner({ lat, long })
}

module.exports = getNearestPartner
