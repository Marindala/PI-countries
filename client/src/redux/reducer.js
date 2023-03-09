import {
    GET_COUNTRIES,
    ORDER_BY_NAME,
    ORDER_BY_POPULATION,
    FILTER_BY_CONTINENTS,
    GET_DETAILS,
    GET_COUNTRY_BY_NAME,
    POST_ACTIVITY,
    GET_ACTIVITIES,
    FILTER_BY_ACTIVITY,
    SET_DETAILS_LOADING
  } from "./actions";
  
  const initialState = {
    countries: [],
    allCountries: [],
    detail: [],
    continents: [],
    activities: [],
    detailsLoading: false
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_COUNTRIES:
        return {
          ...state,
          allCountries: action.payload,
          countries: action.payload,
        };
  
      case GET_COUNTRY_BY_NAME:
        return {
          ...state,
          countries: action.payload,
          allCountries:action.payload
        };
  
        case SET_DETAILS_LOADING:
        return {
          ...state,
          detailsLoading: action.payload,
        };
  
      case ORDER_BY_NAME:
        let sortedArr =
          action.payload === "asc"
            ? state.countries.sort((a, b) =>  a.name.localeCompare(b.name))
            : state.countries.sort((a, b) =>  b.name.localeCompare(a.name)); 
              
        return {
          ...state,
          countries: sortedArr,
        };
  
      case ORDER_BY_POPULATION:
        let sortedArrPop =
          action.payload === "less"
            ? state.countries.sort(function (a, b) {
                if (a.population > b.population) return 1;
                if (b.population > a.population) return -1;
                return 0;
              })
            : state.countries.sort(function (a, b) {
                if (a.population > b.population) return -1; 
                if (b.population > a.population) return 1;
                return 0;
              });
        return {
          ...state,
          countries: sortedArrPop,
        };
  
      case FILTER_BY_CONTINENTS:
        const allcountries = state.allCountries;
        const filterstatus =
          action.payload === "All"
            ? allcountries
            : allcountries.filter(
                (country) => country.continents === action.payload
              );
        return {
          ...state,
          countries: filterstatus,
          continents:filterstatus
        };
  
      case GET_ACTIVITIES:
        return {
          ...state,
          activities: action.payload,
        };
      case FILTER_BY_ACTIVITY:
        const allCountriesA = state.allCountries;
  
        const filterActivity =
          action.payload === "All"
            ? allCountriesA
            : allCountriesA.filter(
                (country) =>
                  country.activities &&
                  country.activities.map((el) => el.name).includes(action.payload)
              );
  
        return {
          ...state,
          countries: filterActivity,
        };
  
      case GET_DETAILS:
        return {
          ...state,
          detail: action.payload,
        };
  
      case POST_ACTIVITY:
        return {
          ...state,
        };
  
      default:
        return {
          ...state,
        };
    }
  };
  
  export default rootReducer;
  
  
  
  