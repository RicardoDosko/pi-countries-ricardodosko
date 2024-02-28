import axios from 'axios';
import { GET_ALL_COUNTRIES, GET_COUNTRY_BY_NAME, GET_DETAIL_COUNTRIES, ORD_BY_ALPHA, ORD_ALPHA_REV, ORD_BY_POPULATION, ORD_BY_CONTINENT, SHOW_ACTIVITY, ORD_BY_POPULATION_REV } from './actionTypes'

export function postActivity(activity) {
    return async function() {
        const newActivity = await axios.post("http://localhost:3001/activities/", activity)
        console.log('newActivity: ', newActivity)
    }
}

export function getAllCountries() {
    return async(dispatch) => {
        const { data } = await axios.get("http://localhost:3001/countries/")
        return dispatch({
            type: GET_ALL_COUNTRIES,
            payload: data
        })
    }
}

export function getCountryByname(name) {
    return async(dispatch) => {
        const { data } = await axios.get(`http://localhost:3001/countries/?name=${name}`)
        return dispatch({
            type: GET_COUNTRY_BY_NAME,
            payload: data
        })
    }
}

export function getDetailCountries(id) {
    return async(dispatch) => {
        const { data } = await axios.get(`http://localhost:3001/countries/${id}`);
        return dispatch({
            type: GET_DETAIL_COUNTRIES,
            payload: data
        });
    };
}

export function ordByAlpha() {
    return {
        type: ORD_BY_ALPHA,
    };
}

export function ordByAlphaRev() {
    return {
        type: ORD_ALPHA_REV,
    }
}

export function ordByPopulation() {
    return {
        type: ORD_BY_POPULATION,
    }
}

export function ordByPopulationRev() {
    return {
        type: ORD_BY_POPULATION_REV,
    }
}

export function showActivity() {
    return {
        type: SHOW_ACTIVITY,
    }
}

export function orderByContinent() {
    return {
        type: ORD_BY_CONTINENT,
    }
}

export const functionOrdAlpha = (a, b) => {
    if (a.nombre < b.nombre) return -1
    if (b.nombre < a.nombre) return 1
    return 0
}

export const functionOrdPop = (a, b) => {

    return a.poblacion - b.poblacion
}