const {getFromDB} = require("./db.js");
const collectionName = "language";

const get = async(callback) => {
  getFromDB(collectionName, {}, callback, 0, {name: 1});
}

module.exports = {
  getLanguages: (callback) => get(callback),
}