# oAuth Proxy

A very simple deployable server. At this point it is used to help a group of students hide their YELP oAuth token info.

This is built to be deployed easily on heroku, when it is deployed you will need to make sure that you set up the environment variables for the following.

variable | value
---  | ---
CLIENT_ID | Client ID from API
CLIENT_SECRET | Client secret for API
TOKEN_URL | URL from API to generate a token. 

If you are testing this locally you can set up a `.env` file to with these variables in it.

## Deploying

