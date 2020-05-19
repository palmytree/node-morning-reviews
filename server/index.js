const express = require('express')
const app = express()
const ctrl = require('./controllers/controller')
const SERVER_PORT = 4040

app.use(express.json())

app.get('/api/users', ctrl.getUsers)

app.get('/api/users/:user_id', ctrl.getUser)

app.listen(SERVER_PORT, () => console.log(`Server listening on port: ${SERVER_PORT}`))
