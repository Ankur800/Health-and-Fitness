import axios from 'axios';
import {
    GET_RECORD,
    RECORD_ERROR,
    ADD_CALORIES_INTAKE,
    ADD_CALORIES_BURNT,
    CLEAR_RECORD,
} from './types';

// Get current user's record
export const getCurrentRecord = () => async (dispatch) => {
    try {
        const config = {
            headers: {
                'x-auth-token': localStorage.token,
            },
        };

        const res = await axios.get('http://localhost:5000/api/record', config);

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
export const createRecord = (userData) => async (dispatch) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const res = await axios.post(
            'http://localhost:5000/api/record',
            userData,
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

// Update today's calories intaken
export const addCaloriesIntaken = (foodInfo, history) => async (dispatch) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const res = await axios.post(
            'http://localhost:5000/api/record/add-food-intaken',
            foodInfo,
            config
        );

        //console.log(res.data);

        dispatch({
            type: ADD_CALORIES_INTAKE,
            payload: res.data,
        });

        history.push('/dashboard');
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

// Update today's calories burnt
export const addCaloriesBurnt = (exerciseInfo, history) => async (dispatch) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const res = await axios.post(
            'http://localhost:5000/api/record/add-calories-burnt',
            exerciseInfo,
            config
        );

        dispatch({
            type: ADD_CALORIES_BURNT,
            payload: res.data,
        });

        history.push('/dashboard');
    } catch (err) {
        dispatch({ type: CLEAR_RECORD });

        dispatch({
            type: RECORD_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};
