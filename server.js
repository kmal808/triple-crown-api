const express = require('express')
const app = express()
const PORT = 8000

const tripleCrown = {
  2021: {
    'event': 'haleiwa pro',
    'winner': 'john-john florence'
  },
  2020: {
    'event': 'pipe pro',
    'winner': "jamie o'brien"
  },
  'unknown': {
    'event': 'unknown',
    'winner': 'unknown'
  }
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
}) 

app.get('/api:year', (req, res) => {
  const tripleCrownYear = req.params.year.toLowerCase()
  
  if (tripleCrown[tripleCrownYear]) {
  res.json(tripleCrown[tripleCrownYear])
  } else {
    res.json(tripleCrown['unknown'])
  }
})

app.listen(PORT, () => {
  console.log(`The server is now running on port ${PORT}!`)
})