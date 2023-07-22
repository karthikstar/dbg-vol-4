import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/index';
import { loadState } from '../localStorage'

const persistedState = loadState();

const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState
});

export default store;
