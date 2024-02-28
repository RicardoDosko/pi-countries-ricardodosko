export const SET_ALL_COUNTRIES = "SET_ALL_COUNTRIES";
export const GET_COUNTRY_BY_NAME = "GET_COUNTRY_BY_NAME";
export const ORDERPOP = "ORDERPOP";
export const ORDERALPH = "ORDERALPH";
export const FILTERCONT = "FILTERCONT";
export const POST_ACTIVITIES = "POST_ACTIVITIES";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const FILTERACT = "FILTERACT";
export const RESET = "RESET";

import axios from "axios";

export const setAllCountries = () => {
    return async(dispatch) => {
        try {
            const response = await fetch("http://localhost:3001/countries");
            const data = await response.json();
            console.log("allCount: ", data);
            dispatch({
                type: SET_ALL_COUNTRIES,
                payload: data,
            });
        } catch (error) {
            console.error("Error fetching countries:", error);
        }
    };
};

export const getCountryByName = (name) => {
    return async function(dispatch) {
        try {
            let response = await fetch(
                `http://localhost:3001/countries/name?nameCommon=${name}`
            );
            if (!response.ok) {
                throw new Error("Country not found");
            }
            let country = await response.json();
            return dispatch({
                type: GET_COUNTRY_BY_NAME,
                payload: country,
            });
        } catch (error) {
            alert(error.message);
            console.error(error);
        }
    };
};

export const orderByPopulation = (order) => ({
    type: ORDERPOP,
    payload: order,
});

export const orderByAlphabetic = (orderalph) => ({
    type: ORDERALPH,
    payload: orderalph,
});

export const filterByContinent = (continent) => ({
    type: FILTERCONT,
    payload: continent,
});

export function postActivity(payload) {
    return async function(dispatch) {
        try {
            // Realizar la solicitud POST al servidor
            const response = await axios.post(
                "http://localhost:3001/activities",
                payload
            );
            // Dispatch de la acción si la solicitud fue exitosa
            dispatch({
                type: POST_ACTIVITIES,
                payload: response.data,
            });
        } catch (err) {
            alert("Se produjo un error en la creación de la actividad");
        }
    };
}

export function getActivities() {
    return async(dispatch) => {
        try {
            const response = await fetch("http://localhost:3001/activities");
            const data = await response.json();
            console.log("actions: ", data);
            dispatch({
                type: GET_ACTIVITIES,
                payload: data,
            });
        } catch (error) {
            console.error("Error fetching countries:", error);
            // Manejo de errores aquí, si es necesario
        }
    };
}

//!FALTA ESTE FILTRADO

export const filterByActivity = (activity) => ({
    type: FILTERACT,
    payload: activity,
});

export const resetFilters = () => ({
    type: RESET,
});