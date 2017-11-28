# oAuth Proxy

A very simple deployable server. At this point it is used to help a group of students hide their YELP oAuth token info.

## Deploying

Heroku is a great place to deploy this server. Use the Deploy button below to get started.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)


This is built to be deployed easily on Heroku, when it is deployed you will need to make sure that you set up the environment variables for the following.

variable | value
---  | ---
CLIENT_ID | Client ID from API
CLIENT_SECRET | Client secret for API
TOKEN_URL | URL from API to generate a token. 

If you are testing this locally you can set up a `.env` file to with these variables in it.

On Heroku you can find these in the settings tab, look for Config Variables, click Reveal Config Vars and add your key value pairs there. 

