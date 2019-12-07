import { SEARCH_USERS, GET_USER, CLEAR_USERS, SET_LOADING, GET_REPOS } from '../types';

export default (state, { type, payload }) => {
    switch (type) {
        case SET_LOADING:
            return { ...state, loading: true }
        case CLEAR_USERS:
            return { ...state, loading: false, users: [] }
        case SEARCH_USERS:
            return {
                ...state,
                users: payload,
                loading: false
            }
        case GET_USER:
            return {
                ...state,
                user: payload,
                loading: false
            }
        case GET_REPOS:
            return {
                ...state,
                repos: payload,
                loading: false
            }
        default:
            return state
    }
}