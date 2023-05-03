import {
  WATER_CONSUMPTION_FAIL,
  WATER_CONSUMPTION_REQUEST,
  WATER_CONSUMPTION_SUCCESS,
} from "../constants/waterConsumptionConstants";
export const waterConsumptionReducer = (state = {}, action) => {
  switch (action.type) {
    case WATER_CONSUMPTION_REQUEST:
      return { loading: true };

    case WATER_CONSUMPTION_SUCCESS:
      return { loading: false, consumption: action.payload };

    case WATER_CONSUMPTION_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
