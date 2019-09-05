import React from 'react';
import '../App.css';
import { loadSongs } from '../actionCreators';
import store from '../store';
import {Link} from "react-router-dom";

class Songs extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      loading: true,
      songs: [],
      albumId: props.match.params.id
    }

    store.subscribe(()=> {
      this.setState({songs: store.getState().songs})
    })
  }

  async componentDidMount(){
    await store.dispatch(loadSongs(this.state.albumId));
    this.setState({loading: false});
  }

  render(){
    if(this.state.loading){
      return <h1 style={{color: "white", textAlign: "center"}}>Cargando...</h1>
    }
    
    return (
      <div className="list">
        <div className="wrapper">
          {this.state.songs.map((song, index) => {
            if (song.preview_url === null) {
              return <p key={index}>No hay preview de cancion</p>
            }          
            return(
              <div className="song" key={index}>  
                <Link to={{
                  pathname: '/player',
                  state: {
                    url: song.preview_url,
                    name: song.name,
                    songs: this.state.songs
                  }
                }}>{song.name}</Link>
              </div>
            )        
          })}
        </div>  
      </div>
    )
  }
}
export default Songs;