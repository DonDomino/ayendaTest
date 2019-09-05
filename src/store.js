import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducer = (state, action) => {
  
  if(action.type === 'SET_ARTISTS') {
    return {
      ...state,
      artists: action.payload
    };
  } else if(action.type === 'SET_ALBUMS') {
    return {
      ...state,
      albums: action.payload
    };
  } else if(action.type === 'SET_SONGS') {
    return {
      ...state,
      songs: action.payload
    };
  } else if(action.type === 'SET_GENRES') {
    return {
      ...state,
      genres: action.payload
    };
  } else if(action.type === 'SET_RANDOM') {
    return {
      ...state,
      random: action.payload
    };
  } 
  return state;
} 

export default createStore(reducer, { artists: [], albums: [], songs: [], genres: [], random: [] }, applyMiddleware(thunk));