//Used for .env file
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const qs = require('qs');

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
                grant_type: process.env.GRANT_TYPE || 'client_credentials',
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

app.get('/v1',(req,res) => {
    let URL = req.query.url;
    const params = req.query.params;

    if(params) {
        URL = `${URL}?${qs.stringify(JSON.parse(params))}`
    }

    if(URL[0] === '/') {
        URL = URL.substring(1,URL.length);
    }

    request.get({
        url: `${process.env.REQUEST_BASE_URL}/${URL}`, oauth:{
            consumer_key: process.env.CLIENT_V1_KEY,
            consumer_secret: process.env.CLIENT_V1_SECRET
    }},(err,r,body) => {
        res.setHeader('Content-Type','application/json');
        res.send(body);
    });
});

app.post('/v1', (req, res) => {

});

app.get('/', (req,res) => {
    res.send({
        cool: 'neat'
    });
});

app.listen(process.env.PORT,() => {
    console.log(`App listening on port ${process.env.PORT}`);
});
