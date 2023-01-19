import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//setup store: importación de los datos actualizados en el store
import store from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";

// store to persit: creación de la función para la info en el store
const persistedStore = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // En el render utiliza el provider para traer el store
    <Provider store={store}>
        <PersistGate loading={<div>Loading...</div>} persistor={persistedStore}>
            <App />
        </PersistGate>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
