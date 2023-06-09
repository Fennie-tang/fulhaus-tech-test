// Database connection file
const AcronymDataArray = require("./data/acronyms");

const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const dbConn = async () => {
  try {
    const client = await new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("Acronym");
    return db;
  } catch (err) {
    console.log(err);
    throw error;
  }
};

module.exports = dbConn;
