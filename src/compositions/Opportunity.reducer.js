import { GET_OPPORTUNITY, UPDATE_OPPORTUNITY } from "./constants/actionTypes";

const initialState = {
  fetching: false,
  fetched: false,
  fetching_opportunity: false,
  fetched_opportunity: false,
  fetching_update_opportunity: false,
  fetched_update_opportunity: false,
  error: {},
  resp: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_OPPORTUNITY.pending: {
      return {
        ...state,
        fetching: true,
        fetched: false,
        fetching_opportunity: true,
        fetched_opportunity: false,
        fetching_update_opportunity: false,
        fetched_update_opportunity: false,
        error: {},
        update: {}
      };
    }
    case GET_OPPORTUNITY.fulfilled: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        fetched_opportunity: true,
        fetching_opportunity: false,
        error: {},
        resp: action.payload.data
      };
    }
    case GET_OPPORTUNITY.rejected: {
      return {
        ...state,
        fetching: false,
        fetched: false,
        fetched_opportunity: false,
        fetching_opportunity: false,
        error: action.payload
      };
    }
    case UPDATE_OPPORTUNITY.pending: {
      return {
        ...state,
        fetching: true,
        fetched: false,
        fetching_update_opportunity: true,
        fetched_update_opportunity: false,
        error: {}
      };
    }
    case UPDATE_OPPORTUNITY.fulfilled: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        fetched_update_opportunity: true,
        fetching_update_opportunity: false,
        error: {},
        resp: action.payload.data
      };
    }
    case UPDATE_OPPORTUNITY.rejected: {
      return {
        ...state,
        fetching: false,
        fetched: false,
        fetched_update_opportunity: false,
        fetching_update_opportunity: false,
        error: action.payload
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};

export default reducer;
