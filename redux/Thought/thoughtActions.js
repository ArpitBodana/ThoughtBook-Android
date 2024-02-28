import { FETCH_THOUGHTS, FETCH_THOUGHTS_FAIL, FETCH_THOUGHTS_SUCCESS } from "./thoughtTypes"

export const fetchThoughts=()=>{
    return{
        type:FETCH_THOUGHTS
    }
}

export const fetchThoughtFail=(error)=>{
    return {
        type:FETCH_THOUGHTS_FAIL,
        payload:error
    }
}

export const fetchThoughtSuccess=(thoughts)=>{
    return {
        type:FETCH_THOUGHTS_SUCCESS,
        payload:thoughts
    }
}


