import io from 'socket.io-client';
import { eventChannel } from 'redux-saga';
import { fork, take, call, put, cancel } from 'redux-saga/effects';
import {
  login, logout, addUser, removeUser, newMessage, sendMessage
} from './actions';

function connect() {
  const socket = io('http://localhost:3000',{reconnect: true});
  return new Promise(resolve => {
    socket.on('connect', () => {
      resolve(socket);
    });
  });
}

function subscribe(socket) {
  // Here we listen to messages from the socket, and convert them to an event channel of events to be handled.
  // Each event describes a redux action that should be dispatched. 
  return eventChannel(emit => {
    socket.on('users.login', ({ username }) => {
      emit(addUser({ username }));
    });
    socket.on('users.logout', ({ username }) => {
      emit(removeUser({ username }));
    });
    socket.on('messages.new', ({ message }) => {
      emit(newMessage({ message }));
    });
    return () => {};
  });
}

function* read(socket) {
  // Makes sure to read the events and handle them one by one. 
  // Each event describes a redux action that should be dispatched. 
  const channel = yield call(subscribe, socket);
  while (true) {
    let action = yield take(channel);
    yield put(action);
  }
}

function* write(socket) {
  // Here we listen to sendMessage actions. 
  // When an sendMessage action is being picked-up, we propagate the message to the server.
  while (true) {
    const { payload } = yield take(`${sendMessage}`);
    socket.emit('message', payload);
  }
}

function* handleIO(socket) {
  yield fork(read, socket);
  yield fork(write, socket);
}

function* flow() {
  // The general flow. 
  // Upon Login, connect to the socket and notify the server about the new user. 
  // Then, handle all read/write tasks.
  // Finally, upon logout, kill all read/write tasks and notify the server. 
  while (true) {
    let { payload } = yield take(`${login}`);
    const socket = yield call(connect);
    socket.emit('login', { username: payload.username });
    const task = yield fork(handleIO, socket);
    let action = yield take(`${logout}`);
    yield cancel(task);
    socket.emit('logout');
  }
}

export default function* rootSaga() {
  yield fork(flow);
}