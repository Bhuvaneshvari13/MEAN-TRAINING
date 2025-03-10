// db.js
class Database {
    constructor() {
        if (!Database.instance) {
            this.connection = this.connect();
            Database.instance = this;
        }
        return Database.instance;
    }

    connect() {
        console.log('Connecting to the database...');
        return {}; // Simulate a database connection
    }
}

const instance = new Database();
Object.freeze(instance); // Optional: Prevent modification of the instance

module.exports = instance;