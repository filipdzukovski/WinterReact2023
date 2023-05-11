import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {usersReducer} from './components/users/duck';
import {commentsReducer} from './components/comments/duck';
import { authReducer } from './components/auth/duck';

const reducer = {
    usersReducer:usersReducer,
    commentsReducer:commentsReducer,
    authReducer:authReducer
}

export default configureStore({
    reducer:reducer,
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)
})