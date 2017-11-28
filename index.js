//Used for .env file
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

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
            res.send({response:body})
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
