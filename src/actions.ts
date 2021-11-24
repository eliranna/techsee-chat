import { createAction } from 'redux-act';

import {LoginInfo} from './models/LoginInfo';

export const login = createAction<LoginInfo>('login');
export const logout = createAction('logout');

export const addUser = createAction('add user');
export const removeUser = createAction('remove user');

export const newMessage = createAction('new message');
export const sendMessage = createAction('send message');