/* eslint-disable no-unused-vars */
import {
  ASSOCIATIONS_LIST_FAIL,
  ASSOCIATIONS_LIST_REQUEST,
  ASSOCIATIONS_LIST_SUCCESS,
  ASSOCIATION_BY_ID_FAIL,
  ASSOCIATION_BY_ID_REQUEST,
  ASSOCIATION_BY_ID_SUCCESS,
  ASSOCIATION_DETAILS_FAIL,
  ASSOCIATION_DETAILS_REQUEST,
  ASSOCIATION_DETAILS_SUCCESS,
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
