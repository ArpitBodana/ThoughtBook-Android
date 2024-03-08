import { FETCH_THOUGHTS, FETCH_THOUGHTS_FAIL, FETCH_THOUGHTS_SUCCESS, GET_All_THOUGHTS } from "./thoughtTypes"

const initialThoughtState = {
    loading: false,
    thoughts: [],
    error: ""
}

const thoughtReducer = (state = initialThoughtState, action) => {
    switch (action.type) {
        case FETCH_THOUGHTS: return {
            ...state,
            loading: true,
        }
        case FETCH_THOUGHTS_FAIL: return {
            ...state,
            loading: false,
            error: action.payload
        }
        case FETCH_THOUGHTS_SUCCESS: return {
            ...state,
            loading: false,
            thoughts: action.payload,
            error: ""
        }
        default: return state;
    }
}

export default thoughtReducer;