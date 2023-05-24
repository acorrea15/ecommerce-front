// archivo de store de redux: importación de los user y productSlice. Importación de la Api

import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/productSlice";
import userSlice from "./features/userSlice";
import appApi from "./services/appApi";

//importación guardado en store: Si salimos de la página no tenemos que loguearnos de nuevo, se guarda todo en el store. 
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

//reducers: combinación de los reductores para tener varios slice de productos en el mismo objeto: 
const reducer = combineReducers({
    user: userSlice,
    products: productSlice,
    [appApi.reducerPath]: appApi.reducer,
});

const persistConfig = {
    key: "root",
    storage,
    blackList: [appApi.reducerPath, "products"],
};

// reductores que persisten en el store:
const persistedReducer = persistReducer(persistConfig, reducer);

// creación del store:


const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk, appApi.middleware],
});
export default store;
