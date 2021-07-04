import {
    GET_RECORD,
    RECORD_ERROR,
    CLEAR_RECORD,
    ADD_CALORIES_INTAKE,
} from '../actions/types';

const initialState = {
    record: null,
    loading: true,
    error: {},
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_RECORD:
        case ADD_CALORIES_INTAKE:
            return {
                ...state,
                record: payload,
                loading: false,
            };
        case RECORD_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            };
        case CLEAR_RECORD:
            return {
                ...state,
                record: null,
                loading: false,
            };
        default:
            return state;
    }
}
