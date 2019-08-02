import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';



class SongList extends Component {


renderList() {
  return this.props.songs.map((song => {
      return(
        <div className='item' key={song.title}>
        <div className='right floated content'>
        <button className='ui button primary'
        //bringing in action creator fn
        onClick={() => this.props.selectSong(song)}
        >Select</button>
        </div>
        <>{song.title}</>
        </div>
      )
  })
  )}


    render() {
      console.log('prop:', this.props)
      return(
        <div className='ui divided list'>{this.renderList()}</div>
        
      )
    }

}


//take state obj, run calc, to shoe up as props 
//could call it anything you want but convention name is mapStateToProps,
const mapStateToProps = state => {
  console.log('state:', state)
  return {
    songs: state.songs //this props === songs: state.songs
  }
}

//first () returns fn, second() incokes fn that was returned 
//connect auto calls dispatch fn for us
//when you want to call an action creator from component
export default connect(mapStateToProps, {selectSong})(SongList);




