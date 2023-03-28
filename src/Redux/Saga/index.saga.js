import { all, fork } from "redux-saga/effects";
import userSaga from "./User/user.saga";

export function* allSaga() {
  yield all([fork(userSaga)]);
}
