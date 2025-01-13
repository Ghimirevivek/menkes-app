import { configureStore } from "@reduxjs/toolkit";
import stepReducer from "./slices/stepSlice";
import authSlice from "./slices/authSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import AsyncStorage from "@react-native-async-storage/async-storage";
import modalSlice from "./slices/modalSlice";

// Configure redux-persist
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  version: 1
};

const persistedAuthReducer = persistReducer(persistConfig, authSlice);

export const store = configureStore({
  reducer: {
    step: stepReducer,
    modal:modalSlice,
    registration: persistedAuthReducer, // Use persisted reducer for auth
  },
 middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Define types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Create persistor
export const persistor = persistStore(store);
