var express = require('express');
var app = express();
var users = require('routes users');
app.use('/users', users);
app.listen(process.env.PORT || 3000, function(){
	console.log('listening');
});