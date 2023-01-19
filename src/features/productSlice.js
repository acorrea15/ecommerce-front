import { createSlice } from "@reduxjs/toolkit";
// creado a partir de la librería de redux: slice para productos
// appApi: llamada a la api para conectar redux con la api que se crea en el archivo appApi.js
import appApi from "../services/appApi";

const initialState = [];

export const productSlice = createSlice({
    name: "products",
    initialState,
    // Los reducers permiten actualizar el estado inicial del estado mediante la acción 
    reducers: {
        updateProducts: (_, action) => {
            return action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(appApi.endpoints.createProduct.matchFulfilled, (_, { payload }) => payload);
        builder.addMatcher(appApi.endpoints.updateProduct.matchFulfilled, (_, { payload }) => payload);
        builder.addMatcher(appApi.endpoints.deleteProduct.matchFulfilled, (_, { payload }) => payload);
    },
});

export const { updateProducts } = productSlice.actions;
export default productSlice.reducer;
