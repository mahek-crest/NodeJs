import express from "express";

const app = express()
const port = 4000;
app.use(express.json())

let dummydata = []
let nextId = 1

// add new data 
app.post('/data', (req, res) => {
  const { name } = req.body;
  const newDummy = { id: nextId++, name };
  dummydata.push(newDummy)
  return res.status(201).send(dummydata) // indicates response success for creation 
})

// get all data 
app.get('/data', (req, res) => {
  res.send(dummydata)
  res.status(201).send(dummydata) // indicates response success for creation 
})

// get data by id 
app.get('/data/:id', (req, res) => {
  const dataById = dummydata.filter(data => data.id === parseInt(req.params.id))
  if (!dataById) {
    return res.status(404).send('Data not found')
  }
  return res.status(200).send(dataById)
})

// update data by id
app.put('/data/:id', (req, res) => {
  let dataId = dummydata.find(data => data.id === parseInt(req.params.id))
  if (!dataId) {
    return res.status(404).send('Data not found')
  }

  const { name } = req.body;
  dataId.name = name
  return res.status(200).send(dataId)
})

// delete data by id 
app.delete('/data/:id', (req, res) => {
  let index = dummydata.findIndex(data => data.id === parseInt(req.params.id))
  if (index === -1) {
    return res.status(404).send('Data not found')
  }

  dummydata.splice(index, 1)
  return res.status(204).json('Data deleted succesfully!')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})
