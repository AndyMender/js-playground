const sqlite3 = require('sqlite3');

function printQueryResults(row) {
    console.log(row);
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

// NOTE: "db.run() calls are executed in parallel so it's possible to run into race conditions"
db.run(
    'INSERT INTO TemperatureData (location, year, temp_avg) VALUES ($location, $year, $avgTemp)',
    {
        $location: newRow.location,
        $year: newRow.year,
        $avgTemp: newRow.avgTemp
    }
);

// Run full query + handle results in a callback
console.log("Running a 'db.all()' call...");
db.all(
    'SELECT * FROM TemperatureData ORDER BY year',
    (error, rows) => {
        if (error) {
            // Or log the error and move on
            throw error;
        }
        printQueryResults(rows);
    }
);

// Limited single row query
console.log("Running 'db.get()' call...");
const year = 1989;
db.get(
    'SELECT * FROM TemperatureData WHERE year=$year',
    {
        $year: year
    },
    (error, row) => {
        if (error) {
            throw error;
        }
        console.log(`Results for year ${year}: ${row}`);
        printQueryResults(row);
    }
);

const ids = [1, 25, 45, 100, 360, 382];

// Single row query using a query placeholder
console.log("Running a looped 'db.get()' call...");
for (const id of ids) {
    db.get(
        'SELECT * FROM TemperatureData WHERE id=$id',
        {
            $id: id
        },
        (error, row) => {
            console.log(`Entry for ${id}: ${row}`);
        }
    );
}

// for-each iterations after a SQL query
// NOTE: 1st callback operates on each row, 2nd callback runs after the 1st completes and can be used to operate on aggregated values
console.log("Running a 'db.each()' call...");
db.each(
    'SELECT * FROM TemperatureData',
    (error, row) => {
        if (error) throw error;
        printQueryResults(row);
    }
);

// 'db.serialize()' solves the problem fo race conditions between 'db.run()' calls
