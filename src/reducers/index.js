import { combineReducers } from 'redux'


const songsReducer = () => {
  return[
    { title: 'Brown Skin Girl', duration:'4:09' },
    { title: 'Imagine', duration:'3:33' },
    { title: 'Antisocial', duration:'2:42' }
  ]
}

const selectedSongReducer = (selectedSong = null, action) => {
  if(action.type === 'SONG_SELECTED') {
    return action.payload
  }
  return selectedSong
}



export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})