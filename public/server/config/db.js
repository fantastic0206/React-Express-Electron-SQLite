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
      `CREATE TABLE notes (
            note_id INTEGER PRIMARY KEY AUTOINCREMENT,
            papperType TEXT,
            papperColor TEXT,
            title TEXT,
            content TEXT
            )`,
      (err) => {
        if (err) {
          // Table already created
          console.log(err);
        } else {
          console.log("create");
          var insert =
            "INSERT INTO notes (papperType, papperColor, title, content) VALUES (?, ?, ?, ?)";
          db.run(insert, ["Plain", "light", "test", "initdata"]);
        }
      }
    );
  }
});

module.exports = db;
