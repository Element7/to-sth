import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { logger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk, logger];

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;