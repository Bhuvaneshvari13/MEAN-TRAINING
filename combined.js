// Define a function
function sayHi() {
    return 'Hi!';
}

// Add to exports

exports.sayHi = sayHi;

// Overwrite module.exports with an object
module.exports = {
    message: 'Welcome!',
    status: 'Active'
};