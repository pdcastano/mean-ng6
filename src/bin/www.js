var app = require('../server/app');
var debug = require('debug')('mean-ng6:server');
var http = require('http');

/**
 * Get port from environment and save it in express app
 */
var port = process.env.PORT || 3000;
app.set('port', port);

/**
 * Create http server
 */
var server = http.createServer(app);

/**
 * Listen on provider port
 */
server.listen(port, '0.0.0.0');
server.on('error',onError);
server.on('listening',onListening);

function onError(error) {
    console.error('Error', error);
}

function onListening() {
    var address = server.address();
    debug('Listening on: ' + address.port);
}