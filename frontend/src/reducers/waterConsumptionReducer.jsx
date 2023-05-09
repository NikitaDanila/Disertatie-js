import {
  WATER_CONSUMPTION_FAIL,
  WATER_CONSUMPTION_REQUEST,
  WATER_CONSUMPTION_RESET,
  WATER_CONSUMPTION_SUCCESS,
  WATER_CONSUMPTION_UPDATE_FAIL,
  WATER_CONSUMPTION_UPDATE_REQUEST,
  WATER_CONSUMPTION_UPDATE_SUCCESS,
} from "../constants/waterConsumptionConstants";
export const waterConsumptionReducer = (state = {}, action) => {
  switch (action.type) {
    case WATER_CONSUMPTION_REQUEST:
      return { loading: true, consumption: {} };

    case WATER_CONSUMPTION_SUCCESS:
      return { loading: false, consumption: action.payload };

    case WATER_CONSUMPTION_FAIL:
      return { loading: false, error: action.payload };

    case WATER_CONSUMPTION_RESET:
      return { loading: true, consumption: {} };

    default:
      return state;
  }
};

export const updateWaterConsumptionReducer = (state = {}, action) => {
  switch (action.type) {
    case WATER_CONSUMPTION_UPDATE_REQUEST:
      return { loading: true, consumption: {} };

    case WATER_CONSUMPTION_UPDATE_SUCCESS:
      return { loading: false, consumption: action.payload };

    case WATER_CONSUMPTION_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    case WATER_CONSUMPTION_RESET:
      return { loading: true, consumption: {} };

    default:
      return state;
  }
};
