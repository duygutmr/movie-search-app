export const FETCH_MOVIES_PENDING = 'FETCH_MOVIES_PENDING';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';

export const setFavorites = (favorites) => {
    return{
        type: ADD_TO_FAVORITES,
        payload: favorites
    }
}

export const searchMovies = (searchTerm, type = 'movie', year = '') => (dispatch) => {
    dispatch({ type: FETCH_MOVIES_PENDING });
    fetch(`http://www.omdbapi.com?apikey=ad838839&y=${year}&type=${type}&s=${searchTerm}`)
        .then(res => res.json())
        .then(data => dispatch({ type: FETCH_MOVIES_SUCCESS, payload: data.Search }))
    .catch(error => dispatch({ type: FETCH_MOVIES_ERROR, payload: error }))
}