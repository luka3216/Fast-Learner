'use strict';
require("dotenv").config();
const url = process.env.URL;
const MongoClient = require("mongodb").MongoClient;

const get = async(collectionName, querryData, callback, limit = 0, sort = {}) => {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("test");
    dbo.collection(collectionName).find(querryData).limit(limit).sort(sort).toArray(function(err, result) {
    if (err) {
      callback(null);
      throw err;
    }
    callback(result);
    db.close();
    });
  });
}
module.exports = {
  getFromDB: (name, querry, callback, limit, sort) => get(name,querry,callback, limit, sort),
}