import React from 'react';
import { connect } from 'react-redux'

////destructure to access song prop
const SongDetail= ({ song }) => {
  // console.log(song)
  if (!song) {
  return <div>Please select a song.</div>;
  }

  return (
    <div>
    <h3>About:</h3>
    <p>
    Title: {song.title}
    <br />
    Duration: {song.duration}
    </p>
    </div>
    )
  }


const mapStateToProps= state => {
  console.log('song detail:', state)
  return {
    song: state.selectedSong
  }
}


export default connect(mapStateToProps)(SongDetail);