/* eslint-disable no-unused-vars */
import {
  WATER_CONSUMPTION_FAIL,
  WATER_CONSUMPTION_REQUEST,
  WATER_CONSUMPTION_RESET,
  WATER_CONSUMPTION_SUCCESS,
  WATER_CONSUMPTION_UPDATE_FAIL,
  WATER_CONSUMPTION_UPDATE_REQUEST,
  WATER_CONSUMPTION_UPDATE_SUCCESS,
} from "../constants/waterConsumptionConstants";

import axios from "axios";

export const getWaterConsumptionDetails = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: WATER_CONSUMPTION_REQUEST,
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
      "/api/waterConsumption/getWaterConsumption/",
      config
    );
    dispatch({
      type: WATER_CONSUMPTION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: WATER_CONSUMPTION_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
export const getWaterConsumptionDetailsById =
  (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: WATER_CONSUMPTION_REQUEST,
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
        `/api/waterConsumption/getWaterConsumptionById/${id}`,
        config
      );
      dispatch({
        type: WATER_CONSUMPTION_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: WATER_CONSUMPTION_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };

export const updateWaterConsumptionDetails =
  (waterConsumption) => async (dispatch, getState) => {
    try {
      dispatch({
        type: WATER_CONSUMPTION_UPDATE_REQUEST,
      });
      const {
        userLogin: { userInfo },
      } = getState();
      const { pk } = waterConsumption;
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.put(
        `/api/waterConsumption/updateWaterConsumption/${pk}`,
        waterConsumption,
        config
      );
      dispatch({
        type: WATER_CONSUMPTION_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: WATER_CONSUMPTION_UPDATE_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
