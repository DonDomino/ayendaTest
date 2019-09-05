import React from 'react';
import '../App.css';

class Player extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      loading: true,
      randoms: []
    }
  }

  componentDidMount(){
    this.setState({loading: false});
    this.random();
  }
  
  random(){
    if(this.props.location.state.songs){
      const randoms = []
      const songs = this.props.location.state.songs.filter(songs => songs.preview_url !== this.props.location.state.url);    
      for(let i = 0; i < songs.length; i++){
        let index = [Math.floor(Math.random() * songs.length)];
        const song = songs[index];
        randoms.push(song);
        songs.splice(index,1);
      }   
      this.setState({randoms});   
    }      
  }

  render(){
    if(this.state.loading){
      return <h1 style={{color: "white", textAlign: "center"}}>Cargando...</h1>
    }
    return (
      <div className="playerBox">
        <div className="player">
          <div className="players">
            <p>{this.props.location.state.name}</p>
            <audio controls autoPlay>
              <source src={this.props.location.state.url} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
        <div className="suggestions">
          {this.props.location.state.songs ? 
            <h2>Escucha estas sugerencias...</h2>
            : null
          }          
          <div className="player">
            {this.state.randoms.slice(0,3).map((song, index) => 
              <div className="players" key={index}>
                <p>{song.name}</p>
                <audio controls>
                  <source src={song.preview_url} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default Player;