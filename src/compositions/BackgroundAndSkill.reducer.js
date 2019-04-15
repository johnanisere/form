import { GET_BACKGROUNDS_SKILLS } from "./constants/actionTypes";

const initialState = {
  fetching: false,
  fetched: false,
  error: {},
  skills: [],
  backgrounds: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BACKGROUNDS_SKILLS.pending: {
      return {
        ...state,
        fetching: true,
        fetched: false,
        error: {}
      };
    }
    case GET_BACKGROUNDS_SKILLS.fulfilled: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: {},
        skills: action.payload[1].data,
        backgrounds: action.payload[0].data
      };
    }
    case GET_BACKGROUNDS_SKILLS.rejected: {
      return {
        ...state,
        fetching: false,
        fetched: false,
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
