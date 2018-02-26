# README

# Welcome to Raven!

Raven is a small RESTful chat WebApp that makes it easy for users to message other users and outputs a log of each of their conversations. The app allows users to:

- have conversations with each other.
- see conversations updated with new messages in real-time, using WebSockets in Rails ActionCable

At a minimum, the program allows a user to message another user and outputs a log of each of their conversations in real-time. All of this is done without an authentication layer. `react-actioncable-provider` is the one major dependency added in the package file-- this is used to connect the Rails ActionCable channels to the React Frontend.

The Raven API is seeded with default data for existing conversations and users. You can find the Rails API in a separate repo here: https://github.com/yassimortensen/Raven-chat-app-api

This React App was created with the command `create-react-app raven-chat-app`. All components and CSS were created and modified manually by the author.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


## GETTING STARTED ##
- All of the dependencies you need to install are in the the package.json file. Run the command `npm install` and `npm start` in your terminal.

- Rails API with seeded data can be found here: https://github.com/yassimortensen/Raven-chat-app-api

## AUTHORS ##

- Yassi Mortensen - https://github.com/yassimortensen
