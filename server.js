const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let tripleCrown = {
  2021: {
    'mens': 'john-john florence',
    'womans': 'carrisa moore'
  },
  2020: {
    'mens': 'john-john florence',
    'womans': 'carrisa moore'
  },
  2019: {
    'mens': 'kelly slater',
    'womans': 'no womans division'
  },
  2018: {
    'mens': 'jesse mendes',
    'womans': 'no womans division'
  },
  2017: {
    'mens': 'griffin colapinto',
    'womans': 'no womans divison'
  },
  2016: {
    'mens': 'john-john florence',
    'womans': 'no womans division'
  },
  2015: {
    'mens': 'gabriel medina',
    'womans': 'no womans division'
  },
  2014: {
    'mens': 'julian wilson',
    'womans': 'no womans division'
  },
  2013: {
    'mens': 'john-john florence',
    'womans': 'no womans division'
  },
  2012: {
    'mens': 'sebastian zietz',
    'womans': 'no womans division'
  },
  2011: {
    'mens': 'john-john florence',
    'womans': 'no womans division'
  },
  2010: {
    'mens': 'joel parkinson',
    'womans': 'stephanie gilmore'
  },
  2009: {
    'mens': 'joel parkinson',
    'womans': 'stephanie gilmore'
  },
  2008: {
    'mens': 'joel parkinson',
    'womans': 'stephanie gilmore'
  },
  'unknown': {
    'mens': 'unknown',
    'womans': 'unknown'
  }
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
}) 

app.get('/api/:year', (req, res) => {
  const tripleCrownYear = req.params.year.toLowerCase()

  if (tripleCrown[tripleCrownYear]) {
  res.json(tripleCrown[tripleCrownYear])
  } else {
    res.json(tripleCrown['unknown'])
  }
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is now running on port ${PORT}!`)
})