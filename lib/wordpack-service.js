const {getFromDB} = require("./db.js");
const collectionName = "wordpack";

const getPopularPacksFixed = async(func) => {
  getFromDB(collectionName, {}, func, 10, {hits:1});
}

const getLatestWordPacks = async(func) => {
  getFromDB(collectionName, {}, func, 50, {date: -1});
}



module.exports = {
  getPopularPacksFixed: (func) => getPopularPacksFixed(func),
  getLatestWordPacks: (func) => getLatestWordPacks(func),
}