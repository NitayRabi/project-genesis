const mysql = require('mysql'),
    config = require('config'),
    dbConnection = config.get('config.db');

const connection = mysql.createConnection({
    host: dbConnection.host,
    user: dbConnection.username,
    password: dbConnection.password
});

const dropDb = () => {
    connection.query(`DROP DATABASE ${dbConnection.database}`, (err, result) => {
        console.info(`Dropping ${dbConnection.database}...`);
        if (err) {
            throw err;
        }
        return console.info(`${dbConnection.database} deleted successfully...`);
    });
};

const createDb = () => {
    connection.query(`CREATE DATABASE ${dbConnection.database}`, (err, result) => {
        if (err) {
            try {
                dropDb();
                return createDb();
            } catch(err) {
                console.error('Error while connecting to DB');
                console.error(err);
                process.exit(1);
            }
        }
        console.info(`${dbConnection.database} create successfully...`);
        process.exit(0);
    });
};

connection.connect((err) => {
    if (err) {
        console.error('Error while connecting to DB');
        console.error(err);
        process.exit(1);
    }
    createDb();
});