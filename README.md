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