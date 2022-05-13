import { applyMiddleware, createStore } from "redux";
import rootreducer from "./reducers/rootreducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/lib/persistStore";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};
//persist the data of rootreducer
let persistedReducer = persistReducer(persistConfig, rootreducer);
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const configStore = () => {

  let store = createStore(
    persistedReducer,
    applyMiddleware(createLogger(), thunk, sagaMiddleware)
  );

  let persistedStore = persistStore(store);
  return { store, persistedStore };
};

export default configStore;
