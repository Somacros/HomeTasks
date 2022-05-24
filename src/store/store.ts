import { composeWithDevTools } from "redux-devtools-extension";
import { compose, createStore, applyMiddleware, StoreEnhancer } from "redux";
import logger from 'redux-logger';

import { rootReducer } from "./root-reducer";

const middleWares = [composeWithDevTools];

//const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, composeWithDevTools());