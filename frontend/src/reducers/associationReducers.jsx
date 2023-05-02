/* eslint-disable no-unused-vars */
import {
  ASSOCIATION_DETAILS_FAIL,
  ASSOCIATION_DETAILS_REQUEST,
  ASSOCIATION_DETAILS_SUCCESS,
} from "../constants/associationConstants";

export const associationDetailsReducer = (
  state = { associationInfo: [] },
  action
) => {
  switch (action.type) {
    case ASSOCIATION_DETAILS_REQUEST:
      return { loading: true };

    case ASSOCIATION_DETAILS_SUCCESS:
      return { loading: false, associationInfo: action.payload };

    case ASSOCIATION_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
