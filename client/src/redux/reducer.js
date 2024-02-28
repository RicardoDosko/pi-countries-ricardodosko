import { GET_ALL_COUNTRIES, GET_COUNTRY_BY_NAME, GET_DETAIL_COUNTRIES, ORD_BY_ALPHA, ORD_ALPHA_REV, ORD_BY_POPULATION, ORD_BY_CONTINENT, SHOW_ACTIVITY, ORD_BY_POPULATION_REV } from "./actionTypes";
import { functionOrdAlpha, functionOrdPop } from "./actions";

const initialState = {
    allCountries: [],
    allActivities: [],
    allCountriesCopy: [],
    countryDetail: [],
}

function rootReducer(state = initialState, action) {

    switch (action.type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                allCountries: action.payload,
                allCountriesCopy: action.payload,
            }
        case GET_COUNTRY_BY_NAME:
            return {
                ...state,
                allCountries: action.payload,
            }
        case GET_DETAIL_COUNTRIES:
            return {
                ...state,
                countryDetail: action.payload,
            }
        case ORD_BY_ALPHA:
            return {
                ...state,
                allCountries: state.allCountries.slice().sort(functionOrdAlpha),
            }
        case ORD_ALPHA_REV:
            return {
                ...state,
                allCountries: state.allCountries.slice().sort(functionOrdAlpha).reverse(),
            }
        case ORD_BY_CONTINENT:
            return {
                ...state,
                allCountries: state.allCountries.filter((c) => c.continente === action.payload),
            }
        case ORD_BY_POPULATION:
            return {
                ...state,
                allCountries: state.allCountries.slice().sort(functionOrdPop).reverse()
            }
        case ORD_BY_POPULATION_REV:
            return {
                ...state,
                allCountries: state.allCountries.slice().sort(functionOrdPop),
            }
        case SHOW_ACTIVITY:
            return {
                ...state,
                allActivities: state.allCountries.filter((c) => { return c.allActivities.some((a) => a.nombre === action.payload) })
            }
        default:
            return state
    }

}

export default rootReducer;