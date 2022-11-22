import constants from "./constants";

export const increaseCount = () => {
  return async (dispatch) => {
    dispatch({
      type: constants.INCREASE_COUNT,
      payload: {
        lastUpdated: new Date().toLocaleString(),
      },
    });
  };
};

export const fetchBodies = (query) => {
  return async (dispatch) => {

    const response = await fetch(
      `https://api.le-systeme-solaire.net/rest/bodies?${query()}`
    )
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.log(error);
      });

    dispatch({
      type: constants.FETCH_BODIES,
      payload: response.bodies,
    });
  };
};

export const addBody = (bodies) => {
  return async (dispatch) => {
    console.log("boddy",  bodies)

      dispatch({
      type: constants.ADD_BODY,
      payload: bodies,
    });
  };
};

