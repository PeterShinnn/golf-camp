import { csrfFetch } from './csrf';

const ADD_SPOT = 'spot/ADD_COURSE';
const EDIT_SPOT = 'spot/EDIT_COURSE';
const LOAD = 'spot/LOAD';
const LOAD_ONE = '/spot/LOAD/ONE';

const addSpot = course => ({
    type: ADD_SPOT,
    course
});

const load = list => ({
    type: LOAD,
    list,
});

const loadOne = course => ({
    type: LOAD_ONE,
    course
})

const editSpot = course => ({
    type: EDIT_SPOT,
    course
})

export const getSpots = () => async dispatch => {
    const response = await csrfFetch('/api/spots');
    if (response.ok) {
        const list = await response.json();
        dispatch(load(list));
    };
}

export const getSingleSpot = (id) => async dispatch => {
    const response = await csrfFetch(`/api/spots/${id}`);
    if (response.ok) {
        const spot = await response.json();
        dispatch(loadOne(spot));
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

export const editCourse = (payload) => async dispatch => {
    const response = await csrfFetch('/api/spots', {
        method: 'PUT',
        body: JSON.stringify(payload)
    });
    if (response.ok) {
        const course = await response.json();
        // const img = await csrfFetch('/api/images',{
        //     method: 'PUT',
        //     body: JSON.stringify({url: payload.url, spotId:course.spot.id})
        // });
        dispatch(editSpot(course));
        return {course}//, img};
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
        case LOAD_ONE:
            return { ...state, list: action.course };
        default:
            return state;
    }
};

export default courseReducer;
