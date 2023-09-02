import { combineReducers, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import testSlice from './reducers/testSlice';

const store = configureStore({
  reducer: {
    todos: testSlice.reducer
  },
  middleware: [thunk],
});

export default store;