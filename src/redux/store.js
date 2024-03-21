import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from './slices/userSlice';

const rootReducer = combineReducers({
  userAuth: userReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userAuth']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [];

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(middlewares),
});

export const persistor = persistStore(store);
