import { combineReducers } from 'redux';
import { SET_FILTER, SET_MOVIES, SET_USER, CREATE_USER, LOGIN_USER, EDIT_USER, USER_FAV, ADD_FAV, REMOVE_FAV, DELETE_USER } from '../actions/actions';

function visibilityFilter(state = '', action) {
    switch (action.type) {
        case SET_FILTER:
            return action.value;
        default:
            return state;
    }
}

function movies(state = [], action) {
    switch (action.type) {
        case SET_MOVIES:
            return action.value;
        default:
            return state;
    }
}

function user(state = {}, action) {
    switch (action.type) {
        case SET_USER:
            return action.value;
        case CREATE_USER:
            return action.value;
        case LOGIN_USER:
            return action.value;
        case EDIT_USER:
            return action.value;
        case USER_FAV:
            return action.value;
        case ADD_FAV:
            return {
                ...state,
                FavoriteMovies: [
                    ...state?.FavoriteMovies,
                    action.value
                ]
            }
        case REMOVE_FAV:
            return {
                ...state,
                favMovies: [
                    ...state?.favMovies,
                    action.value
                ]
            }
        case DELETE_USER:
            return action.value;

        default:
            return state;
    }
}

const moviesApp = combineReducers({
    visibilityFilter,
    movies,
    user
});

export default moviesApp;