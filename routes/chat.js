module.exports = function(io) {
    var app = require('express');
    var router = app.Router();
    var users=[];
    var id=0;
	router.get('/', function(req, res, next) {

	  res.render('chat', { title: 'chat' ,users:users});
	});


    io.on('connection', function(socket) { 
       
	       socket.on('addme',function(username){
			socket.username=username;
			socket.indx=id;
			users[id++]=username;
			socket.emit('firstChat','Hi!',username+' welcome to the chat',users,socket.indx);
			socket.broadcast.emit('newUser','Note',username+' joined chat',users,socket.indx);
		});
		socket.on('sendmsg',function(message){
			io.sockets.emit('chat',socket.username,' '+message);
			
		});
		socket.on('disconnect',function(){
			users[socket.indx]='';
			io.sockets.emit('chat','Note',socket.username+' left the chat');
		});
    });

    return router;
}
