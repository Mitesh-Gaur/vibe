import { increment, decrement } from '../reducers/testSlice';
import { LOADING, FULFILLED } from '../types';

export const incrementAsync = () => {
    return async (dispatch) => {
        dispatch({ type: LOADING });
        try {
            await setTimeout(() => {
                dispatch(increment());
            }, 1000);
            dispatch({ type: FULFILLED });
        } catch (error) {
            // Handle error if needed
            console.log("error: ", error);
        }
    };
};

export const decrementAsync = () => {
    return async (dispatch) => {
        dispatch({ type: LOADING });
        try {
            await setTimeout(() => { dispatch(decrement()); }, 1000);
            dispatch({ type: FULFILLED });
        }
        catch (error) {
            // Handle error if needed 
        }
    };
};