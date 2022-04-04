require("dotenv").config();
const { Pool } = require("pg");

const connectionString =
  process.env.NODE_ENV === "TESTING"
    ? process.env.TEST_DATABASE_URL
    : process.env.DATABASE_URL;
console.log(connectionString);
const pool = new Pool({
  connectionString,
});

module.exports = pool;
