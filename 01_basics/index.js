require('dotenv').config()
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/twitter', (req, res) => {
  res.send('mahekkg')
})

app.get('/login', (req, res) => {
  res.send('<h1>Please Login</h1>')
})

app.get('/node', (req, res) => {
  res.send('<h2>NodeJs</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
}) 