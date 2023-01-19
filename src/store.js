// Este es el store del redux toolkit: importación de los Slice y la api
import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/productSlice";
import userSlice from "./features/userSlice";
import appApi from "./services/appApi";

//persit our store - instalar las librerías redux persist y thunk
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

//reducers: combinación de los reductores para que estén dentro del mismo objeto: productSlice y userSlice en el mismo reducer
const reducer = combineReducers({
    user: userSlice,
    products: productSlice,
    // con el siguiente código actualiza el estado: 
    [appApi.reducerPath]: appApi.reducer,
});

// Utiliza la combinación de reducers: 
const persistConfig = {
    key: "root",
    storage,
    blackList: [appApi.reducerPath, "products"],
};

// persist our store
const persistedReducer = persistReducer(persistConfig, reducer);

// creación de un store:

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk, appApi.middleware],
});

export default store;
