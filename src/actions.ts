import { createAction } from 'redux-act';

import { LoginInfo } from './models/LoginInfo';
import { Message } from './models/Message';
import { UserInfo } from './models/UserInfo';

// Dispatched when the user signs-in
// This will:
// (a) Trigger a change in the app reducer
// (b) Notify the server about a login
export const login = createAction<LoginInfo>('login');

// Dispatched once all past messages have been fetched.
// This will trigger a change in the messages reducer (adding all past messages to state)
export const loadMessages = createAction<Message[]>('load messages');

// Dispatched when the user logs-out.
// This will: 
// (a) trigger a change in the app reducer
// (b) will notify the server about a logout
export const logout = createAction('logout');

// Dispatched when the server signals about a new user. 
// This will trigger a change in the users reducer (adding a new user LOCALLY)
export const addUser = createAction<UserInfo>('add user');

// Dispatched when the server signals about a user's logout.
// This will trigger a change in the users reducer (LOCALLY removing the logged-out user)
export const removeUser = createAction<UserInfo>('remove user');

// Dispatched when a new message arrives.
// This will trigger a change in the messages reducer (adding a new message LOCALLY)
export const newMessage = createAction<Message>('new message');

// Dispatched when a message is sent. 
// This will be picked up by the sendMessage saga, which will pass the message via the socket
export const sendMessage = createAction<Message>('send message');