import rootReducer from "./rootReducer";
import { persistStore } from "./persistStore";
import { legacy_createStore as createStore } from "redux";
export const rootReducer = combineReducers({ cartReducer, coursesReducer, userReducer })
const reduxStore = () => {
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
    const persistor = persistStore(store)
    return { store, persistor }
}
export default reduxStore;