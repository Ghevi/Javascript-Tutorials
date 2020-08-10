const express = require('express');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const router = express.Router();

const url =
  'mongodb+srv://ghevi:<password>@cluster0-agcui.mongodb.net/locations?retryWrites=true&w=majority';

const client = new MongoClient(url);

const locationStorage = {
  locations: [],
};

router.post('/add-location', (req, res, next) => {
  // const id = Math.random();

  client.connect(function (err, client) {
    const db = client.db('locations');

    // Insert a single document
    db.collection('user-locations').insertOne(
      {
        // id: id,
        address: req.body.address,
        coords: { lat: req.body.lat, lng: req.body.lng },
      },
      function (err, r) {
        // if (err) {}
        res.json({ message: 'Stored location!', locId: r.insertedId });
      }
    );
  });

  // locationStorage.locations.push({
  //   id: id,
  //   address: req.body.address,
  //   coords: { lat: req.body.lat, lng: req.body.lng },
  // });
});

router.get('/location/:lid', (req, res, next) => {
  const locationId = req.params.lid;

  client.connect(function (err, client) {
    const db = client.db('locations');

    // Find a single document
    db.collection('user-locations').findOne(
      {
        _id: new mongodb.ObjectID(locationId),
      },
      function (err, doc) {
        if (!doc) {
          return res.status(404).json({ message: 'Not found!' });
        }

        res.json({ address: doc.address, coordinates: doc.coords });
      }
    );
  });

  // const location = locationStorage.locations.find((loc) => {
  //   return loc.id === locationId;
  // });
});

module.exports = router;
