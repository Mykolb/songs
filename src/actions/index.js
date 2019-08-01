//action
export const selectSong = 'SELECT_SONG';





//Action creator
export const selectSong = song => {
  //return action
  return {
    type: 'SONG_SELECTED',
    payload: song
  }
}