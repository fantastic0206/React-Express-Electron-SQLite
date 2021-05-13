var sqlite3 = require("sqlite3").verbose();
var md5 = require("md5");

const DBSOURCE = "db.sqlite";

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
    throw err;
  } else {
    console.log("Connected to the SQLite database.");
    db.run(
      `CREATE TABLE user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text, 
            email text UNIQUE, 
            password text, 
            CONSTRAINT email_unique UNIQUE (email)
            )`,
      (err) => {
        if (err) {
          // Table already created
        } else {
          // Table just created, creating some rows
          var insert =
            "INSERT INTO user (name, email, password) VALUES (?,?,?)";
          db.run(insert, ["admin", "admin@example.com", md5("admin123456")]);
          db.run(insert, ["user", "user@example.com", md5("user123456")]);
        }
      }
    );

    db.run(
      `CREATE TABLE notes (
            note_id INTEGER PRIMARY KEY AUTOINCREMENT,
            papperType TEXT,
            papperColor TEXT,
            title TEXT,
            content TEXT,
            imagePath TEXT,
            imageName TEXT
            )`,
      (err) => {
        if (err) {
          // Table already created
        } else {
          var insert =
            "INSERT INTO notes (papperType, papperColor, title, content) VALUES (?, ?, ?, ?, ?, ?)";
          db.run(insert, ["Plain", "#f8f9fa", "test", "initdata"]);
        }
      }
    );
  }
});

module.exports = db;
