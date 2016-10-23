// THIS SHOULD BE RUN IN A SEPERATE TERMINAL INSTANCE.
// (Pretend it's a Raspberry pi running the script.)

// Import the latest build of the Grow.js library
var GrowInstance = require('./dist/Grow.umd.js');

var grow = new GrowInstance({
    // Add UUID and Token to connect to Grow-IoT
    uuid: null,
    token: null,

    webcomponent: 'test-thing',

    // Properties can be updated by the API
    properties: {
        prop1: {
          type: String,
          value: 'test-thing'
        }
    },

    start: function () {
        console.log('test-thing started');
    },

    testbutton: function () {
        console.log('Test successful.');
    }
});

// Connects by default to localhost:3000
grow.connect();
