const sqlite3 = require('sqlite3');

function printQueryResults(rows) {
    console.log(rows);
}

// Create or load existing database file
const db = new sqlite3.Database('./db.sqlite');

// Run full query + handle results in a callback
// NOTE: For now the table doesn't exist
db.all(
    'SELECT * FROM TemperatureData ORDER BY year;',
    (error, rows) => {
        if (error) {
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

