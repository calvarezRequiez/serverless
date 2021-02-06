const express = require('express')
const Orders = require('../models/Orders')

const router = app.Router()

router.get('/', (req, res) => {
    Orders.find()
    .exec()
    .then(x => res.status(200).send(x))
})

router.get('/:id', (req, res) => {
    Orders.findById(req.params.id)
    .exec()
    .then(x => res.status(200).send(x))
})

router.post('/', (req, res) => {
    Orders.create(req.body).then(x => res.status(201).send(x))
})

router.put('/', (req, res) => {
    Orders.findOneAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(204))
})

router.delete('/', (req, res) => {
    Orders.findOneAndDelete(req.params.id)
    .exec()
    .then(() => res.sendStatus(204))
})

module.exports = router