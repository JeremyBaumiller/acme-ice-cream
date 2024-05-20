const express = require("express");
const pg = require("pg");

const app = express();

const { Client } = pg;
const client = new Client(
  process.env.DATABASE_URL || "postgress://localhost/acme_ice_cream_db"
);

const init = async () => {
  await client.connect();
  console.log("connected to database");

  let SQL = ``;
  await client.query(SQL);
  console.log("tables created");

  SQL = ``;
  await client.query(SQL);
  console.log("tables created");
};

init();
