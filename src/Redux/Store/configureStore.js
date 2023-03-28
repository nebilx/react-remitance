import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { allSaga } from "../Saga/index.saga";
import createSagaMiddleware from "redux-saga";
import { slice } from "./index.slice";

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
  user: slice.user,
});

const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(allSaga);

const { dispatch } = store;

export { store, dispatch };
