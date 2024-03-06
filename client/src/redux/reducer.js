import {
    SET_ALL_COUNTRIES,
    GET_COUNTRY_BY_NAME,
    ORDERPOP,
    ORDERALPH,
    FILTERCONT,
    POST_ACTIVITIES,
    GET_ACTIVITIES,
    FILTERACT,
    RESET,
} from "./actions";

const initialState = {
    countries: [], //at '/home' filt
    allCountries: [], //at '/home' all
    //activities: [], //filt
    allActivities: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        //?-------------------------------------------------------- SET_ALL_COUNTRIES

        case SET_ALL_COUNTRIES:
            return {
                ...state,
                allCountries: payload,
                countries: payload,
            };

            //?-------------------------------------------------------- GET_COUNTRY_BY_NAME

        case GET_COUNTRY_BY_NAME:
            return {
                ...state,
                countries: payload,
            };

            //?-------------------------------------------------------- ORDERPOP

        case ORDERPOP:
            let pop;
            if (state.countries.length === 0) {
                pop = [...state.allCountries];
            } else {
                pop = [...state.countries];
            }

            return {
                ...state,
                countries: pop.slice().sort((a, b) => {
                    switch (payload) {
                        case "Ascendente":
                            return a[0].population - b[0].population;
                        case "Descendente":
                            return b[0].population - a[0].population;
                        default:
                            return 0;
                    }
                }),
            };

            //?-------------------------------------------------------- ORDERALPH

        case ORDERALPH:
            let orderedCountries;
            if (state.countries.length === 0) {
                orderedCountries = [...state.allCountries];
                cons;
            } else {
                orderedCountries = [...state.countries];
            }

            switch (payload) {
                case "Asc":
                    orderedCountries.sort((a, b) =>
                        a[0].nameCommon.localeCompare(b[0].nameCommon)
                    );
                    break;
                case "Desc":
                    orderedCountries.sort((a, b) =>
                        b[0].nameCommon.localeCompare(a[0].nameCommon)
                    );
                    break;
                default:
                    break;
            }

            return {
                ...state,
                countries: orderedCountries,
            };

            //?-------------------------------------------------------- FILTERCONT

        case FILTERCONT:
            const filteredContinents =
                payload === "All" ? {...state, countries: state.allCountries } : {
                    ...state,
                    countries: state.allCountries.filter(
                        (c) => c[0].continent === payload
                    ),
                };

            // return filteredContinents;
            return {
                ...state,
                countries: filteredContinents.countries,
            };

            //?-------------------------------------------------------- POST_ACTIVITIES

        case POST_ACTIVITIES:
            return {
                ...state,
                // allActivities: [...state.allActivities, payload],
            };

            //?-------------------------------------------------------- GET_ACTIVITIES

        case GET_ACTIVITIES:
            console.log("getAct: ", payload);
            return {
                ...state,
                allActivities: payload,
            };

            //?-------------------------------------------------------- FILTERACT

        case FILTERACT:

            let filteredActivities;
            filteredActivities =
                payload === "All" ?
                state.allCountries.filter((c) => {
                    return c[1].find((a) => a);
                }) // Si se selecciona "All", muestra todos los países
                :
                state.allCountries.filter((c) => {
                    return c[1].find((a) => a.name === payload);

                });
            if (filteredActivities.length === 0) {
                alert("No hay países asociados a ninguna actividad");

                preventDefault();
            }

            return {
                ...state,
                countries: filteredActivities
            };

            //?-------------------------------------------------------- RESET

        case RESET:
            return {
                ...state,
                countries: state.allCountries,
            };

            //?-------------------------------------------------------- default

        default:
            return {...state };

    }
};

export default rootReducer;