import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import dynamicMiddlewares from "redux-dynamic-middlewares";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import staticReducers from "./reducers";

const composeEnhancers = composeWithDevTools({

  // options like actionSanitizer, stateSanitizer
});

const enhancer = composeEnhancers(
  applyMiddleware(
    thunk,
    dynamicMiddlewares,
  ),
);

const _store = createStore(
  combineReducers(staticReducers),
  enhancer
);

// Add a dictionary to keep track of the registered async reducers
_store.asyncReducers = {};

/*
 * Create an inject reducer function
 * This function adds the async reducer, and creates a new combined reducer
 */
_store.injectReducer = (key, asyncReducer) => {
  store.asyncReducers[key] = asyncReducer;

  store.replaceReducer(combineReducers({
    ...staticReducers,
    ...store.asyncReducers,
  }));
};

export const store = _store;
