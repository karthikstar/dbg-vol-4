import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../reducers/index'

const preloadedState = {
  topEight: {
    topEightBattlersList: [
      { id: 0, name: 'syasya' },
      { id: 1, name: 'ggg'}
    ],
    numTest: 6
  }
}

const store = configureStore({
  reducer: rootReducer
})

export default store;
console.log(store.getState());

//import { createStore } from 'redux';



// const store = createStore(rootReducer, preloadedState)

//export default store
