const express = require('express');
const app = express(); // creates an instance of an express app, an obj

app.listen(3000);

app.use(function(req, res, next){
    //registers some function to run for each incoming request
    // can log here
    console.log('GET / 200');
    // call next, or else your app will be a black hole - receiving requests but never properly responding
    next();
});

// app.use('/special/', function(){
//     console.log('You have reached the special area!);
//     next();
// });

app.get('/', function(req, res){
    res.send('hello!');
});

app.get('/news', function(req, res){
    res.send('this is the news page!');
});
