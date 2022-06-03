const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let tripleCrown = {
  2021: {
    'mens': 'john-john florence, hawaii',
    'womans': 'carrisa moore, hawaii',
    'pipe masters winner': 'john-john florence, hawaii',
    'vans world cup': 'john-john florence, hawaii',
    'hawaiian pro winner': 'unknown'
  },
  2020: {
    'mens': 'john-john florence, hawaii',
    'womans': 'carrisa moore, hawaii',
    'pipe masters winner': 'cancelled due to COVID',
    'vans world cup': 'john-john florence, hawaii',
    'hawaiian pro winner': 'cancelled due to COVID'
  },
  2019: {
    'mens': 'kelly slater, united states',
    'womans': 'no womans division',
    'pipe masters winner': 'italo ferrira',
    'vans world cup': 'jack robinson, australia',
    'hawaiian pro winner': 'fredericio morias'
  },
  2018: {
    'mens': 'jesse mendes',
    'womans': 'no womans division',
    'pipe masters winner': 'gabriel medina',
    'vans world cup': 'ezekial lau, hawaii',
    'hawaiian pro winner': 'joel parkinson'
  },
  2017: {
    'mens': 'griffin colapinto, united states',
    'womans': 'no womans divison',
    'pipe masters winner': 'jeremy flores, france',
    'vans world cup': 'conner coffin, hawaii',
    'hawaiian pro winner': 'filipe toledo, brazil'
  },
  2016: {
    'mens': 'john-john florence, hawaii',
    'womans': 'no womans division',
    'pipe masters winner': 'michael bourez, tahiti',
    'vans world cup': 'jordy smith, south africa',
    'hawaiian pro winner': 'john-john florence, hawaii'
  },
  2015: {
    'mens': 'gabriel medina, brazil',
    'womans': 'no womans division',
    'pipe masters winner': 'adriano de souza',
    'vans world cup': 'mick fanning, australia',
    'hawaiian pro winner': 'wade carmichael'
  },
  2014: {
    'mens': 'julian wilson',
    'womans': 'no womans division',
    'pipe masters winner': 'julian wilson',
    'vans world cup': 'michel bourez, tahiti',
    'hawaiian pro winner': 'dusty payne, united states'
  },
  2013: {
    'mens': 'john-john florence, hawaii',
    'womans': 'no womans division',
    'pipe masters winner': 'kelly slater, united states',
    'vans world cup': 'ezekial lau, hawaii',
    'hawaiian pro winner': 'michel bourez, tahiti'
  },
  2012: {
    'mens': 'sebastian zietz, hawaii',
    'womans': 'no womans division',
    'pipe masters winner': 'joel parkinson, australia',
    'vans world cup': 'adam melling, australia',
    'hawaiian pro winner': 'sebastian zietz, hawaii'
  },
  2011: {
    'mens': 'john-john florence, hawaii',
    'womans': 'no womans division',
    'pipe masters winner': 'kieren perrow',
    'vans world cup': 'john-john florence, hawaii',
    'hawaiian pro winner': 'taj burrow, australia'
  },
  2010: {
    'mens': 'joel parkinson, australia',
    'womans': 'stephanie gilmore, australia',
    'pipe masters winner': 'jeremy flores',
    'vans world cup': 'raoni monteiro, brazil',
    'hawaiian pro winner': 'joel parkinson, australia'
  },
  2009: {
    'mens': 'joel parkinson, australia',
    'womans': 'stephanie gilmore, australia',
    'pipe masters winner': 'taj burrow, australia',
    'vans world cup': 'joel parkinson, australia',
    'hawaiian pro winner': 'joel centeio, hawaii'
  },
  2008: {
    'mens': 'joel parkinson, australia',
    'womans': 'stephanie gilmore, australia',
    'pipe masters winner': 'kelly slater, united states',
    'vans world cup': 'cj hobgood, united states',
    'hawaiian pro winner': 'michel bourez, tahiti'
  },
  'unknown': {
    'mens': 'unknown',
    'womans': 'unknown',
    'pipe masters winner': 'unknown',
    'vans world cup': 'unknown',
    'hawaiian pro winner': 'unknown'
  }
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
}) 

app.get('/api', (req, res) => {
  res.json(tripleCrown)
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