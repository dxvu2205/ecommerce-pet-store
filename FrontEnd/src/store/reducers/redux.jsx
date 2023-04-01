import rootReducer from "./rootReducer";
import { persistStore } from "./persistStore";
import { legacy_createStore as createStore } from "redux";

const reduxStore = () => {
    const store = createStore(rootReducer)
    const persistor = persistStore(store)
    return { store, persistor }
}
export default reduxStore;