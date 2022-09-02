let readyPlayerCount = 0;

function configSockets(socketServer){
    const pongNamespace = socketServer.of('/pong');
    pongNamespace.on('connection', (socket)=> {

        let currentRoom = `room${Math.floor(readyPlayerCount/2)}`;

        socket.on('ready', () => {
            socket.join(currentRoom);
            readyPlayerCount +=1;
            if(readyPlayerCount % 2 === 0)
                pongNamespace.in(currentRoom).emit('startGame', socket.id);
        });

        socket.on('ballMove', (ballData)=>{
            socket.broadcast.emit('ballMove', ballData);
        });

        socket.on('paddleMove', (paddleData)=>{
            socket.broadcast.emit('paddleMove', paddleData);
        })
    });
}

module.exports = configSockets;