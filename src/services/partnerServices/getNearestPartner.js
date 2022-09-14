const PartnerModel = require('../../models/Partner')

const getNearestPartner = async ({ lat, long }) => {
  const [nearestPartners, coveragePartners] = await Promise.all([
    PartnerModel.find({
      address: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [lat, long]
          }
        }
      }
    }),
    PartnerModel.find({
      coverageArea: {
        $geoIntersects: {
          $geometry: {
            type: 'Point',
            coordinates: [lat, long]
          }
        }
      }
    })
  ])

  if (!coveragePartners) throw new Error('No partner coverage')

  return nearestPartners.find((nearestPartner) => coveragePartners.find((coveragePartner) => nearestPartner.id === coveragePartner.id))
}

module.exports = getNearestPartner
