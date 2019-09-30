const express = require('express')

const usersModel = require('./data/db.js')


const server = express()

server.use(express.json())



//GET all users

server.get('/api/users', (req, res) => {
    usersModel
        .find()
        .then(users => {
            res.send(users)
        })
        .catch(error => {
            res.send(error)
        })
})

// GET user by ID

server.get('/api/users/:id', (req, res) => {
    const {id} = req.params;

    usersModel
        .findById(id)
        .then(user => {
            res.json(user)
        })
        .catch(error => {
            res.send(error)
        })
})






const PORT = process.envPORT || 4000;

server.listen( PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
