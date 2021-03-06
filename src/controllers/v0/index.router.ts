/**The base route for all routes of our server app
 * if we have other routes we will have to import them here for our app to use them. The two commented line is an example of a way to perform this action
 * This is best practise for arranging your route for server application
 */

import {Router, Request, Response} from 'express'; //returns the three objects from express
//import { FeedRouter } from './feed/routes/feed.router'; //you create the feed.router.ts at /controllers/<version>/feed/routes/feed.router. The /feed usually will contail two folders for model and router.  /model for data model or class
import { NextFunction } from 'connect'; //you dont have to install package for this
import moment from 'moment'; //instal the package

const router: Router = Router(); //an instance of router

//router.use('/feed', FeedRouter); // how to use the feed router will be by using endpoint 'api/v0/feed' then perform the action (GET, POST, etc..). The path 'api/v0' before '/feed' must be used in the endpoint as we specificed in server.ts

//Middleware function
export const logger = (req: Request, res: Response, next: NextFunction) =>{
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()} `); //The will be logged in the npm console 'http://localhost:8080/: 2020-10-03T19:39:50-06:00 '
    return next();
    /**middleware comes in handy when you want to intercept an endpoint connection. eg: you can to check if a user is authorized to perform certain action like POST before they can successfully post*/
};

router.get('/', async (req: Request, res: Response) => {    // adding api/v0 to the root URL will send 'V0' string to the webpage 
    res.send(`V0`);
});

export const IndexRouter: Router = router; //exporting this router variable so that it can be used by any other object or class. Ideally we only use ths variabe in our server.ts