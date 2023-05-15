/* eslint-disable no-unused-vars */
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import {
  associationDeleteReducer,
  associationDetailsByIdReducer,
  associationDetailsReducer,
  associationRegisterReducer,
  associationUpdateReducer,
  associationsListReducer,
} from "./reducers/associationReducers";
import {
  userDeleteReducer,
  userDetailsReducer,
  userListReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
  userUpdateReducer,
} from "./reducers/userReducers";
import {
  updateWaterConsumptionReducer,
  waterConsumptionListReducer,
  waterConsumptionReducer,
} from "./reducers/waterConsumptionReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdate: userUpdateReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,

  associationDetails: associationDetailsReducer,
  associationDetailsById: associationDetailsByIdReducer,
  associationsList: associationsListReducer,
  associationUpdate: associationUpdateReducer,
  associationDelete: associationDeleteReducer,
  associationRegister: associationRegisterReducer,

  waterConsumptionDetails: waterConsumptionReducer,
  waterConsumptionUpdate: updateWaterConsumptionReducer,
  waterConsumptionList: waterConsumptionListReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : {};

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = configureStore({
  reducer,
  middleware: middleware,
  preloadedState: initialState,
});

export default store;
