require('dotenv').config()
const express = require('express')
const massive = require('massive')
const ctrl = require('./controller')
const app = express()

app.use(express.json())

const {SERVER_PORT, CONNECTING_STRING}= process.env


massive(CONNECTING_STRING).then(db => {
app.set("db". db);
console.log('db up')
})

app.get('/api/houser', ctrl.saveHouses)
app.post('/api/houser', ctrl.sendHouses)

app.listen(SERVER_PORT, () => console.log(`We up`))