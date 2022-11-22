import constants from "./constants";

const INITIAL_STATE = {
  count: 0,
  lastUpdated: null,
};

const storeExampleReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case constants.INCREASE_COUNT: {
      return {
        count: state.count + 1,
        lastUpdated: payload.lastUpdated,
      };
    }
    case constants.FETCH_BODIES: {
      return { ...state, payload };
    }
    case constants.ADD_BODY: {
      const newBodies = [
        ...payload.bodies,
        payload.body,
      ];
      return { ...state, newBodies };
    }
    default:
      return state;
  }
};

export default storeExampleReducer;
