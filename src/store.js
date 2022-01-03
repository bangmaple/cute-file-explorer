import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import rootReducer from './features/slice';

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: true,
});