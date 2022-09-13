const mongoose = require('mongoose')

const partnerSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    require: true
  },
  tradingName: {
    type: String,
    required: true
  },
  ownerName: {
    type: String,
    required: true
  },
  document: {
    type: String,
    required: true
  },
  coverageArea: {
    type: {
      type: String,
      required: true
    },
    coordinates: {
      type: Array,
      required: true
    }
  },
  address: {
    type: {
      type: String,
      required: true
    },
    coordinates: {
      type: [String],
      required: true
    }
  }
})

module.exports = mongoose.model('Partner', partnerSchema)
