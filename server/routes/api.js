const router = require('express').Router()
const userModel = require('../database/user.model')


router.get('/', (req, res) => {
    userModel.find().then(users => res.status(200).json(users))
        .catch(err => res.status(400).json({message: err.message || 'Users retrieval failed!'}))
})

router.post('/', (req, res) => {

    userModel.create(req.body).then(() => res.status(200).json(req.body))
        .catch(err => {
            res.status(400).json({message: err.message || 'User creation failed!'})
        })
})

router.put('/:id', (req, res) => {
    userModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(user => res.status(200).json(user))
        .catch(err => res.status(400).json({message: err.message || 'User update failed!'}))
})

router.delete('/:id', (req, res) => {
    userModel.findByIdAndDelete(req.params.id).then(user => res.status(200).json(user))
        .catch(err => res.status(400).json({message: err.message || 'User deletion failed!'}))
})

module.exports = router