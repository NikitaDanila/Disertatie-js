/* eslint-disable no-unused-vars */
import axios from "axios";
import {
  ASSOCIATION_DETAILS_FAIL,
  ASSOCIATION_DETAILS_REQUEST,
  ASSOCIATION_DETAILS_SUCCESS,
  ASSOCIATIONS_LIST_FAIL,
  ASSOCIATIONS_LIST_REQUEST,
  ASSOCIATIONS_LIST_SUCCESS,
} from "../constants/associationConstants";

export const getAssociationDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ASSOCIATION_DETAILS_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(
      `/api/association/getAssociation/${id}`,
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
export const getAssociationsList = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ASSOCIATIONS_LIST_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(
      "/api/association/getAllAssociations/",
      config
    );
    dispatch({
      type: ASSOCIATIONS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ASSOCIATIONS_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
