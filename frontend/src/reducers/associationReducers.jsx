/* eslint-disable no-unused-vars */
import {
  ASSOCIATIONS_LIST_FAIL,
  ASSOCIATIONS_LIST_REQUEST,
  ASSOCIATIONS_LIST_SUCCESS,
  ASSOCIATION_BY_ID_FAIL,
  ASSOCIATION_BY_ID_REQUEST,
  ASSOCIATION_BY_ID_SUCCESS,
  ASSOCIATION_DELETE_FAIL,
  ASSOCIATION_DELETE_REQUEST,
  ASSOCIATION_DELETE_SUCCESS,
  ASSOCIATION_DETAILS_FAIL,
  ASSOCIATION_DETAILS_REQUEST,
  ASSOCIATION_DETAILS_SUCCESS,
  ASSOCIATION_REGISTER_FAIL,
  ASSOCIATION_REGISTER_REQUEST,
  ASSOCIATION_REGISTER_SUCCESS,
  ASSOCIATION_UPDATE_FAIL,
  ASSOCIATION_UPDATE_REQUEST,
  ASSOCIATION_UPDATE_SUCCESS,
} from "../constants/associationConstants";

export const associationDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case ASSOCIATION_DETAILS_REQUEST:
      return { loading: true };

    case ASSOCIATION_DETAILS_SUCCESS:
      return { loading: false, association: action.payload };

    case ASSOCIATION_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
export const associationDetailsByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case ASSOCIATION_BY_ID_REQUEST:
      return { loading: true };

    case ASSOCIATION_BY_ID_SUCCESS:
      return { loading: false, association: action.payload };

    case ASSOCIATION_BY_ID_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
export const associationsListReducer = (
  state = { associations: [] },
  action
) => {
  switch (action.type) {
    case ASSOCIATIONS_LIST_REQUEST:
      return { loading: true, associations: [] };

    case ASSOCIATIONS_LIST_SUCCESS:
      return { loading: false, associations: action.payload };

    case ASSOCIATIONS_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const associationUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case ASSOCIATION_UPDATE_REQUEST:
      return { loading: true };

    case ASSOCIATION_UPDATE_SUCCESS:
      return { loading: false, association: action.payload };

    case ASSOCIATION_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const associationDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case ASSOCIATION_DELETE_REQUEST:
      return { loading: true };

    case ASSOCIATION_DELETE_SUCCESS:
      return { loading: false, success: true };

    case ASSOCIATION_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const associationRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case ASSOCIATION_REGISTER_REQUEST:
      return { loading: true };

    case ASSOCIATION_REGISTER_SUCCESS:
      return { loading: false, association: action.payload };

    case ASSOCIATION_REGISTER_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
