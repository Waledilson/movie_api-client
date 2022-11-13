export const SET_MOVIES = 'SET_MOVIES';
export const SET_FILTER = 'SET_FILTER';
export const SET_USER = 'SET_USER';
export const CREATE_USER = 'CREATE_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const EDIT_USER = 'EDIT_USER';
export const USER_FAV = 'USER_FAV';
export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const DELETE_USER = 'DELETE_USER';

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

export function editUser(value) {
    return {
        type: EDIT_USER,
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

