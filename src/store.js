import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/rootReduces";
// create store

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
