import { csrfFetch } from './csrf';

const ADD_SPOT = 'spot/ADD_COURSE';
const EDIT_SPOT = 'spot/EDIT_COURSE';
const LOAD = 'spot/LOAD';
const LOAD_ONE = 'spot/LOAD/ONE';
const REMOVE_SPOT = 'spot/REMOVE_SPOT'

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

const remove = (spotId) => ({
    type: REMOVE_SPOT,
    spotId
});

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
    const response = await csrfFetch('/api/spots', {
        method: 'POST',
        body: JSON.stringify(payload)
    });
    if (response.ok) {
        const course = await response.json();
        const img = await csrfFetch('/api/images', {
            method: 'POST',
            body: JSON.stringify({ url: payload.url, spotId: course.spot.id })
        });
        const photo = await img.json();
        course.spot.Images = [photo.image];
        dispatch(addSpot(course));
        return course;
    }
}

export const editCourse = (payload) => async dispatch => {
    const img = await csrfFetch(`/api/images/${payload.imgId}`,{
        method: 'PUT',
        body: JSON.stringify({url: payload.url, spotId: payload.id})
    });

    if (img.ok) {
        const response = await csrfFetch(`/api/spots/${payload.id}`, {
            method: 'PUT',
            body: JSON.stringify(payload)
        });
        const course = await response.json();
        dispatch(editSpot(course));
        return course
    }
}

export const deleteCourse = (id) => async dispatch => {
    const response = await csrfFetch(`/api/spots/${id}`, {
        method: 'DELETE'
    })
    if (response.ok) {
        dispatch(remove(id));
        return response
    }
}

const initialState = { list: [], spot: [] };

const courseReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type) {
        case LOAD:
            return { ...state, list: action.list }
        case ADD_SPOT:
            newState = { 
                ...state,
            }
            const courseList = newState.list
            courseList.push(action.course.spot)
            newState.list = courseList;
            newState.spot = action.course.spot
            return newState;
        case LOAD_ONE:
            return { ...state, spot: action.course };
        case EDIT_SPOT:
            return { ...state, list: state.list, spot: action.course };
        case REMOVE_SPOT:
            newState = { ...state, list: state.list.filter(spot => spot.id !== +action.spotId)}
            //delete newState[action.spotId]
            newState.spot = [];
            return newState;
        default:
            return state;
    }
};

export default courseReducer;
