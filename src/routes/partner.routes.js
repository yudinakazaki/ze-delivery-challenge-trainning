const express = require('express')
const { partnerController } = require('../controllers')

const router = express.Router()

router.get('/', async (req, res) => {
  const { lat, long } = req.query

  const apiResponse = await partnerController.getNearestPartner({ lat, long })

  return res.status(200).json(apiResponse)
})

router.get('/:id', async (req, res) => {
  const { id } = req.params

  const apiResponse = await partnerController.getPartner(id)

  return res.status(200).json(apiResponse)
})

router.post('/', async (req, res) => {
  const partnerParameters = req.body
  const apiResponse = await partnerController.createPartner(partnerParameters)

  return res.status(200).json(apiResponse)
})

module.exports = router
