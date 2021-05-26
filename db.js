const Pool = require("pg").Pool;

const pool = new Pool({
    user: "saooamtqctzgxw",
    password: "d79ab53c0b41691f9695a209e0565a9aa1531bd21051e129628108f383de490f",
    host: "ec2-18-214-140-149.compute-1.amazonaws.com",
    port: 5432,
    database: "dfu58nrf1uaoij",
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = pool;