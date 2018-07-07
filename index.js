require('dotenv').config();
const express = require("express");
const app = express();
const path = require("path");
const { getPopularPacksFixed, getLatestWordPacks } = require('./lib/wordpack-service.js');
const { getLanguages } = require('./lib/language-service.js');

app.use(express.static('public'));

//var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/fldb";

//app.use((req, res) => res.sendFile(`${__dirname}/public/index.html`));
app.use('/scripts', express.static(`${__dirname}/node_modules/`));
/*MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created");
    db.close();
})*/
/*MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("test");
    dbo.collection("language").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
    });
})*/

/*app.get('/users/:userId/books/:bookId', function (req, res) {
   // res.send(getLanguages());
   getFromDB("language", {}, function (result) {
    if (result) {
        res.send(result);
    }
   });
});*/

app.get('/api/popularWordpacksFixed', async (req, res) => {
    try {
      const data = await getPopularPacksFixed(function (result) {
          if (result) {
              res.setHeader('Content-Type', 'application/json');
              res.send(result);
          }
      });
    } catch (error) {
      errorHandler(error, req, res);
    }
  });
  
  app.get('/api/getLanguages', async (req, res) => {
    try {
      const data = await getLanguages(function (result) {
          if (result) {
              res.setHeader('Content-Type', 'application/json');
              res.send(result);
          }
      });
    } catch (error) {
      errorHandler(error, req, res);
    }
  });
  app.get('/api/wordpacks', async (req, res) => {
    try {
        const data = await getLatestWordPacks(function (result) {
            if (result) {
                res.setHeader('Content-Type', 'application/json');
                res.send(result);
            }
        });
    } catch (error) {
      errorHandler(error, req, res);
    }
  });
  
//app.get('/', (req, res) => {res.sendFile(path.join(__dirname + "/index.html"))})
app.use((req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.listen(3000 || process.env.PORT, () => console.log('listening to 3000'))