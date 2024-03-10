import express from 'express';
import route from './routes/route.js';
import connectDB from './db/connectDB.js';
import path from 'path';
import bodyParser from 'body-parser';

const app=express();
const port=process.env.PORT||5000;
const DATABASEURL = process.env.DATABASE_URL|| 'mongodb://127.0.0.1:27017/Shwetaportfolio';

//Setup for static files---
app.use(express.static(path.join(process.cwd(), 'public')));

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }))

//Database configuration
connectDB(DATABASEURL);

// setup for ejs engine
app.set('view engine', 'ejs');
app.set('views', './views');

// --Setup for route--
app.use('/', route);


app.listen(port, ()=>{
    console.log(`Server is running at ${port}`);
})