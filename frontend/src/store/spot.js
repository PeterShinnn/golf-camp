import { csrfFetch } from './csrf';

const ADD_SPOT = 'spot/ADD_COURSE';
//const LOAD_SPOTS = 'spot/LOAD_SPOTS';

const addSpot = course => ({
    type: ADD_SPOT,
    payload: course
});

// const loadSpot = spots => ({
//     type: LOAD_SPOTS,
//     spots,
// });

export const CreateCourse = (payload) => async dispatch => {
    //console.log(payload);
    const response = await csrfFetch('/api/spots', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    });
    if (response.ok){
        const course = await response.json();
        dispatch(addSpot(course));
        return course;
    }
} 

const initialState = { user: null };

const courseReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case ADD_SPOT:
            newState = {
                ...state
            }
            console.log(action)
            return newState;
        default:
            return state;
    }
};

export default courseReducer;
