const PartnerModel = require('../../models/Partner')

const getPartner = async (id) => {
  return PartnerModel.findOne({ id })
}

module.exports = getPartner
