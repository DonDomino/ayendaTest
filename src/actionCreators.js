const loadArtists = () => {
  return dispatch => {
    return fetch('https://rubytify.herokuapp.com/api/v1/artists')
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: 'SET_ARTISTS',
        payload: data.data
      });
    });
  }
}

const loadAlbums = (id) => {
  return dispatch => {
    return fetch(`https://rubytify.herokuapp.com/api/v1/artists/${id}/albums`)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: 'SET_ALBUMS',
        payload: data.data
      });
    });
  }
}

const loadSongs = (id) => {
  return dispatch => {
    return fetch(`https://rubytify.herokuapp.com/api/v1/albums/${id}/songs`)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: 'SET_SONGS',
        payload: data.data
      });
    });
  }
}

const loadGenres = () => {
  return dispatch => {
    return fetch(`https://rubytify.herokuapp.com/api/v1/genres`)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: 'SET_GENRES',
        payload: data.data
      });
    });
  }
}

const randomSong = (genreName) => {
  return dispatch => {
    return fetch(`https://rubytify.herokuapp.com/api/v1/genres/${genreName}/random_song`)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: 'SET_RANDOM',
        payload: data.data
      });
    });
  }
}

export { loadArtists, loadAlbums, loadSongs, loadGenres, randomSong }