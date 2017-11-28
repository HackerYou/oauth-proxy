//Used for .env file
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Content-length, Accept');
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.get('/token', (req,res) => {
    request
        .post(process.env.TOKEN_URL,{
            form: {
                grant_type: 'client_credentials',
                client_id: process.env.CLIENT_ID,
                client_secret: process.env.CLIENT_SECRET
            }
        },(err,response,body) => {
            if(err) {
                res.error({error:err})
            }
            res.send({response:JSON.parse(body)})
        })
});

app.get('/', (req,res) => {
    res.send({
        cool: 'neat'
    });
});

app.listen(process.env.PORT,() => {
    console.log(`App listening on port ${process.env.PORT}`);
});
