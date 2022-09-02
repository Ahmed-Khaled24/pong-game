const app = require('./app');
const io = require('socket.io');
const configSockets = require('./socket');
const {createServer} = require('http');
const onConnection = require('./socket');

const httpServer = createServer(app);
const socketServer = io(httpServer);

httpServer.listen(3000, ()=>{
    console.log('server is listening on port 3000');
});
configSockets(socketServer);
