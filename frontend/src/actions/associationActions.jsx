/* eslint-disable no-unused-vars */
import axios from "axios";
import {
  ASSOCIATION_DETAILS_FAIL,
  ASSOCIATION_DETAILS_REQUEST,
  ASSOCIATION_DETAILS_SUCCESS,
} from "../constants/associationConstants";

export const getAssociationDetails = () => async (dispatch) => {
  try {
    dispatch({
      type: ASSOCIATION_DETAILS_REQUEST,
    });
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.get(
      "/api/association/getAllAssociations",
      config
    );
    dispatch({
      type: ASSOCIATION_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ASSOCIATION_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
