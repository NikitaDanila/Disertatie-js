import {
  WATER_CONSUMPTION_FAIL,
  WATER_CONSUMPTION_LIST_FAIL,
  WATER_CONSUMPTION_LIST_REQUEST,
  WATER_CONSUMPTION_LIST_RESET,
  WATER_CONSUMPTION_LIST_SUCCESS,
  WATER_CONSUMPTION_MONTH_FAIL,
  WATER_CONSUMPTION_MONTH_REQUEST,
  WATER_CONSUMPTION_MONTH_RESET,
  WATER_CONSUMPTION_MONTH_SUCCESS,
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

export const waterConsumptionListReducer = (
  state = { waterList: [] },
  action
) => {
  switch (action.type) {
    case WATER_CONSUMPTION_LIST_REQUEST:
      return { loading: true };

    case WATER_CONSUMPTION_LIST_SUCCESS:
      return { loading: false, waterList: action.payload };

    case WATER_CONSUMPTION_LIST_FAIL:
      return { loading: false, error: action.payload };

    case WATER_CONSUMPTION_LIST_RESET:
      return { waterList: {} };

    default:
      return state;
  }
};

export const monthWaterConsumptionReducer = (state = {}, action) => {
  switch (action.type) {
    case WATER_CONSUMPTION_MONTH_REQUEST:
      return { loading: true };

    case WATER_CONSUMPTION_MONTH_SUCCESS:
      return { loading: false, monthConsumption: action.payload };

    case WATER_CONSUMPTION_MONTH_FAIL:
      return { loading: false, error: action.payload };

    case WATER_CONSUMPTION_MONTH_RESET:
      return { loading: true, monthConsumption: {} };

    default:
      return state;
  }
};
