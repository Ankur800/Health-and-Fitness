import axios from 'axios';
import { GET_RECORD, RECORD_ERROR } from './types';

// Get current user's record
export const getCurrentRecord = () => async (dispatch) => {
    try {
        const res = await axios.get('http://localhost:5000/api/record');

        //console.log(res.data);

        dispatch({
            type: GET_RECORD,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: RECORD_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

// Create or Update Record
export const createRecord = (userDate) => async (dispatch) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const res = await axios.post(
            'http://localhost:5000/api/record',
            userDate,
            config
        );

        //console.log(res.data);

        dispatch({
            type: GET_RECORD,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: RECORD_ERROR,
            payload: {
                msg: err.respose.statusText,
                status: err.response.status,
            },
        });
    }
};
