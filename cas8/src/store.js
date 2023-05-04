import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger"; //fiskalen aparat
import SayHelloReducer from "./reducers/SayHelloReducer"; // vraboteniot
import CakeReducer from './reducers/CakeReducer';

const reducer = {// sojuz na rabotnici / biro za vrabotuvanje
  SayHelloReducer: SayHelloReducer,
  CakeReducer:CakeReducer
};

export default configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
