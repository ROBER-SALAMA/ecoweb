const path = require('path');

module.exports = {
    // entry points

    entry:
    [
        './src/javaScript/firebaseConfig.js',

        '.src/javaScript/register.js',
       
    ],

    output: {
        path: path.resolve(__dirname,'modules'),
        filename: 'preba.js'
    }
};