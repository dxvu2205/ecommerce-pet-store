import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reduxStore from "./redux";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

// const { store, persistor } = reduxStore();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Provider store={store}>
  //   <PersistGate loading={null} persistor={persistor}>
  //     <BrowserRouter>
        <App />
      /* </BrowserRouter>
    </PersistGate>
  </Provider> */
);


