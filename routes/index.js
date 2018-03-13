const express = require('express')
const router = express.Router()
const data = require('../data.json')

router.get('/api/getlist', (req, res) => {
  return res.json({
    errno: 0,
    data: data.list
  })
})

router.get('/api/getnav', (req, res) => {
  return res.json({
    errno: 0,
    data: data.nav
  })
})

module.exports = router
