import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {usersReducer} from './components/users/duck'

const reducer = {
    usersReducer:usersReducer
}

export default configureStore({
    reducer:reducer,
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)
})