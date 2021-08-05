import axios from 'axios';
import { setAlert } from './alert';
import { CLEAR_PROFILE, GET_PROFILE, PROFILE_ERROR } from './types';

// Get the current user's profile
export const getCurrentProfile = () => async (dispatch) => {
    try {
        const config = {
            headers: {
                'x-auth-token': localStorage.token,
            },
        };

        const res = await axios.get(
            'http://localhost:5000/api/profile/me',
            config
        );
        //console.log(res.data);

        dispatch({
            type: GET_PROFILE,
            payload: res.data,
        });
    } catch (err) {
        dispatch({ type: CLEAR_PROFILE });

        dispatch({
            type: PROFILE_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

// Create or Update profile
export const createProfile =
    (formData, history, edit = false) =>
    async (dispatch) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            const res = await axios.post(
                'http://localhost:5000/api/profile',
                formData,
                config
            );

            dispatch({
                type: GET_PROFILE,
                payload: res.data,
            });

            dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created'));

            if (!edit) {
                history.push('/dashboard');
            }
        } catch (err) {
            dispatch({
                type: PROFILE_ERROR,
                payload: {
                    msg: err.response.statusText,
                    status: err.response.status,
                },
            });
        }
    };
