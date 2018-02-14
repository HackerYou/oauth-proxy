# oAuth Proxy

A very simple deployable server. At this point it is used to help a group of students hide their YELP oAuth token info.

## Deploying

Heroku is a great place to deploy this server. Use the Deploy button below to get started.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)


This is built to be deployed easily on Heroku, when it is deployed you will need to make sure that you set up the environment variables for the following.

variable | value
---  | ---
GRANT_TYPE | Defaults to `client_credentials`.
CLIENT_ID | Client ID from API
CLIENT_SECRET | Client secret for API
TOKEN_URL | URL from API to generate a token. 

On Heroku you can find these in the settings tab, look for Config Variables, click Reveal Config Vars and add your key value pairs there. 


### OAuth v1

There is an endpoint in the proxy that allows you to make simple requests.

There are three environment variables you need to configure for this to work.

variable | value
---  | ---
CLIENT_V1_KEY | Client key from API.
CLIENT_V1_SECRET | Client secret for API.
REQUEST_BASE_URL | Base URL for requests to go to. 

`GET /v1`

Making a get request to the `/v1` endpoint with these params will make your request.

parameter | value
---  | ---
url | endpoint you want to go to.
params | Stringified object that allows you to pass any params to the API

Here is an example using `$.ajax`.

```javascript
$.ajax({
    url: 'https://yourapp.herokuapp.com/v1',
    dataType: 'json',
    method: 'GET',
    data: {
        url: '/icons/burger',
        params: JSON.stringify({
            limit: 2
        })
    }
})
```



## Local development

If you are testing this locally you can set up a `.env` file to with the above variables in it. As well as one more for the `PORT`.

variable | value
---  | ---
PORT | The port you would like the app to run on.

This file will look something like this:

```
GRANT_TYPE=client_credentials 
PORT=3000
CLIENT_ID=fasdkfjlakfj39ujafj3laj3
CLIENT_SECRET=38afsdfaf3lkjaff983304jfajlksdg8a9sd8g03aj
TOKEN_URL=https://api.yelp.com/oauth2/token
```