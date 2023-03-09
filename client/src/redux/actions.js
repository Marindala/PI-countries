import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_POPULATION = "ORDER_BY_POPULATED";
export const FILTER_BY_CONTINENTS = "FILTER_BY_CONTINENTS";
export const GET_DETAILS = "GET_DETAILS";
export const GET_COUNTRY_BY_NAME = "GET_COUNTRY_BY_NAME";
export const POST_ACTIVITY = "POST_ACTIVITY";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const SET_DETAILS_LOADING = "SET_DETAILS_LOADING";

export const getCountries = () => {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/countries");
      return dispatch({ type: GET_COUNTRIES, payload: json.data });
    } catch (error) {
      console.log({ error: error.message });
    }
  };
};

export function postActivity(payload) {
  try {
    let response = axios.post("http://localhost:3001/activities", payload);
    return { type: POST_ACTIVITY, payload: response };
  } catch (error) {
    console.log({ error: error.message });
  }
}

export const orderByName = (payload) => {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
};

export const setDetailsLoading = (payload) => {
  return {
    type: SET_DETAILS_LOADING,
    payload,
  };
};

export const orderByPopulation = (payload) => {
  return {
    type: ORDER_BY_POPULATION,
    payload: payload,
  };
};

export const filterByContinent = (payload) => {
  return {
    type: FILTER_BY_CONTINENTS,
    payload: payload,
  };
};

export const filterByActivity = (payload) => {
  console.log(payload);
  return {
    type: FILTER_BY_ACTIVITY,
    payload,
  };
};

export function getActivities(payload) {
  return async function (dispatch) {
    try {
      var all = await axios.get("http://localhost:3001/activities", payload);
      return dispatch({
        type: GET_ACTIVITIES,
        payload: all.data,
      });
    } catch (error) {
      console.log({ error: error.message });
    }
  };
}

export const getDetail = (id) => {
  const verId = id.toUpperCase();
  return async (dispatch) => {
    try {
      dispatch({type:SET_DETAILS_LOADING, payload:true})
      var jsonId = await axios.get(`http://localhost:3001/countries/${verId}`);
      //console.log(jsonId);
      dispatch({
        type: GET_DETAILS,
        payload: jsonId.data,
      });
      return dispatch({type:SET_DETAILS_LOADING, payload:false})

    } catch (error) {
      console.log({ error: error.message });
    }
  };
};


export function getByName(name) {
  return async function (dispatch) {
    try {
      var jsonName = await axios.get("http://localhost:3001/countries?name=" + name);
      console.log(jsonName)
      return dispatch({
        
        type: GET_COUNTRY_BY_NAME,
        payload: jsonName.data,
      });
    } catch (error) {
      console.log({ error: error.message });
      return dispatch({
        
        type: GET_COUNTRY_BY_NAME,
        payload: [],
      });
    }
  };
}
