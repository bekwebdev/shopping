import {configureStore} from '@reduxjs/toolkit';
import {CountSlice} from '../features/CountSlice';

const store = configureStore({
    reducer:{
        countSlice: CountSlice,
    }
})

export default store;