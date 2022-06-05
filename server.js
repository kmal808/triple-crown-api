const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const tripleCrown = {
  2021: {
    'mens crown winner': 'john-john florence, hawaii',
    'womans crown winner': 'carrisa moore, hawaii',
    'pipe masters winner': 'john-john florence, hawaii',
    'vans world cup': 'john-john florence, hawaii',
    'hawaiian pro winner': 'unknown'
  },
  2020: {
    'mens crown winner': 'john-john florence, hawaii',
    'womans crown winner': 'carrisa moore, hawaii',
    'pipe masters winner': 'cancelled due to COVID',
    'vans world cup': 'john-john florence, hawaii',
    'hawaiian pro winner': 'cancelled due to COVID'
  },
  2019: {
    'mens crown winner': 'kelly slater, united states',
    'womans crown winner': 'no womans division',
    'pipe masters winner': 'italo ferrira',
    'vans world cup': 'jack robinson, australia',
    'hawaiian pro winner': 'fredericio morias'
  },
  2018: {
    'mens crown winner': 'jesse mendes',
    'womans crown winner': 'no womans division',
    'pipe masters winner': 'gabriel medina',
    'vans world cup': 'ezekial lau, hawaii',
    'hawaiian pro winner': 'joel parkinson'
  },
  2017: {
    'mens crown winner': 'griffin colapinto, united states',
    'womans crown winner': 'no womans divison',
    'pipe masters winner': 'jeremy flores, france',
    'vans world cup': 'conner coffin, hawaii',
    'hawaiian pro winner': 'filipe toledo, brazil'
  },
  2016: {
    'mens crown winner': 'john-john florence, hawaii',
    'womans crown winner': 'no womans division',
    'pipe masters winner': 'michael bourez, tahiti',
    'vans world cup': 'jordy smith, south africa',
    'hawaiian pro winner': 'john-john florence, hawaii'
  },
  2015: {
    'mens crown winner': 'gabriel medina, brazil',
    'womans crown winner': 'no womans division',
    'pipe masters winner': 'adriano de souza',
    'vans world cup': 'mick fanning, australia',
    'hawaiian pro winner': 'wade carmichael'
  },
  2014: {
    'mens crown winner': 'julian wilson',
    'womans crown winner': 'no womans division',
    'pipe masters winner': 'julian wilson',
    'vans world cup': 'michel bourez, tahiti',
    'hawaiian pro winner': 'dusty payne, united states'
  },
  2013: {
    'mens crown winner': 'john-john florence, hawaii',
    'womans crown winner': 'no womans division',
    'pipe masters winner': 'kelly slater, united states',
    'vans world cup': 'ezekial lau, hawaii',
    'hawaiian pro winner': 'michel bourez, tahiti'
  },
  2012: {
    'mens crown winner': 'sebastian zietz, hawaii',
    'womans crown winner': 'no womans division',
    'pipe masters winner': 'joel parkinson, australia',
    'vans world cup': 'adam melling, australia',
    'hawaiian pro winner': 'sebastian zietz, hawaii'
  },
  2011: {
    'mens crown winner': 'john-john florence, hawaii',
    'womans crown winner': 'no womans division',
    'pipe masters winner': 'kieren perrow',
    'vans world cup': 'john-john florence, hawaii',
    'hawaiian pro winner': 'taj burrow, australia'
  },
  2010: {
    'mens crown winner': 'joel parkinson, australia',
    'womans crown winner': 'stephanie gilmore, australia',
    'pipe masters winner': 'jeremy flores',
    'vans world cup': 'raoni monteiro, brazil',
    'hawaiian pro winner': 'joel parkinson, australia'
  },
  2009: {
    'mens crown winner': 'joel parkinson, australia',
    'womans crown winner': 'stephanie gilmore, australia',
    'pipe masters winner': 'taj burrow, australia',
    'vans world cup': 'joel parkinson, australia',
    'hawaiian pro winner': 'joel centeio, hawaii'
  },
  2008: {
    'mens crown winner': 'joel parkinson, australia',
    'womans crown winner': 'stephanie gilmore, australia',
    'pipe masters winner': 'kelly slater, united states',
    'vans world cup': 'cj hobgood, united states',
    'hawaiian pro winner': 'michel bourez, tahiti'
  },
  2007: {
    'mens crown winner': 'bede durbidge, australia',
    'womans crown winner': 'megan abubo, hawaii',
    'pipe masters winner': 'bede durbidge, australia',
    'vans world cup': 'makuakai rothman, hawaii',
    'hawaiian pro winner': 'roy powers, hawaii'
  },
  2006: {
    'mens crown winner': 'andy irons, hawaii',
    'womans crown winner': 'sofia mulanovich, peru',
    'pipe masters winner': 'andy irons, hawaii',
    'vans world cup': 'joel parkinson, australia',
    'hawaiian pro winner': 'andy irons, hawaii'
  },
  2005: {
    'mens crown winner': 'andy irons, hawaii',
    'womans crown winner': 'chelsea hedges, australia',
    'pipe masters winner': 'andy irons, hawaii',
    'vans world cup': 'jake patterson, australia',
    'hawaiian pro winner': 'pancho sullivan, hawaii'
  },
  2004: {
    'mens crown winner': 'sunny garcia, hawaii',
    'womans crown winner': 'no womans divison',
    'pipe masters winner': 'jaime o brien, hawaii',
    'vans world cup': 'andy irons, hawaii',
    'hawaiian pro winner': 'sunny garcia, hawaii'
  },
  2003: {
    'mens crown winner': 'andy irons, hawaii',
    'womans crown winner': 'keala kennelly, hawaii',
    'pipe masters winner': 'andy irons, hawaii',
    'vans world cup': 'joel patterson, australia',
    'hawaiian pro winner': 'troy brooks, australia'
  },
  2002: {
    'mens crown winner': 'andy irons, hawaii',
    'womans crown winner': 'neridah falconer, australia',
    'pipe masters winner': 'andy irons, hawaii',
    'vans world cup': 'joel parkinson, australia',
    'hawaiian pro winner': 'sunny garcia, hawaii'
  },
  2001: {
    'mens crown winner': 'myles padaca, hawaii',
    'womans crown winner': 'no womans division',
    'pipe masters winner': 'bruce irons, hawaii',
    'vans world cup': 'myles padaca, hawaii',
    'hawaiian pro winner': 'andy irons, hawaii'
  },
  2000: {
    'mens crown winner': 'sunny garcia, hawaii',
    'womans crown winner': 'heather clarke, south africa',
    'pipe masters winner': 'rob machado, united states',
    'vans world cup': 'sunny garcia, hawaii',
    'hawaiian pro winner': 'sunny garcia, hawaii'
  },
  1999: {
    'mens crown winner': 'sunny garcia, hawaii',
    'womans crown winner': 'trudy todd, australia',
    'pipe masters winner': 'kelly slater, united states',
    'vans world cup': 'zane harrison, australia',
    'hawaiian pro winner': 'conan hayes, hawaii'
  },
  1998: {
    'mens crown winner': 'kelly slater, united states',
    'womans crown winner': 'layne beachley, australia',
    'pipe masters winner': 'jake patterson, australia',
    'vans world cup': 'shane dorian, hawaii',
    'hawaiian pro winner': 'kaipo jaquias, hawaii'
  },
  1997: {
    'mens crown winner': 'michael rommelse, australia',
    'womans crown winner': 'layne beachley, australia',
    'pipe masters winner': 'john gomes, hawaii',
    'vans world cup': 'michael rommelse, australia',
    'hawaiian pro winner': 'tony ray, australia'
  },
  1996: {
    'mens crown winner': 'kaipo jaquias, hawaii',
    'womans crown winner': 'no womans division',
    'pipe masters winner': 'kelly slater, united states',
    'vans world cup': 'paul patterson, australia',
    'hawaiian pro winner': 'kaipo jaquias, hawaii'
  },
  1995: {
    'mens crown winner': 'kelly slater, united states',
    'womans crown winner': 'no womans division',
    'pipe masters winner': 'kelly slater, united states',
    'vans world cup': 'shane powell, australia',
    'hawaiian pro winner': 'richard lovett, australia'
  },
  1994: {
    'mens crown winner': 'sunny garcia, hawaii',
    'womans crown winner': 'no womans division',
    'pipe masters winner': 'kelly slater, united states',
    'vans world cup': 'sunny garcia, hawaii',
    'hawaiian pro winner': 'chris brown, united states'
  },
  1993: {
    'mens crown winner': 'sunny garcia, hawaii',
    'womans crown winner': 'no womans division',
    'pipe masters winner': 'derek ho, hawaii',
    'vans world cup': 'john gomes, hawaii',
    'hawaiian pro winner': 'sunny garcia, hawaii'
  },
  1992: {
    'mens crown winner': 'sunny garcia, hawaii',
    'womans crown winner': 'no womans division',
    'pipe masters winner': 'kelly slater, united states',
    'vans world cup': 'martin potter, united kingdom',
    'hawaiian pro winner': 'no contest'
  },
  1991: {
    'mens crown winner': 'tom carroll, australia',
    'womans crown winner': 'no womans division',
    'pipe masters winner': 'tom carroll, australia',
    'vans world cup': 'fabio gouveia, brazil',
    'hawaiian pro winner': 'tom curren, united states'
  },
  1990: {
    'mens crown winner': 'derek ho, hawaii',
    'womans crown winner': 'no womans division',
    'pipe masters winner': 'tom carroll, australia',
    'vans world cup': 'derek ho, hawaii',
    'hawaiian pro winner': 'nicky wood, australia'
  },
  1989: {
    'mens crown winner': 'gary elkerton, australia',
    'womans crown winner': 'no womans division',
    'pipe masters winner': 'gary elkerton, australia',
    'vans world cup': 'hans hedemann, hawaii',
    'hawaiian pro winner': 'cheyene horan, australia'
  },
  1988: {
    'mens crown winner': 'derek ho, hawaii',
    'womans crown winner': 'no womans division',
    'pipe masters winner': 'rob page, australia',
    'vans world cup': 'tom carroll, australia',
    'hawaiian pro winner': 'barton lynch, australia'
  },
  1987: {
    'mens crown winner': 'gary elkerton, australia',
    'womans crown winner': 'no womans division',
    'pipe masters winner': 'tom carroll, australia',
    'vans world cup': 'gary elkerton, australia',
    'hawaiian pro winner': 'gary elkerton, australia'
  },
  1986: {
    'mens crown winner': 'derek ho, hawaii',
    'womans crown winner': 'no womans division',
    'pipe masters winner': 'derek ho, hawaii',
    'vans world cup': 'hans hedemann, hawaii',
    'hawaiian pro winner': 'mark richards, australia'
  },
  1985: {
    'mens crown winner': 'michael ho, hawaii',
    'womans crown winner': 'no womans division',
    'pipe masters winner': 'mark occhilupo, australia',
    'vans world cup': 'michael ho, hawaii',
    'hawaiian pro winner': 'mark richards, australia'
  },
  1984: {
    'mens crown winner': 'derek ho, hawaii',
    'womans crown winner': 'no womans division',
    'pipe masters winner': 'joey buran, united states',
    'vans world cup': 'michael ho, hawaii',
    'hawaiian pro winner': 'no contest'
  },
  1983: {
    'mens crown winner': 'michael ho, hawaii',
    'womans crown winner': 'no womans division',
    'pipe masters winner': 'dane kealoha, hawaii',
    'vans world cup': 'michael ho, hawaii',
    'hawaiian pro winner': 'no contest'
  },
  'unknown': {
    'mens crown winner': 'unknown',
    'womans crown winner': 'unknown',
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
  const tripleCrownYear = req.params.year

  if (tripleCrown[tripleCrownYear]) {
  res.json(tripleCrown[tripleCrownYear])
  } else {
    res.json(tripleCrown['unknown'])
  }
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is now running on port ${PORT}!`)
})