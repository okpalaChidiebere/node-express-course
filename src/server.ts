import express from 'express';
//const express = require('express'); //you  can inport or require the file. Import is a more best practise

const app = express();
const port = process.env.PORT || 8080; // we are saying if there is a port environment vairbale it will use that, otherwise we initialize the default port to listen to manually

// Root URI call
app.get( "/", async ( req, res ) => {
    res.status(200).send( "Hello World" );
  } );

// Start the Server
app.listen( port, () => { //we pass the port variable as first parameter and a callback as second parameter
    console.log( `server running http://localhost:${ port }` );
    console.log( `press CTRL+C to stop server` );
} );