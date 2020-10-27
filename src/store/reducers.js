import { FETCH_MOVIES_PENDING, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERROR, ADD_TO_FAVORITES } from '../store/actions'
import {setInLocal} from '../utils/localStorage'

const favoritesInitialState = {
    favorites: []
}

export const addToFavorites = ( state = favoritesInitialState , { type, payload } ) => {
    switch(type) {
        case ADD_TO_FAVORITES:
            let idAlreadyExists = state.favorites.indexOf(payload) > -1;
            // make a copy of the existing array
            let favorites = state.favorites.slice();

            if(idAlreadyExists) {
                favorites = favorites.filter(id => id != payload);                
            }     
            else {
                // modify the COPY, not the original
                favorites.push(payload);            
            }     

            setInLocal("imdbIds", favorites)

            return { ...state, 
                favorites
            }
        default: 
            return state;
    }
}

const moviesInitialState = {
    pending: false,
    movies: [],
    error: null
}

export const getMovieReducer = ( state = moviesInitialState, action ) => {
    switch(action.type) {
        case FETCH_MOVIES_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                pending: false,
                movies: action.payload
            }
        case FETCH_MOVIES_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}