const PartnerModel = require('../../models/Partner')

const createPartner = async ({ id, tradingName, ownerName, document, coverageArea, address }) => {
  return PartnerModel.create({ id, tradingName, ownerName, document, coverageArea, address })
}

module.exports = createPartner
