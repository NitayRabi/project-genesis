import * as http from 'http';
//
import { app } from './app';
import { configService, processManagerService } from './services';

const connectionConfig = configService.config.connection;
const port = connectionConfig.port;
const server = http.createServer(app);

// listen on provided ports
server.listen(port);

// add error handler
server.on('error', onError);

// start listening on port
server.on('listening', onListening);

/**
 * Event listener for HTTP server 'error' event.
 */
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(port + 'requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(port + 'is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server 'listening' event.
 */
function onListening() {
    console.log(`Genesis API running on port: ${port}`);
}

/**
 * Process level configuration.
 */
processManagerService.handlePromiseRejections();
processManagerService.handleWarnings();