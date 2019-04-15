import thunk from "redux-thunk";
import storage from "localforage";
import promise from "redux-promise-middleware";
import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./reducer";

const middleware = applyMiddleware(promise, thunk);

const enhancer = composeWithDevTools(
  middleware
  // other store enhancers if any
);

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["opportunity"]
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default () => {
  let store = createStore(persistedReducer, enhancer);
  let persistor = persistStore(store);
  return { store, persistor };
};
