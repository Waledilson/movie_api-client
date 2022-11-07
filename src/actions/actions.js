export const SET_MOVIES = 'SET_MOVIES';
export const SET_FILTER = 'SET_FILTER';
export const SET_USER = 'SET USER';
export const CREATE_USER = 'CREATE USER';
export const LOGIN_USER = 'LOGIN USER';
export const UPDATE_USER = 'UPDATE USER';
export const USER_FAV = 'USER FAV';
export const ADD_FAV = 'ADD FAV';
export const REMOVE_FAV = 'REMOVE FAV';
export const DELETE_USER = 'DELETE USER';

export function setMovies(value) {
    return {
        type: SET_MOVIES,
        value
    };
}

export function setFilter(value) {
    return {
        type: SET_FILTER,
        value
    };
}

export function setUser(value) {
    return {
        type: SET_USER,
        value
    };
}

export function createUser(value) {
    return {
        type: CREATE_USER,
        value
    }
}

export function loginUser(value) {
    return {
        type: LOGIN_USER,
        value
    }
}

export function updateUser(value) {
    return {
        type: UPDATE_USER,
        value
    }
}

export function userFav(value) {
    return {
        type: USER_FAV,
        value
    }
}

export function addFav(value) {
    return {
        type: ADD_FAV,
        value
    }
}

export function removeFav(value) {
    return {
        type: REMOVE_FAV,
        value
    }
}

export function deleteUser(value) {
    return {
        type: DELETE_USER,
        value
    }
}

