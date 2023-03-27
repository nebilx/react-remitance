import {
  fork,
  all,
  takeEvery,
  takeLatest,
  takeLeading,
} from "redux-saga/effects";

import {
  handleGetUser,
  handleAddUser,
  handleDeleteUser,
  handleUpdateUser,
} from "./handler/user.handler";

import {
  getUserAction,
  addUserAction,
  updateUserAction,
  deleteUserAction,
} from "../../Store/Slice/user.slice";

function* getUserSaga() {
  yield takeLatest(getUserAction.type, handleGetUser);
}
function* addUserSaga() {
  yield takeEvery(addUserAction.type, handleAddUser);
}

function* updateUserSaga() {
  yield takeLeading(updateUserAction.type, handleUpdateUser);
}
function* deleteUserSaga() {
  yield takeEvery(deleteUserAction.type, handleDeleteUser);
}

function* userSaga() {
  yield all([
    fork(getUserSaga),
    fork(addUserSaga),
    fork(updateUserSaga),
    fork(deleteUserSaga),
  ]);
}

export default userSaga;
