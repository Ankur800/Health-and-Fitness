import {
    GET_RECORD,
    RECORD_ERROR,
    CLEAR_RECORD,
    ADD_CALORIES_INTAKE,
    ADD_CALORIES_BURNT,
} from '../actions/types';

const initialState = {
    record: null,
    recordLoading: true,
    error: {},
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_RECORD:
        case ADD_CALORIES_INTAKE:
        case ADD_CALORIES_BURNT:
            return {
                ...state,
                record: payload,
                recordLoading: false,
            };
        case RECORD_ERROR:
            return {
                ...state,
                error: payload,
                recordLoading: false,
            };
        case CLEAR_RECORD:
            return {
                ...state,
                record: null,
                recordLoading: false,
            };
        default:
            return state;
    }
}
