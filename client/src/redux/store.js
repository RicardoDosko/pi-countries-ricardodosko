import { legacy_createStore as createStore, applyMiddleware, compose } from "redux"
import rootReducer from "../redux/reducer"
import thunk from "redux-thunk"


const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
export const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk))
)

export default store