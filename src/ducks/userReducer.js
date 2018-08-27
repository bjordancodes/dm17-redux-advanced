const initialState = {
    user: {},
    isLoading: false
};

const GET_PEOPLE = 'GET_PEOPLE';

export function getPeople(){
    return {
        type: GET_PEOPLE,
        payload: fetch('https://www.swapi.co/api/people')
        .then(res=> res.json())
    }
}

export default function userReducer(state = initialState, action){
    switch(action.type){
        case `${GET_PEOPLE}_PENDING`:
            return {
                ...state,
                isLoading: true
            }
        case `${GET_PEOPLE}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                user: action.payload.results
            };
        case `${GET_PEOPLE}_REJECTED`:
        return {
            ...state,
            isLoading: false
        }
        default: return state;
    }
}