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
            res.status(500).json({ error: "The users information could not be retrieved." })
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
            res.status.json({  message: "The user with the specified ID does not exist."  })
        })
})

// POST new user

server.post('/api/users', (req, res) => {
    const userData = req.body;

    usersModel
        .insert(userData)
        .then(user => {
            res.status(201).json(user)
        })
        .catch(error => {
            res.status.json({  message: "Unable to add user."  })
        })
})

//

// Update user information

server.put('/api/users/:id', (req, res) => {
    const {id} = req.params
    const changes = req.body

    usersModel
        .update(id, changes)
        .then(user => {
            res.status(201).json(user)
        })
        .catch(error => {
            res.status.json({  message: "Unable to update user."  })
        })
})

// Delete user

server.delete('/api/users/:id', (req, res) => {
    const {id} = req.params;

    usersModel
        .remove(id)
        .then(user => {
            res.json(user)
        })
        .catch(error => {
            res.status.json({  message: "Unable to delete user."  })
        })
})






const PORT = process.envPORT || 4000;

server.listen( PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
