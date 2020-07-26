import { createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import {initialState} from "./initialState";
import {customMiddleWare} from './middleware'

export default function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(customMiddleWare))
  );
}
