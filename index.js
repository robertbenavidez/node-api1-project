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






const PORT = process.envPORT || 4000;

server.listen( PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
