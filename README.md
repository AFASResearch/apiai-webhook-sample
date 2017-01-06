# Experiment with conversational interaction with our bot

For this experiment, we are creating an api.ai instance that connects to our physical bot using webhooks.
The physical bot will connect to this site (hosted in the cloud) using websockets. This website will purely relay
the call received in the webhook to the websocket.

For now, this is just a fork of:

# Api.ai - sample webhook implementation.

This is a really simple webhook implementation that gets Api.ai classification JSON (i.e. a JSON output of Api.ai /query endpoint) and returns a fulfillment response.

More info about Api.ai webhooks could be found here:
[Api.ai Webhook](https://docs.api.ai/docs/webhook)

# Deploy to:
[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

# What does the service do?
It's a simple echo service that takes `resolvedQuery` and `action` fields from the Api.ai JSON reponse and echoes them back in into `speech` and `displayTest` fields in the fulfillment JSON.
