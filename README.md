# Chat app

This example uses React, React-Redux, Redux-Saga and SocketIO.

## Design overview

### Flow

- To enable real-time messaging, we are using a socket between the server and the clients. 
- We also use a single HTTP call to retrieve all past messages.
- The server simply holds (in memory) a list of users and messages, and responds to socket events. (Should be added: an API to support the retrieval of all part messages).

### Structure

We use the smart/dumb component architecture. UI components are wrapped by Redux containers. These containers are connected directly to the redux store.
This creates a sharp separation between state and UI ("dumb" components can be reused in other context).

As a rule of thumb, each "dumb" UI component that consumes state data must be wrapped by a container. 
Also, side effects should never occur outside a Saga context.  

### Redux Saga

Redux Saga allows us to catch dispatched actions and handle them accordingly. It also allows us to handle socket events. 
Another important point - With the use of generators, Redux-saga allows us to write asynchronous code as if it is synchronous, turning complex flows into simple scripts. 

### Reducers
Reducers handle dispatched actions by modifying the state accordingly.

[![Screen-Shot-2021-11-24-at-2-55-37-PM.png](https://i.postimg.cc/mkqkWLXN/Screen-Shot-2021-11-24-at-2-55-37-PM.png)](https://postimg.cc/JHNMbLWG)
