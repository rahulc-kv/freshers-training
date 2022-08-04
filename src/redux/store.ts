import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import { pokemonApi } from './services/pokemon'
import { useDispatch } from "react-redux";
import { createLogger } from 'redux-logger';

import rootReducer from "./reducers";

export const store = configureStore({
    reducer: {
        rootReducer, 
        [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pokemonApi.middleware).concat(createLogger({ collapsed: true, diff: true })),
});

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
