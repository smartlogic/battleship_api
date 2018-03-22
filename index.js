var express = require('express')
var app = express()

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  next()
})

app.get('/', function (req, res) {
  res.json({routes: { ships: "/ships" } });
})

app.get('/ships', function (req, res) {
  res.json({
    aircraft_carrier: { name: 'Air Craft Carrier', length: 5 },
    battleship: { name: 'Battleship', length: 4 },
    submarine: { name: 'Submarine', length: 3 },
    destroyer: { name: 'Destroyer', length: 3 },
    patrol_boat: { name: 'Patrol Boat', length: 2 }
  });
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
