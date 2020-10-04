import express from 'express';
//const express = require('express'); //you  can inport or require the file. Import is a more best practise
import bodyParser from 'body-parser';
import { IndexRouter, logger } from './controllers/v0/index.router'; //importing all our routes from index.router.ts

(async () => {
const app = express();
const port = process.env.PORT || 8080; // we are saying if there is a port environment vairbale it will use that, otherwise we initialize the default port to listen to manually

app.use(bodyParser.json());

//Enabling CORS and Should be restricted
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8100");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use('/api/v0/', IndexRouter);

//one way to init middleware
//app.use(logger);

// Root URI call
app.get( "/", logger, async ( req, res ) => { //the middle ware function will perform before it sends the string
    res.status(200).send( "/api/v0/" );
  } );

// Start the Server
app.listen( port, () => { //we pass the port variable as first parameter and a callback as second parameter
    console.log( `server running http://localhost:${ port }` );
    console.log( `press CTRL+C to stop server` );
} );

})(); //(async () => { } )();