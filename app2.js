// // app2.js

// const db2 = require('./db');
// console.log(db2.connection); // Output: {} (same instance as db1)

const config = require('./config');
config.apiEndpoint = 'https://api.newurl.com'; // Modifying the config

console.log(config.apiEndpoint); // Output: 'https://api.newurl.com'
