const io = require('socket.io');
const {createServer} = require('http');
const onConnection = require('./socket');
const app = require('./app');

const httpServer = createServer(app);
const socketServer = io(httpServer);

httpServer.listen(3000, ()=>{
    console.log('server is listening on port 3000');
});

socketServer.on('connection', onConnection);