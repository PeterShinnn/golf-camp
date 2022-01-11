import { csrfFetch } from './csrf';

const ADD_SPOT = 'spot/ADD_COURSE';
const LOAD = 'spot/LOAD';

const addSpot = course => ({
    type: ADD_SPOT,
    payload: course
});

const load = list => ({
    type: LOAD,
    list,
});

export const getSpots = () => async dispatch => {
    const response = await csrfFetch('/api/spots');
    if (response.ok) {
        const list = await response.json();
        dispatch(load(list));
    };
}

export const CreateCourse = (payload) => async dispatch => {
    //console.log(payload);
    const response = await csrfFetch('/api/spots', {
        method: 'POST',
        body: JSON.stringify(payload)
    });
    if (response.ok) {
        const course = await response.json();
        const img = await csrfFetch('/api/images',{
            method: 'POST',
            body: JSON.stringify({url: payload.url, spotId:course.spot.id})
        });
        dispatch(addSpot(course));
        return {course, img};
    }
}

const initialState = { list: [] };

const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            return {
                ...state,
                list: action.list
            }
        case ADD_SPOT:
            return { ...state };
        default:
            return state;
    }
};

export default courseReducer;
