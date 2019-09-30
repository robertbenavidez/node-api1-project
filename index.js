const express = require('express')

const server = express()








const PORT = process.envPORT || 4000;

server.listen( PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
