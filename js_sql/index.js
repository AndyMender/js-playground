const sqlite3 = require('sqlite3');

function printQueryResults(rows) {
    console.log(rows);
}

// Create or load existing database file
const db = new sqlite3.Database('./db.sqlite');

// Non-query SQL commands
db.run(
    'CREATE TABLE IF NOT EXISTS TemperatureData (id INTEGER PRIMARY KEY AUTOINCREMENT, location TEXT, year INT, temp_avg REAL)',
    (error) => {
        if(error) throw error;
    }
);

const newRow = {
  location: 'Istanbul, Turkey',
  year: 1976,
  avgTemp: 13.35
}

db.run(
    'INSERT INTO TemperatureData (location, year, temp_avg) VALUES ($location, $year, $avgTemp)',
    {
        $location: newRow.location,
        $year: newRow.year,
        $avgTemp: newRow.avgTemp
    },
    function (error) {
        console.log(this.lastID);
    }
);

// Run full query + handle results in a callback
db.all(
    'SELECT * FROM TemperatureData ORDER BY year;',
    (error, rows) => {
        if (error) {
            // Or log the error and move on
            throw error;
        }
        printQueryResults(rows);
    }
);

// Limited single row query
db.get(
    'SELECT * FROM TemperatureData WHERE year=1989',
    (error, row) => {
        if (error) {
            throw error;
        }
        printQueryResults(row);
    }
);

const ids = [1, 25, 45, 100, 360, 382];

// Single row query using a query placeholder
for (const id of ids) {
    console.log(id);

    db.get(
        'SELECT * FROM TemperatureData WHERE id=$id',
        {
            $id: id
        },
        (error, row) => {
            printQueryResults(row);
        }
    );
}
