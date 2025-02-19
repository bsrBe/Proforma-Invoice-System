const sqlite3 = require('sqlite3').verbose();

// Create a new database file if it doesn't exist
const db = new sqlite3.Database('./proformas.db', (err) => {
  if (err) {
    console.error('Database opening error: ' + err.message);
  } else {
    console.log('Connected to SQLite database');
  }
});

module.exports = db;
