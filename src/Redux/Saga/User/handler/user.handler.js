import { call, put } from "redux-saga/effects";

import { userRequest } from "../requests/user.requests";

function* handleCall(callBack, ...args) {
  try {
    yield* callBack(...args);
  } catch (e) {
    yield put(e.response.data);
  }
}

function* handleGetUser() {
  yield* handleCall(function* (req) {
    const user = yield call(req);
    yield put(user.data);
  }, userRequest.getUser);
}

function* handleAddUser(payload) {
  yield* handleCall(
    function* (req, body) {
      const user = yield call(req, body);
      yield put(user.data);
    },
    userRequest.addUser,
    payload.body
  );
}

function* handleUpdateUser(payload) {
  yield* handleCall(
    function* (req, id, body) {
      const user = yield call(req, id, body);
      yield put(user.data);
    },
    userRequest.updateUser,
    payload.id,
    payload.body
  );
}

function* handleDeleteUser(payload) {
  yield* handleCall(
    function* (req, id) {
      const user = yield call(req, id);
      yield put(user.data);
    },
    userRequest.deleteUser,
    payload.id
  );
}

export { handleGetUser, handleAddUser, handleUpdateUser, handleDeleteUser };
