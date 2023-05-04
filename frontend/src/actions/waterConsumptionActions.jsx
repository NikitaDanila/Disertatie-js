/* eslint-disable no-unused-vars */
import {
  WATER_CONSUMPTION_FAIL,
  WATER_CONSUMPTION_REQUEST,
  WATER_CONSUMPTION_SUCCESS,
  WATER_CONSUMPTION_RESET,
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
